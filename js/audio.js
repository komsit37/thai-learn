// ─────────────────────────────────────────────────────────────
// Audio engine: Thai text-to-speech, speech recognition,
// and chiptune-ish feedback sounds via WebAudio.
// ─────────────────────────────────────────────────────────────

const Audio_ = {
  thaiVoice: null,

  init() {
    const pick = () => {
      const voices = speechSynthesis.getVoices();
      // Prefer a Google Thai voice, else any th-* voice
      this.thaiVoice =
        voices.find(v => /th/i.test(v.lang) && /google/i.test(v.name)) ||
        voices.find(v => v.lang.toLowerCase().startsWith('th')) || null;
      document.body.classList.toggle('no-thai-voice', !this.thaiVoice);
    };
    pick();
    speechSynthesis.onvoiceschanged = pick;
  },

  speak(text, { rate = 0.92, onend } = {}) {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'th-TH';
    if (this.thaiVoice) u.voice = this.thaiVoice;
    u.rate = rate;
    u.pitch = 1.05;
    if (onend) u.onend = onend;
    speechSynthesis.speak(u);
  },

  speakSlow(text) {
    this.speak(text, { rate: 0.6 });
  },

  // ── Speech recognition ────────────────────────────────────
  recognitionSupported() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  },

  // Listens once; resolves {text} or rejects on error/silence.
  listen() {
    return new Promise((resolve, reject) => {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SR) return reject(new Error('unsupported'));
      const rec = new SR();
      rec.lang = 'th-TH';
      rec.interimResults = false;
      rec.maxAlternatives = 3;
      let settled = false;
      rec.onresult = e => {
        settled = true;
        const alts = [...e.results[0]].map(r => r.transcript);
        resolve({ alternatives: alts });
      };
      rec.onerror = e => { if (!settled) { settled = true; reject(new Error(e.error)); } };
      rec.onend = () => { if (!settled) { settled = true; reject(new Error('no-speech')); } };
      rec.start();
    });
  },

  // ── Feedback sounds ───────────────────────────────────────
  ctx: null,
  _ac() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    return this.ctx;
  },

  _tone(freq, start, dur, type = 'triangle', vol = 0.18) {
    const ac = this._ac();
    const o = ac.createOscillator();
    const g = ac.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.setValueAtTime(0, ac.currentTime + start);
    g.gain.linearRampToValueAtTime(vol, ac.currentTime + start + 0.02);
    g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + start + dur);
    o.connect(g).connect(ac.destination);
    o.start(ac.currentTime + start);
    o.stop(ac.currentTime + start + dur + 0.05);
  },

  ding()    { this._tone(660, 0, .15); this._tone(880, .1, .2); },
  fanfare() { [523, 659, 784, 1047].forEach((f, i) => this._tone(f, i * .12, .25)); },
  boop()    { this._tone(220, 0, .2, 'sine', 0.12); },
  pop()     { this._tone(523, 0, .08, 'square', 0.06); },
  tada()    { [392, 523, 659, 784, 659, 784, 1047].forEach((f, i) => this._tone(f, i * .09, .22)); },
};

// ─────────────────────────────────────────────────────────────
// Fuzzy Thai matching for the speak challenge.
// Normalizes (strip spaces/punct/tone marks are kept — recognizers
// return proper Thai) then scores by Levenshtein similarity.
// ─────────────────────────────────────────────────────────────
function normalizeThai(s) {
  return (s || '')
    .replace(/[\s​!?.,ฯๆ"'؛:;()\-]/g, '')
    .replace(/ครับ|คับ|ค่ะ|คะ|จ้ะ|จ๊ะ|นะ/g, '')   // particles: pronunciation drills shouldn't hinge on them
    .trim();
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

// Returns 'great' | 'close' | 'try' comparing recognized alternatives vs target.
// threshold rises as the kid masters a phrase (see Adapt.speakThreshold).
function gradeSpeech(alternatives, targetThai, threshold = 0.62) {
  const target = normalizeThai(targetThai);
  if (!target) return 'great';
  let best = 0;
  for (const alt of alternatives) {
    const a = normalizeThai(alt);
    if (!a) continue;
    if (a.includes(target) || target.includes(a)) { best = Math.max(best, 0.95); continue; }
    const sim = 1 - levenshtein(a, target) / Math.max(a.length, target.length);
    best = Math.max(best, sim);
  }
  if (best >= threshold) return 'great';
  if (best >= Math.max(0.3, threshold - 0.25)) return 'close';
  return 'try';
}
