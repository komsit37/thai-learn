// ─────────────────────────────────────────────────────────────
// Adaptive learning engine: manages phrase mastery levels,
// Leitner-style spaced repetition, and weighted sampling.
// ─────────────────────────────────────────────────────────────

const Adapt = {
  _state: null,

  // The spaced-repetition store lives INSIDE the active profile
  // (state.adapt), so it's per-kid and travels with export/import.
  // Rebind every call so switching profiles picks up the right store.
  load() {
    if (typeof state === 'undefined' || !state) { this._state = {}; return; }
    if (!state.adapt) state.adapt = {};
    this._state = state.adapt;
  },

  // Internal: get today's date as YYYY-MM-DD
  _today() {
    const d = new Date();
    const pad = n => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  },

  // Internal: add days to a YYYY-MM-DD date string
  _addDays(dateStr, days) {
    const d = new Date(dateStr || this._today());
    d.setDate(d.getDate() + days);
    const pad = n => n.toString().padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  },

  // Get record for a phrase, or defaults if unseen
  get(key) {
    this.load();
    return this._state[key] || {
      box: 0,
      due: null,
      listenRight: 0,
      listenWrong: 0,
      speakPass: 0,
      speakFail: 0,
    };
  },

  // Update progress and adjust box/due date
  record(key, kind, success) {
    this.load();
    const rec = { ...this.get(key) };

    if (kind === 'listen') {
      success ? rec.listenRight++ : rec.listenWrong++;
    } else if (kind === 'speak') {
      success ? rec.speakPass++ : rec.speakFail++;
    }

    // Leitner box update: gentle for 8-year-olds
    if (success) {
      rec.box = Math.min(4, rec.box + 1);
    } else {
      rec.box = Math.max(0, rec.box - 1);
    }

    const INTERVALS = [0, 1, 2, 4, 7];
    rec.due = this._addDays(this._today(), INTERVALS[rec.box]);

    this._state[key] = rec;
    save();   // persists the active profile (incl. its adapt store)
  },

  strength(key) {
    return this.get(key).box;
  },

  isDue(key) {
    const rec = this.get(key);
    const activity = rec.listenRight + rec.listenWrong + rec.speakPass + rec.speakFail;
    // Unpracticed phrases are NOT "due" (they're "new")
    if (activity === 0) return false;
    return rec.due === null || rec.due <= this._today();
  },

  weight(key) {
    const rec = this.get(key);
    const box = rec.box;
    const activity = rec.listenRight + rec.listenWrong + rec.speakPass + rec.speakFail;
    
    let w = (5 - box) * 2;
    if (this.isDue(key)) w += 4;
    if (activity === 0) w += 2;
    
    return Math.max(1, w);
  },

  // Sample up to n distinct items without replacement
  pickWeighted(items, n) {
    if (items.length <= n) {
      return [...items].sort(() => Math.random() - 0.5);
    }

    const result = [];
    const remaining = [...items];

    while (result.length < n && remaining.length > 0) {
      const weights = remaining.map(item => this.weight(item.key));
      const totalWeight = weights.reduce((a, b) => a + b, 0);
      let r = Math.random() * totalWeight;

      for (let i = 0; i < remaining.length; i++) {
        r -= weights[i];
        if (r <= 0) {
          result.push(remaining[i]);
          remaining.splice(i, 1);
          break;
        }
      }
    }
    return result;
  },

  // keyPrefix is "missionId:questId"; phraseCount is the quest's phrase count
  missionStats(keyPrefix, phraseCount) {
    let totalBox = 0;
    for (let i = 0; i < phraseCount; i++) {
      totalBox += this.strength(`${keyPrefix}:${i}`);
    }
    const avgBox = totalBox / phraseCount;

    if (avgBox < 1.2) return { avgBox, level: 1, label: 'Rookie', emoji: '🌱' };
    if (avgBox < 2.8) return { avgBox, level: 2, label: 'Pro', emoji: '⭐' };
    return { avgBox, level: 3, label: 'Superstar', emoji: '🏆' };
  },

  speakThreshold(key) {
    const box = this.strength(key);
    if (box <= 1) return 0.50;
    if (box <= 3) return 0.62;
    return 0.72;
  },

  listenMode(key) {
    const box = this.strength(key);
    if (box <= 1) return 'easy';
    if (box <= 3) return 'medium';
    return 'hard';
  },

  dueCount(keys) {
    return keys.filter(k => this.isDue(k)).length;
  },

  resetAll() {
    if (typeof state !== 'undefined' && state) state.adapt = {};
    this._state = {};
    save();
  },
};
