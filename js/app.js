// ─────────────────────────────────────────────────────────────
// Mission: Bangkok — app shell, state, screens, games
// ─────────────────────────────────────────────────────────────

// ── Profile store ────────────────────────────────────────
// All progress lives in localStorage as a list of profiles.
// `state` points at the ACTIVE profile object (null on the picker).
// save() writes the whole store back. Each profile carries its own
// progress, badges, streak, and adaptive-engine store, so it can be
// exported/imported to move a kid between devices.
const PROFILES_KEY = 'mission-bangkok-profiles-v1';
const OLD_STATE_KEY = 'mission-bangkok-v1';        // pre-profile single save
const OLD_ADAPT_KEY = 'mission-bangkok-adapt-v1';

let store = loadStore();
let state = activeProfile();   // null until a profile is chosen

function loadStore() {
  let s = null;
  try { s = JSON.parse(localStorage.getItem(PROFILES_KEY)); } catch {}
  if (!s || !Array.isArray(s.profiles)) s = { activeId: null, profiles: [] };
  s.profiles = s.profiles.map(normalizeProfile);
  migrateOldSave(s);
  return s;
}

function persist() { localStorage.setItem(PROFILES_KEY, JSON.stringify(store)); }

function activeProfile() { return store.profiles.find(p => p.id === store.activeId) || null; }

function save() {
  if (!state) return;
  state.updatedAt = new Date().toISOString();
  persist();
}

function newId() { return 'p_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

function normalizeProfile(p) {
  p = p || {};
  return {
    id: p.id || newId(),
    avatar: p.avatar || AVATARS[0],
    name: p.name || 'Agent',
    tripDate: p.tripDate || null,
    xp: p.xp || 0,
    progress: p.progress || {},        // missionId -> questId -> {learn,listen,speak}
    badges: p.badges || [],
    streak: p.streak || { last: null, count: 0 },
    callDone: p.callDone || {},        // missionId -> bool
    adapt: p.adapt || {},              // spaced-repetition store
    activeMission: p.activeMission || MISSIONS[0].id,
    createdAt: p.createdAt || new Date().toISOString(),
    updatedAt: p.updatedAt || new Date().toISOString(),
  };
}

function makeProfile(name, avatar) {
  const p = normalizeProfile({ name, avatar });
  const d = new Date(); d.setDate(d.getDate() + 30);   // default trip 30 days out
  p.tripDate = d.toISOString().slice(0, 10);
  return p;
}

// One-time migration of the old single-profile save into a profile.
function migrateOldSave(s) {
  if (s.profiles.length) return;
  let old = null;
  try { old = JSON.parse(localStorage.getItem(OLD_STATE_KEY)); } catch {}
  if (!old || !old.name) return;
  let oldAdapt = {};
  try { oldAdapt = JSON.parse(localStorage.getItem(OLD_ADAPT_KEY)) || {}; } catch {}
  const reAdapt = {};   // old keys "questId:index" → "bangkok:questId:index"
  Object.entries(oldAdapt).forEach(([k, v]) => { reAdapt['bangkok:' + k] = v; });
  const p = normalizeProfile({
    name: old.name,
    tripDate: old.tripDate || null,
    xp: old.xp || 0,
    progress: { bangkok: old.progress || {} },
    badges: old.badges || [],
    streak: old.streak || { last: null, count: 0 },
    callDone: { bangkok: !!old.chatDone },
    adapt: reAdapt,
  });
  s.profiles.push(p);
  s.activeId = p.id;
}

// ── Active mission / quest helpers ───────────────────────
function cur() { return MISSIONS.find(m => m.id === state.activeMission) || MISSIONS[0]; }
function quests() { return cur().quests; }
function findQuest(qid) { return cur().quests.find(q => q.id === qid); }

function prog(qid) {
  const mid = state.activeMission;
  if (!state.progress[mid]) state.progress[mid] = {};
  if (!state.progress[mid][qid]) state.progress[mid][qid] = { learn: false, listen: 0, speak: 0 };
  return state.progress[mid][qid];
}

function todayStr() { return new Date().toISOString().slice(0, 10); }

function bumpStreak() {
  const today = todayStr();
  if (state.streak.last === today) return;
  const y = new Date(); y.setDate(y.getDate() - 1);
  state.streak.count = state.streak.last === y.toISOString().slice(0, 10) ? state.streak.count + 1 : 1;
  state.streak.last = today;
  if (state.streak.count >= 3) earnBadge('streak-3');
  if (state.streak.count >= 7) earnBadge('streak-7');
  save();
}

function addXP(n) { state.xp += n; save(); }

function totalStars() {
  const mp = state.progress[state.activeMission] || {};
  return Object.values(mp).reduce((t, p) => t + (p.listen || 0) + (p.speak || 0) + (p.learn ? 1 : 0), 0);
}

function daysToTrip() {
  if (!state.tripDate) return null;
  const diff = Math.ceil((new Date(state.tripDate) - new Date().setHours(0, 0, 0, 0)) / 86400000);
  return diff;
}

function fillName(text) { return text.replaceAll('___', state.name || '___'); }

// phrases tagged with their adaptive-engine key ("missionId:questId:index")
function keyedPhrases(q) { return q.phrases.map((p, i) => ({ ...p, key: `${state.activeMission}:${q.id}:${i}` })); }

// all quiz-able phrases from quests (in the active mission) whose Learn step is done
function reviewPool() {
  const pool = [];
  quests().forEach((q, i) => {
    if (questUnlocked(i) && prog(q.id).learn) {
      keyedPhrases(q).forEach(p => { if (!p.blank) pool.push(p); });
    }
  });
  return pool;
}

// ── badges ───────────────────────────────────────────────
// all badges visible for the active mission (mission-specific + global)
function allBadges() { return [...cur().badges, ...GLOBAL_BADGES]; }

function earnBadge(id) {
  if (state.badges.includes(id)) return;
  state.badges.push(id);
  save();
  const b = allBadges().find(x => x.id === id);
  if (!b) return;
  Audio_.tada();
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<span class="t-emoji">${b.emoji}</span><span>Badge unlocked: ${b.name}!</span>`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

// Evaluate the active mission's declarative badge rules after any progress.
function badgeRuleMet(when) {
  if (!when) return false;
  if (when.quest) {
    const p = prog(when.quest);
    if (when.need === 'learn') return p.learn;
    if (when.need === 'complete') return p.learn && p.listen > 0 && p.speak > 0;
    if (when.need === 'listen2') return p.learn && p.listen >= 2;
  }
  if (when.allQuests === 'learn') return quests().every(q => prog(q.id).learn);
  if (when.call) return !!state.callDone[state.activeMission];
  return false;
}

function checkQuestBadges() {
  cur().badges.forEach(b => { if (badgeRuleMet(b.when)) earnBadge(b.id); });
}

// ── confetti ─────────────────────────────────────────────
function confetti(n = 70) {
  const colors = ['#ff3e8a', '#ffb341', '#00b8a9', '#8c52ff', '#3ec300', '#ff7a30'];
  for (let i = 0; i < n; i++) {
    const c = document.createElement('div');
    c.className = 'confetti-bit';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = colors[i % colors.length];
    c.style.borderRadius = Math.random() > .5 ? '50%' : '3px';
    c.style.animationDuration = 1.6 + Math.random() * 1.6 + 's';
    c.style.animationDelay = Math.random() * .5 + 's';
    c.style.width = c.style.height = 8 + Math.random() * 9 + 'px';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

// ── tiny dom helper ──────────────────────────────────────
const app = document.getElementById('app');
function html(strings, ...vals) { return strings.reduce((a, s, i) => a + s + (vals[i] ?? ''), ''); }
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

// ─────────────────────────────────────────────────────────
// SCREENS
// ─────────────────────────────────────────────────────────

function header() {
  const d = daysToTrip();
  return html`
    <div class="topbar">
      <div class="logo" onclick="renderHome()">MISSION:<em>BANGKOK</em> 🛺</div>
      <div class="stats">
        <span class="chip who" onclick="renderPicker()" title="Switch player">${state.avatar} ${esc(state.name)}</span>
        <span class="chip">🔥 ${state.streak.count}</span>
        <span class="chip">⭐ ${totalStars()}</span>
        <span class="chip">⚡ ${state.xp} XP</span>
        <span class="chip gear" onclick="openSettings()">⚙️</span>
      </div>
    </div>
    <div class="voice-warn">😢 No Thai voice found in this browser — open this app in <b>Google Chrome</b> for Thai audio!</div>
    ${d !== null ? html`
      <div class="countdown">
        <span class="tuk">🛺</span>
        <div>
          <b>${d > 0 ? `${d} days until Bangkok!` : d === 0 ? "It's Bangkok day! 🎉" : 'Sawasdee from Bangkok! 🇹🇭'}</b>
          <small>${state.name ? esc(state.name) + ', the' : 'The'} family is waiting to hear your Thai ✨</small>
        </div>
      </div>` : ''}
  `;
}

function questUnlocked(i) {
  return i === 0 || prog(quests()[i - 1].id).learn;
}

function starsFor(mid) {
  const p = prog(mid);
  return (p.learn ? 1 : 0) + p.listen + p.speak;
}

function starRow(mid) {
  const got = starsFor(mid);
  return '⭐'.repeat(got) + '<span style="opacity:.25">' + '⭐'.repeat(7 - got) + '</span>';
}

function renderHome() {
  speechSynthesis.cancel();
  const m = cur();
  const qs = quests();
  let firstUnfinished = qs.findIndex((q, i) => questUnlocked(i) && starsFor(q.id) < 7);
  const pool = reviewPool();
  const due = Adapt.dueCount(pool.map(p => p.key));
  const call = m.call;
  app.innerHTML = html`
    ${header()}
    <div class="screen-head">
      <button class="backbtn" onclick="renderMissionSelect()">←</button>
      <div><h2>${m.emoji} ${m.title}</h2><div class="sub">Pick a quest, agent!</div></div>
    </div>
    ${pool.length ? html`
      <button class="bigbtn power" onclick="startPowerUp()">
        <span class="big-emoji">⚡</span>
        Daily Power-Up
        ${due ? `<span class="due-badge">${due} to rescue!</span>` : ''}
        <small>Quick review of the words your brain is about to forget</small>
      </button>` : ''}
    <div class="bigbtn-row">
      ${call ? html`
      <button class="bigbtn call" onclick="renderTalk()">
        <span class="big-emoji">${call.homeEmoji || '📞'}</span>
        ${call.label || 'Video Call'}
        <small>${call.blurb || 'Practice a real conversation'}</small>
      </button>` : ''}
      <button class="bigbtn badges" onclick="renderBadges()">
        <span class="big-emoji">🎖️</span>
        My Badges
        <small>${state.badges.length} of ${allBadges().length} collected</small>
      </button>
    </div>
    <div class="path">
      ${qs.map((q, i) => {
        const unlocked = questUnlocked(i);
        const st = Adapt.missionStats(`${m.id}:${q.id}`, q.phrases.length);
        const showLvl = unlocked && prog(q.id).learn;
        return html`
        <div class="mission-card c-${q.color} ${unlocked ? '' : 'locked'}"
             onclick="${unlocked ? `renderMission('${q.id}')` : `Audio_.boop()`}">
          ${i === firstUnfinished ? '<span class="here">YOU ARE HERE</span>' : ''}
          <div class="m-emoji">${unlocked ? q.emoji : '🔒'}</div>
          <div>
            <div class="m-num">Quest ${q.num}</div>
            <h3>${q.title}</h3>
            <div class="m-stars">${starRow(q.id)}
              ${showLvl ? `<span class="lvl">${st.emoji} ${st.label}</span>` : ''}</div>
          </div>
        </div>`;
      }).join('')}
    </div>
  `;
}

function renderMission(mid) {
  speechSynthesis.cancel();
  const m = findQuest(mid);
  const p = prog(mid);
  const gamesLocked = !p.learn;
  app.innerHTML = html`
    ${header()}
    <div class="screen-head">
      <button class="backbtn" onclick="renderHome()">←</button>
      <div>
        <h2>${m.emoji} ${m.title}</h2>
        <div class="sub">Quest ${m.num} · ${m.phrases.length} phrases</div>
      </div>
    </div>
    <div class="intro-bubble">💡 ${m.intro}</div>
    <div class="acts">
      <div class="act ${p.learn ? 'done' : ''}" onclick="renderLearn('${mid}')">
        <span class="a-emoji">📖</span> Learn
        <span class="a-stars">${p.learn ? '⭐ done!' : '☆'}</span>
      </div>
      <div class="act ${gamesLocked ? 'locked' : p.listen ? 'done' : ''}"
           onclick="${gamesLocked ? 'Audio_.boop()' : `startListen('${mid}')`}">
        <span class="a-emoji">👂</span> Listen
        <span class="a-stars">${gamesLocked ? '🔒 learn first' : '⭐'.repeat(p.listen) + '☆'.repeat(3 - p.listen)}</span>
      </div>
      <div class="act ${gamesLocked ? 'locked' : p.speak ? 'done' : ''}"
           onclick="${gamesLocked ? 'Audio_.boop()' : `startSpeak('${mid}')`}">
        <span class="a-emoji">🎤</span> Speak
        <span class="a-stars">${gamesLocked ? '🔒 learn first' : '⭐'.repeat(p.speak) + '☆'.repeat(3 - p.speak)}</span>
      </div>
    </div>
  `;
}

// ── LEARN: flip through phrase cards ─────────────────────
let learnIdx = 0;
function renderLearn(mid, idx = 0) {
  const m = findQuest(mid);
  learnIdx = idx;
  const ph = m.phrases[idx];
  const thai = fillName(ph.thai);
  const last = idx === m.phrases.length - 1;
  app.innerHTML = html`
    ${header()}
    <div class="screen-head">
      <button class="backbtn" onclick="renderMission('${mid}')">←</button>
      <div><h2>📖 Learn it!</h2><div class="sub">${m.emoji} ${m.title}</div></div>
    </div>
    <div class="phrase-stage">
      <div class="phrase-card">
        <div class="counter-pill">${idx + 1} / ${m.phrases.length}</div>
        <div class="p-emoji">${ph.emoji}</div>
        <div class="p-thai">${esc(thai)}</div>
        <div class="p-roman">${esc(fillName(ph.roman))}</div>
        <div class="p-kana">${esc(fillName(ph.kana))}</div>
        <div class="p-mean">${esc(fillName(ph.en))}</div>
        <div class="p-jp">${esc(ph.jp)}</div>
        ${ph.tip ? `<div class="p-tip">💡 ${esc(ph.tip)}</div>` : ''}
      </div>
      <div class="soundrow">
        <button class="soundbtn play" onclick="Audio_.pop(); Audio_.speak(${esc(JSON.stringify(thai))})">🔊 Hear it</button>
        <button class="soundbtn slow" onclick="Audio_.pop(); Audio_.speakSlow(${esc(JSON.stringify(thai))})">🐢 Slow</button>
      </div>
      <div class="navrow">
        <button class="navbtn" ${idx === 0 ? 'disabled' : ''} onclick="renderLearn('${mid}', ${idx - 1})">← Back</button>
        <button class="navbtn primary" onclick="${last ? `finishLearn('${mid}')` : `Audio_.pop(); renderLearn('${mid}', ${idx + 1})`}">
          ${last ? '🏁 Finish!' : 'Next →'}
        </button>
      </div>
    </div>
  `;
  // auto-play the phrase when the card appears
  setTimeout(() => Audio_.speak(thai), 350);
}

function finishLearn(mid) {
  const p = prog(mid);
  const first = !p.learn;
  p.learn = true;
  if (first) addXP(20);
  bumpStreak();
  checkQuestBadges();
  save();
  confetti(50);
  Audio_.fanfare();
  const m = findQuest(mid);
  app.innerHTML = html`
    ${header()}
    <div class="result-card">
      <div class="r-stars"><span class="lit">🎉</span></div>
      <h2>Phrases learned!</h2>
      <p>You finished all ${m.phrases.length} phrases in ${m.title}.<br>Now play the games to earn stars!</p>
      ${first ? '<div class="xp-burst">+20 XP ⚡</div>' : ''}
      <div class="navrow">
        <button class="navbtn" onclick="renderHome()">🏠 Home</button>
        <button class="navbtn primary" onclick="startListen('${mid}')">👂 Listen Game →</button>
      </div>
    </div>
  `;
}

// ── LISTEN game (adaptive) ───────────────────────────────
// Weak / overdue phrases come up more often (Adapt.pickWeighted),
// and each phrase's quiz gets harder as its mastery box grows:
//   easy   → emoji + English options
//   medium → English only (no emoji crutch)
//   hard   → Thai-script options (read to match what you heard!)
const listenGame = { mid: null, power: false, pool: [], rounds: [], idx: 0, score: 0, answered: false };

function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

function buildListenRounds(pool, n) {
  return Adapt.pickWeighted(pool, n).map(target => {
    const wrong = shuffle(pool.filter(p => p.key !== target.key)).slice(0, 3);
    return { target, options: shuffle([target, ...wrong]), mode: Adapt.listenMode(target.key) };
  });
}

function startListen(mid) {
  const m = findQuest(mid);
  const pool = keyedPhrases(m).filter(p => !p.blank);
  listenGame.mid = mid;
  listenGame.power = false;
  listenGame.rounds = buildListenRounds(pool, Math.min(8, pool.length));
  listenGame.idx = 0;
  listenGame.score = 0;
  renderListenRound();
}

function startPowerUp() {
  const pool = reviewPool();
  if (!pool.length) return Audio_.boop();
  listenGame.mid = null;
  listenGame.power = true;
  listenGame.rounds = buildListenRounds(pool, Math.min(8, pool.length));
  listenGame.idx = 0;
  listenGame.score = 0;
  renderListenRound();
}

const LISTEN_MODE_CHIP = { easy: '🌱 new', medium: '⭐ no hints', hard: '🏆 read the Thai!' };

function listenOption(o, i, mode) {
  if (mode === 'hard') {
    return html`<button class="option thai-opt" id="opt-${i}" onclick="answerListen(${i})">${esc(o.thai)}</button>`;
  }
  return html`
    <button class="option" id="opt-${i}" onclick="answerListen(${i})">
      ${mode === 'easy' ? `<span class="o-emoji">${o.emoji}</span>` : ''}${esc(o.en)}
    </button>`;
}

function renderListenRound() {
  const g = listenGame;
  if (g.idx >= g.rounds.length) return finishListen();
  const m = g.power ? null : findQuest(g.mid);
  const r = g.rounds[g.idx];
  g.answered = false;
  app.innerHTML = html`
    ${header()}
    <div class="screen-head">
      <button class="backbtn" onclick="${g.power ? 'renderHome()' : `renderMission('${g.mid}')`}">←</button>
      <div>
        <h2>${g.power ? '⚡ Daily Power-Up' : '👂 Listen & Tap'}</h2>
        <div class="sub">${g.power ? 'Mixed review — rescue your words!' : `${m.emoji} ${m.title}`}</div>
      </div>
    </div>
    <div class="quiz-top">
      <span class="score-pill">Q${g.idx + 1}/${g.rounds.length}</span>
      <div class="progress-track"><div class="progress-fill" style="width:${g.idx / g.rounds.length * 100}%"></div></div>
      <span class="score-pill">✅ ${g.score}</span>
    </div>
    <button class="earbtn" onclick="Audio_.speak(${esc(JSON.stringify(r.target.thai))})">👂</button>
    <div class="quiz-hint">
      <span class="diff-chip">${LISTEN_MODE_CHIP[r.mode]}</span><br>
      ${r.mode === 'hard' ? 'You know this one — now READ it: tap the Thai you heard!' : 'Tap the ear to hear it again — then tap what it means!'}
    </div>
    <div class="options">
      ${r.options.map((o, i) => listenOption(o, i, r.mode)).join('')}
    </div>
  `;
  setTimeout(() => Audio_.speak(r.target.thai), 400);
}

function answerListen(i) {
  const g = listenGame;
  if (g.answered) return;
  g.answered = true;
  const r = g.rounds[g.idx];
  const chosen = r.options[i];
  const correct = chosen.key === r.target.key;
  Adapt.record(r.target.key, 'listen', correct);
  const btn = document.getElementById('opt-' + i);
  if (correct) {
    g.score++;
    btn.classList.add('correct');
    Audio_.ding();
  } else {
    btn.classList.add('wrong');
    Audio_.boop();
    const right = r.options.findIndex(o => o.key === r.target.key);
    document.getElementById('opt-' + right).classList.add('reveal');
  }
  setTimeout(() => { g.idx++; renderListenRound(); }, correct ? 900 : 1700);
}

function starsFromRatio(ratio) {
  if (ratio >= 0.87) return 3;
  if (ratio >= 0.6) return 2;
  if (ratio >= 0.35) return 1;
  return 0;
}

function finishListen() {
  const g = listenGame;
  if (g.power) return finishPowerUp();
  const stars = starsFromRatio(g.score / g.rounds.length);
  const p = prog(g.mid);
  const gained = Math.max(0, stars - p.listen);
  p.listen = Math.max(p.listen, stars);
  if (gained) addXP(gained * 10);
  bumpStreak();
  if (stars === 3) earnBadge('golden-ear');
  checkQuestBadges();
  save();
  if (stars >= 2) { confetti(); Audio_.fanfare(); } else Audio_.ding();
  renderGameResult({
    stars,
    title: stars === 3 ? 'PERFECT EARS!' : stars === 2 ? 'Great listening!' : stars === 1 ? 'Nice try!' : 'Keep practicing!',
    detail: `You got ${g.score} out of ${g.rounds.length} right.`,
    xp: gained * 10,
    retry: `startListen('${g.mid}')`,
    next: `startSpeak('${g.mid}')`,
    nextLabel: '🎤 Speak Challenge →',
    mid: g.mid,
  });
}

function finishPowerUp() {
  const g = listenGame;
  const xp = g.score * 3;
  addXP(xp);
  bumpStreak();
  save();
  const due = Adapt.dueCount(reviewPool().map(p => p.key));
  if (g.score >= g.rounds.length * 0.75) { confetti(); Audio_.fanfare(); } else Audio_.ding();
  app.innerHTML = html`
    ${header()}
    <div class="result-card">
      <div class="r-stars"><span class="lit">⚡</span></div>
      <h2>${g.score === g.rounds.length ? 'ALL WORDS RESCUED!' : 'Brain charged up!'}</h2>
      <p>You got ${g.score} of ${g.rounds.length} — ${due ? `${due} words still need rescuing.` : 'every word is safe for today!'}</p>
      <div class="xp-burst">+${xp} XP ⚡</div>
      <div class="navrow">
        <button class="navbtn" onclick="renderHome()">🏠 Home</button>
        <button class="navbtn primary" onclick="startPowerUp()">⚡ Once more!</button>
      </div>
    </div>
  `;
}

function renderGameResult({ stars, title, detail, xp, retry, next, nextLabel, mid }) {
  app.innerHTML = html`
    ${header()}
    <div class="result-card">
      <div class="r-stars">
        ${[1, 2, 3].map(i => i <= stars ? '<span class="lit">⭐</span>' : '<span style="opacity:.2">⭐</span>').join('')}
      </div>
      <h2>${title}</h2>
      <p>${detail}</p>
      ${xp ? `<div class="xp-burst">+${xp} XP ⚡</div>` : ''}
      <div class="navrow">
        <button class="navbtn" onclick="renderMission('${mid}')">↩ Mission</button>
        <button class="navbtn" onclick="${retry}">🔁 Again</button>
        <button class="navbtn primary" onclick="${next}">${nextLabel}</button>
      </div>
    </div>
  `;
}

// ── SPEAK challenge (adaptive) ───────────────────────────
// Weak phrases come up more often; the pass threshold rises with
// mastery (Adapt.speakThreshold). Mastered phrases ("memory mode")
// don't auto-play first — he has to produce them from the script.
const speakGame = { mid: null, rounds: [], idx: 0, passed: 0 };

function startSpeak(mid) {
  const m = findQuest(mid);
  speakGame.mid = mid;
  speakGame.rounds = Adapt.pickWeighted(keyedPhrases(m), Math.min(5, m.phrases.length));
  speakGame.idx = 0;
  speakGame.passed = 0;
  renderSpeakRound();
}

function renderSpeakRound() {
  const g = speakGame;
  const m = findQuest(g.mid);
  if (g.idx >= g.rounds.length) return finishSpeak();
  const ph = g.rounds[g.idx];
  const thai = fillName(ph.thai);
  const memoryMode = Adapt.strength(ph.key) >= 4;
  const supported = Audio_.recognitionSupported();
  app.innerHTML = html`
    ${header()}
    <div class="screen-head">
      <button class="backbtn" onclick="renderMission('${g.mid}')">←</button>
      <div><h2>🎤 Speak it!</h2><div class="sub">${m.emoji} ${m.title} · ${g.idx + 1}/${g.rounds.length}</div></div>
    </div>
    <div class="phrase-stage">
      <div class="phrase-card">
        <div class="counter-pill">${memoryMode ? '🏆 memory mode — no help!' : 'say this out loud!'}</div>
        <div class="p-emoji">${ph.emoji}</div>
        <div class="p-thai">${esc(thai)}</div>
        <div class="p-roman">${esc(fillName(ph.roman))}</div>
        <div class="p-kana">${esc(fillName(ph.kana))}</div>
        <div class="soundrow" style="margin-top:.9rem">
          <button class="soundbtn play" onclick="Audio_.speak(${esc(JSON.stringify(thai))})">🔊 Hear it</button>
          <button class="soundbtn slow" onclick="Audio_.speakSlow(${esc(JSON.stringify(thai))})">🐢 Slow</button>
        </div>
      </div>
      ${supported ? html`
        <button class="micbtn" id="micbtn" onclick="doListen()">🎤</button>
        <div class="speak-result" id="speak-result">${memoryMode ? 'You\'ve mastered this one — say it without listening first!' : 'Tap the mic, then say it loud and proud!'}</div>
      ` : html`
        <div class="speak-result">🎤 Mic game needs Google Chrome.<br>Say it out loud 3 times, then tap below!</div>
        <button class="navbtn primary" style="flex:none;padding:.8rem 2rem" onclick="speakSelfPass()">💪 I said it!</button>
      `}
      <div class="navrow">
        <button class="navbtn" onclick="speakSkip()">Skip →</button>
      </div>
    </div>
  `;
  // mastered phrases must come from memory — no warm-up audio
  if (!memoryMode) setTimeout(() => Audio_.speak(thai), 350);
}

async function doListen() {
  const g = speakGame;
  const ph = g.rounds[g.idx];
  const targetThai = fillName(ph.thai);
  const btn = document.getElementById('micbtn');
  const out = document.getElementById('speak-result');
  speechSynthesis.cancel();
  btn.classList.add('listening');
  btn.disabled = true;
  out.innerHTML = '<span class="verdict">👂 Listening… speak now!</span>';
  try {
    const { alternatives } = await Audio_.listen();
    const grade = gradeSpeech(alternatives, targetThai, Adapt.speakThreshold(ph.key));
    const heard = esc(alternatives[0] || '');
    if (grade === 'great') {
      Adapt.record(ph.key, 'speak', true);
      Audio_.fanfare(); confetti(35);
      out.innerHTML = `<span class="verdict great">🌟 PERFECT! เก่งมาก!</span><span class="heard">I heard: ${heard}</span>`;
      setTimeout(() => speakPass(true), 1400);
      return;
    } else if (grade === 'close') {
      Audio_.ding();
      out.innerHTML = `<span class="verdict close">🔆 SO close! Try once more!</span><span class="heard">I heard: ${heard}</span>`;
    } else {
      Adapt.record(ph.key, 'speak', false);
      Audio_.boop();
      out.innerHTML = `<span class="verdict try">💭 Hmm, listen again and copy the sound!</span><span class="heard">I heard: ${heard}</span>`;
    }
  } catch (e) {
    Audio_.boop();
    const msg = {
      'not-allowed': '🎤 Please allow the microphone in your browser!',
      'service-not-allowed': '🎤 Please allow the microphone in your browser!',
      'audio-capture': '🎤 No microphone found — check it\'s plugged in!',
      'network': '🌐 The Thai mic game needs the internet — check your connection!',
    }[e.message] || '🤫 I didn\'t hear anything — try again!';
    out.innerHTML = `<span class="verdict try">${msg}</span>`;
  }
  btn.classList.remove('listening');
  btn.disabled = false;
}

function speakPass(passed) {
  if (passed) speakGame.passed++;
  speakGame.idx++;
  renderSpeakRound();
}
// honor-system fallback when speech recognition is unavailable
function speakSelfPass() {
  Adapt.record(speakGame.rounds[speakGame.idx].key, 'speak', true);
  speakPass(true);
}
function speakSkip() {
  Adapt.record(speakGame.rounds[speakGame.idx].key, 'speak', false);
  speakGame.idx++;
  renderSpeakRound();
}

function finishSpeak() {
  const g = speakGame;
  const stars = starsFromRatio(g.passed / g.rounds.length);
  const p = prog(g.mid);
  const gained = Math.max(0, stars - p.speak);
  p.speak = Math.max(p.speak, stars);
  if (gained) addXP(gained * 15);
  bumpStreak();
  if (stars === 3) earnBadge('brave-voice');
  checkQuestBadges();
  save();
  if (stars >= 2) { confetti(); Audio_.tada(); } else Audio_.ding();

  const qs = quests();
  const qi = qs.findIndex(x => x.id === g.mid);
  const nextQ = qs[qi + 1];
  const call = cur().call;
  renderGameResult({
    stars,
    title: stars === 3 ? 'SUPERSTAR VOICE!' : stars === 2 ? 'Brave speaking!' : stars === 1 ? 'Good effort!' : 'Warm-up round!',
    detail: `You nailed ${g.passed} of ${g.rounds.length} phrases out loud.`,
    xp: gained * 15,
    retry: `startSpeak('${g.mid}')`,
    next: nextQ ? `renderMission('${nextQ.id}')` : `renderTalk()`,
    nextLabel: nextQ ? `${nextQ.emoji} Next Quest →` : `${call && call.homeEmoji || '📞'} ${call && call.label || 'Video Call'} →`,
    mid: g.mid,
  });
}

// ── TALK: video-call roleplay (persona + script from cur().call) ──
const chat = { step: 0, log: [] };
function callCfg() { return cur().call; }

function renderTalk() {
  speechSynthesis.cancel();
  chat.step = 0;
  chat.log = [];
  drawChat();
  setTimeout(() => yaaSpeaks(), 600);
}

function drawChat() {
  const call = callCfg();
  const step = call.steps[chat.step];
  const done = chat.step >= call.steps.length;
  app.innerHTML = html`
    ${header()}
    <div class="screen-head">
      <button class="backbtn" onclick="renderHome()">←</button>
      <div><h2>📞 Video Call</h2><div class="sub">Talking with ${esc(call.personaName)} (${call.personaName === 'Yaa' ? 'Grandma' : esc(call.personaName)})</div></div>
    </div>
    <div class="call-frame">
      <div class="call-head">
        <div class="avatar">${call.personaEmoji}</div>
        <div><b>${esc(call.personaName)} ${call.personaThai || ''}</b><span style="font-size:.8rem">${call.personaPlace || ''}</span></div>
        <span class="live" style="margin-left:auto">● LIVE</span>
      </div>
      <div class="chat-log" id="chat-log">
        ${chat.log.map(b => html`
          <div class="bubble ${b.who}">
            <div class="b-thai">${esc(b.thai)}
              <button class="b-speak" onclick="Audio_.speak(${esc(JSON.stringify(b.thai))})">🔊</button>
            </div>
            <div class="b-roman">${esc(b.roman)}</div>
            <div class="b-en">${esc(b.en)}</div>
          </div>`).join('')}
      </div>
      ${!done && step && chat.log.length && chat.log[chat.log.length - 1].who === 'yaa' ? html`
        <div class="choices">
          <span class="choice-label">Your turn — pick what to say:</span>
          ${step.replies.map((r, i) => html`
            <button class="choice" onclick="kidSays(${i})">
              <span>${r.emoji}</span>
              <span>
                <span style="font-size:1.05rem">${esc(r.thai)}</span>
                <small>${esc(r.roman)} — ${esc(r.en)}</small>
              </span>
              <span class="c-hear" onclick="event.stopPropagation(); Audio_.speak(${esc(JSON.stringify(r.thai))})">🔊</span>
            </button>`).join('')}
        </div>` : ''}
    </div>
  `;
  const log = document.getElementById('chat-log');
  if (log) log.scrollTop = log.scrollHeight;
}

function yaaSpeaks() {
  const step = callCfg().steps[chat.step];
  if (!step) return finishChat();
  chat.log.push({ who: 'yaa', ...step.yaa });
  drawChat();
  Audio_.speak(step.yaa.thai);
}

function kidSays(i) {
  const step = callCfg().steps[chat.step];
  const r = step.replies[i];
  chat.log.push({ who: 'kid', thai: r.thai, roman: r.roman, en: r.en });
  drawChat();
  Audio_.pop();
  Audio_.speak(r.thai, { onend: () => {
    chat.step++;
    setTimeout(() => yaaSpeaks(), 500);
  }});
  // safety: if TTS is unavailable, still advance
  if (!Audio_.thaiVoice) { chat.step++; setTimeout(() => yaaSpeaks(), 1200); }
}

function finishChat() {
  const first = !state.callDone[state.activeMission];
  state.callDone[state.activeMission] = true;
  if (first) addXP(50);
  bumpStreak();
  checkQuestBadges();   // awards the call badge (when.call) for this mission
  save();
  confetti(90);
  Audio_.tada();
  app.innerHTML = html`
    ${header()}
    <div class="result-card">
      <div class="r-stars"><span class="lit">💬</span><span class="lit">${callCfg().personaEmoji}</span><span class="lit">❤️</span></div>
      <h2>You talked with ${esc(callCfg().personaName)}!</h2>
      <p>A whole conversation in Thai — the real one is going to be amazing.<br>
         Try it again and pick different answers!</p>
      ${first ? '<div class="xp-burst">+50 XP ⚡</div>' : ''}
      <div class="navrow">
        <button class="navbtn" onclick="renderHome()">🏠 Home</button>
        <button class="navbtn primary" onclick="renderTalk()">📞 Call again</button>
      </div>
    </div>
  `;
}

// ── badges screen ────────────────────────────────────────
function renderBadges() {
  app.innerHTML = html`
    ${header()}
    <div class="screen-head">
      <button class="backbtn" onclick="renderHome()">←</button>
      <div><h2>🎖️ Badge Collection</h2><div class="sub">${state.badges.length} of ${allBadges().length} collected</div></div>
    </div>
    <div class="badge-grid">
      ${allBadges().map(b => html`
        <div class="badge-card ${state.badges.includes(b.id) ? 'earned' : 'locked'}">
          <div class="bg-emoji">${b.emoji}</div>
          <b>${b.name}</b>
          <small>${b.desc}</small>
        </div>`).join('')}
    </div>
  `;
}

// ── avatar picker (shared by create + settings) ──────────
let chosenAvatar = AVATARS[0];
function avatarGrid(sel) {
  chosenAvatar = sel;
  return '<div class="avatar-grid">' + AVATARS.map(a =>
    `<button type="button" class="av-opt ${a === sel ? 'sel' : ''}" onclick="chooseAvatar(this,'${a}')">${a}</button>`
  ).join('') + '</div>';
}
function chooseAvatar(btn, emoji) {
  chosenAvatar = emoji;
  btn.parentElement.querySelectorAll('.av-opt').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  Audio_.pop();
}

// ── settings (per profile) ───────────────────────────────
function closeModal() { document.querySelector('.modal-wrap')?.remove(); }

function openSettings() {
  const wrap = document.createElement('div');
  wrap.className = 'modal-wrap';
  wrap.innerHTML = html`
    <div class="modal">
      <h3>⚙️ ${state.avatar} ${esc(state.name)}</h3>
      <label>Name (shows in phrases)</label>
      <input id="set-name" value="${esc(state.name)}" maxlength="20">
      <label>Pick a face</label>
      ${avatarGrid(state.avatar)}
      <label>Bangkok trip date 🛫</label>
      <input id="set-date" type="date" value="${state.tripDate || ''}">
      <div class="mrow">
        <button class="navbtn" onclick="exportProfile()">⬇️ Export</button>
        <button class="navbtn primary" onclick="saveSettings()">💾 Save</button>
      </div>
      <div class="mrow">
        <button class="navbtn" onclick="closeModal(); renderPicker()">🔄 Switch player</button>
        <button class="navbtn danger" onclick="deleteProfile('${state.id}')">🗑 Delete</button>
      </div>
    </div>
  `;
  wrap.onclick = e => { if (e.target === wrap) wrap.remove(); };
  document.body.appendChild(wrap);
}

function saveSettings() {
  const nm = document.getElementById('set-name').value.trim();
  if (nm) state.name = nm;
  state.avatar = chosenAvatar;
  state.tripDate = document.getElementById('set-date').value || state.tripDate;
  save();
  closeModal();
  renderHome();
}

// ── profile picker / create / switch ─────────────────────
function renderPicker() {
  speechSynthesis.cancel();
  app.innerHTML = html`
    <div class="picker">
      <h1 class="picker-title">Who's playing? 🛺</h1>
      <div class="profile-grid">
        ${store.profiles.map(p => html`
          <div class="profile-tile" onclick="selectProfile('${p.id}')">
            <div class="pt-avatar">${p.avatar}</div>
            <b>${esc(p.name)}</b>
            <small>⚡ ${p.xp} XP</small>
          </div>`).join('')}
        <div class="profile-tile add" onclick="renderCreateProfile(false)">
          <div class="pt-avatar">➕</div>
          <b>Add player</b>
        </div>
      </div>
      <div class="navrow" style="justify-content:center">
        <button class="navbtn" onclick="triggerImport()">📥 Import a player</button>
      </div>
    </div>
  `;
}

function renderCreateProfile(firstRun) {
  speechSynthesis.cancel();
  const startAvatar = AVATARS[Math.floor(Math.random() * AVATARS.length)];
  app.innerHTML = html`
    <div class="welcome">
      ${firstRun ? '<div class="hero">🛺</div><h1>MISSION:<br><em>BANGKOK</em></h1>' : '<h1 style="margin-top:1.2rem">New Player</h1>'}
      ${firstRun ? '<p>Learn to <b>talk to your Thai family</b> in Thai and blow their minds! 🤯</p>' : ''}
      <p><b>Pick your secret-agent face:</b></p>
      ${avatarGrid(startAvatar)}
      <p><b>What's your name, agent?</b></p>
      <input id="cp-name" placeholder="Type your name…" maxlength="20" autofocus>
      <div class="navrow" style="justify-content:center">
        ${firstRun ? '' : '<button class="navbtn" onclick="renderPicker()">← Back</button>'}
        <button class="gobtn" onclick="createProfile()">🚀 ${firstRun ? 'START MISSION' : 'Create'}</button>
      </div>
    </div>
  `;
  const inp = document.getElementById('cp-name');
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') createProfile(); });
}

function createProfile() {
  const name = document.getElementById('cp-name').value.trim();
  if (!name) { Audio_.boop(); document.getElementById('cp-name').focus(); return; }
  const p = makeProfile(name, chosenAvatar);
  store.profiles.push(p);
  store.activeId = p.id;
  state = p;
  bumpStreak();
  save();
  confetti(60);
  Audio_.fanfare();
  renderMissionSelect();
}

function selectProfile(id) {
  store.activeId = id;
  state = activeProfile();
  if (!state) return renderPicker();
  bumpStreak();
  save();
  Audio_.ding();
  renderMissionSelect();
}

function deleteProfile(id) {
  const p = store.profiles.find(x => x.id === id);
  if (!p) return;
  if (!confirm(`Delete ${p.name}'s progress forever? This can't be undone.`)) return;
  store.profiles = store.profiles.filter(x => x.id !== id);
  if (store.activeId === id) { store.activeId = null; state = null; }
  persist();
  closeModal();
  if (store.profiles.length) renderPicker(); else renderCreateProfile(true);
}

// ── mission select (choose a course) ─────────────────────
function renderMissionSelect() {
  speechSynthesis.cancel();
  app.innerHTML = html`
    ${header()}
    <div class="screen-head">
      <button class="backbtn" onclick="renderPicker()">←</button>
      <div><h2>Choose your mission</h2><div class="sub">Tap a mission to start!</div></div>
    </div>
    <div class="path">
      ${MISSIONS.map(m => {
        const mp = state.progress[m.id] || {};
        const started = m.quests.filter(q => (mp[q.id] || {}).learn).length;
        return html`
        <div class="mission-card c-${m.color}" onclick="selectMission('${m.id}')">
          <div class="m-emoji">${m.emoji}</div>
          <div>
            <h3>${m.title}</h3>
            <div class="m-blurb">${m.blurb}</div>
            <div class="m-stars">${started}/${m.quests.length} quests started</div>
          </div>
        </div>`;
      }).join('')}
      <div class="mission-card locked c-gold">
        <div class="m-emoji">🔒</div>
        <div><h3>More coming soon</h3><div class="m-blurb">Tokyo? Chiang Mai? Stay tuned!</div></div>
      </div>
    </div>
  `;
}

function selectMission(id) {
  state.activeMission = id;
  save();
  Audio_.pop();
  renderHome();
}

// ── export / import a profile (move between devices) ──────
function exportProfile(id) {
  const p = id ? store.profiles.find(x => x.id === id) : state;
  if (!p) return;
  const data = { app: 'mission-bangkok', kind: 'profile', version: 1, profile: p };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `mission-bangkok-${(p.name || 'player').replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function triggerImport() {
  const inp = document.createElement('input');
  inp.type = 'file';
  inp.accept = 'application/json,.json';
  inp.onchange = () => { if (inp.files && inp.files[0]) readImport(inp.files[0]); };
  inp.click();
}

function readImport(file) {
  const reader = new FileReader();
  reader.onload = () => {
    let data;
    try { data = JSON.parse(reader.result); } catch { alert('That file is not a valid player file.'); return; }
    const incoming = data && data.profile ? data.profile : data;
    if (!incoming || !incoming.name) { alert('That file is not a Mission: Bangkok player.'); return; }
    const p = normalizeProfile(incoming);
    const existing = store.profiles.find(x => x.id === p.id);
    if (existing) {
      if (!confirm(`Update existing player "${existing.name}" with this file?`)) return;
      Object.assign(existing, p);
      store.activeId = existing.id;
    } else {
      store.profiles.push(p);
      store.activeId = p.id;
    }
    state = activeProfile();
    persist();
    Audio_.fanfare();
    renderMissionSelect();
  };
  reader.readAsText(file);
}

// ── boot ─────────────────────────────────────────────────
Audio_.init();
if (!store.profiles.length) renderCreateProfile(true);
else if (!state) renderPicker();
else { bumpStreak(); renderHome(); }
