// ─────────────────────────────────────────────────────────────
// Mission: Bangkok — app shell, state, screens, games
// ─────────────────────────────────────────────────────────────

const STORAGE_KEY = 'mission-bangkok-v1';

const state = loadState();

function loadState() {
  let s = {};
  try { s = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch {}
  return {
    name: s.name || '',
    tripDate: s.tripDate || null,
    xp: s.xp || 0,
    progress: s.progress || {},     // missionId -> {learn:bool, listen:0-3, speak:0-3}
    badges: s.badges || [],
    streak: s.streak || { last: null, count: 0 },
    chatDone: s.chatDone || false,
  };
}

function save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function prog(mid) {
  if (!state.progress[mid]) state.progress[mid] = { learn: false, listen: 0, speak: 0 };
  return state.progress[mid];
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
  return Object.values(state.progress).reduce((t, p) => t + (p.listen || 0) + (p.speak || 0) + (p.learn ? 1 : 0), 0);
}

function daysToTrip() {
  if (!state.tripDate) return null;
  const diff = Math.ceil((new Date(state.tripDate) - new Date().setHours(0, 0, 0, 0)) / 86400000);
  return diff;
}

function fillName(text) { return text.replaceAll('___', state.name || '___'); }

// ── badges ───────────────────────────────────────────────
function earnBadge(id) {
  if (state.badges.includes(id)) return;
  state.badges.push(id);
  save();
  const b = BADGES.find(x => x.id === id);
  if (!b) return;
  Audio_.tada();
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<span class="t-emoji">${b.emoji}</span><span>Badge unlocked: ${b.name}!</span>`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

function checkMissionBadges(mid) {
  const p = prog(mid);
  const complete = p.learn && p.listen > 0 && p.speak > 0;
  if (mid === 'hello' && p.learn) earnBadge('first-wai');
  if (mid === 'family' && p.learn) earnBadge('family-star');
  if (mid === 'food' && complete) earnBadge('foodie');
  if (mid === 'numbers' && p.learn && p.listen >= 2) earnBadge('ninja');
  if (MISSIONS.every(m => prog(m.id).learn)) earnBadge('legend');
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

function missionUnlocked(i) {
  return i === 0 || prog(MISSIONS[i - 1].id).learn;
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
  let firstUnfinished = MISSIONS.findIndex((m, i) => missionUnlocked(i) && starsFor(m.id) < 7);
  app.innerHTML = html`
    ${header()}
    <div class="bigbtn-row">
      <button class="bigbtn call" onclick="renderTalk()">
        <span class="big-emoji">📞👵</span>
        Call Yaai!
        <small>Practice a real conversation with Grandma</small>
      </button>
      <button class="bigbtn badges" onclick="renderBadges()">
        <span class="big-emoji">🎖️</span>
        My Badges
        <small>${state.badges.length} of ${BADGES.length} collected</small>
      </button>
    </div>
    <div class="path">
      ${MISSIONS.map((m, i) => {
        const unlocked = missionUnlocked(i);
        return html`
        <div class="mission-card c-${m.color} ${unlocked ? '' : 'locked'}"
             onclick="${unlocked ? `renderMission('${m.id}')` : `Audio_.boop()`}">
          ${i === firstUnfinished ? '<span class="here">YOU ARE HERE</span>' : ''}
          <div class="m-emoji">${unlocked ? m.emoji : '🔒'}</div>
          <div>
            <div class="m-num">Mission ${m.num}</div>
            <h3>${m.title}</h3>
            <div class="m-stars">${starRow(m.id)}</div>
          </div>
        </div>`;
      }).join('')}
    </div>
  `;
}

function renderMission(mid) {
  speechSynthesis.cancel();
  const m = MISSIONS.find(x => x.id === mid);
  const p = prog(mid);
  const gamesLocked = !p.learn;
  app.innerHTML = html`
    ${header()}
    <div class="screen-head">
      <button class="backbtn" onclick="renderHome()">←</button>
      <div>
        <h2>${m.emoji} ${m.title}</h2>
        <div class="sub">Mission ${m.num} · ${m.phrases.length} phrases</div>
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
  const m = MISSIONS.find(x => x.id === mid);
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
        <button class="soundbtn play" onclick="Audio_.pop(); Audio_.speak(${JSON.stringify(thai)})">🔊 Hear it</button>
        <button class="soundbtn slow" onclick="Audio_.pop(); Audio_.speakSlow(${JSON.stringify(thai)})">🐢 Slow</button>
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
  checkMissionBadges(mid);
  save();
  confetti(50);
  Audio_.fanfare();
  const m = MISSIONS.find(x => x.id === mid);
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

// ── LISTEN game ──────────────────────────────────────────
const listenGame = { mid: null, rounds: [], idx: 0, score: 0, answered: false };

function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }

function startListen(mid) {
  const m = MISSIONS.find(x => x.id === mid);
  const pool = m.phrases.filter(p => !p.blank);
  listenGame.mid = mid;
  listenGame.rounds = shuffle(pool).slice(0, Math.min(8, pool.length)).map(target => {
    const wrong = shuffle(pool.filter(p => p !== target)).slice(0, 3);
    return { target, options: shuffle([target, ...wrong]) };
  });
  listenGame.idx = 0;
  listenGame.score = 0;
  renderListenRound();
}

function renderListenRound() {
  const g = listenGame;
  const m = MISSIONS.find(x => x.id === g.mid);
  if (g.idx >= g.rounds.length) return finishListen();
  const r = g.rounds[g.idx];
  g.answered = false;
  app.innerHTML = html`
    ${header()}
    <div class="screen-head">
      <button class="backbtn" onclick="renderMission('${g.mid}')">←</button>
      <div><h2>👂 Listen & Tap</h2><div class="sub">${m.emoji} ${m.title}</div></div>
    </div>
    <div class="quiz-top">
      <span class="score-pill">Q${g.idx + 1}/${g.rounds.length}</span>
      <div class="progress-track"><div class="progress-fill" style="width:${g.idx / g.rounds.length * 100}%"></div></div>
      <span class="score-pill">✅ ${g.score}</span>
    </div>
    <button class="earbtn" onclick="Audio_.speak(${JSON.stringify(r.target.thai)})">👂</button>
    <div class="quiz-hint">Tap the ear to hear it again — then tap what it means!</div>
    <div class="options">
      ${r.options.map((o, i) => html`
        <button class="option" id="opt-${i}" onclick="answerListen(${i})">
          <span class="o-emoji">${o.emoji}</span>${esc(o.en)}
        </button>`).join('')}
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
  const correct = chosen === r.target;
  const btn = document.getElementById('opt-' + i);
  if (correct) {
    g.score++;
    btn.classList.add('correct');
    Audio_.ding();
  } else {
    btn.classList.add('wrong');
    Audio_.boop();
    const right = r.options.indexOf(r.target);
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
  const stars = starsFromRatio(g.score / g.rounds.length);
  const p = prog(g.mid);
  const gained = Math.max(0, stars - p.listen);
  p.listen = Math.max(p.listen, stars);
  if (gained) addXP(gained * 10);
  bumpStreak();
  if (stars === 3) earnBadge('golden-ear');
  checkMissionBadges(g.mid);
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

// ── SPEAK challenge ──────────────────────────────────────
const speakGame = { mid: null, rounds: [], idx: 0, passed: 0 };

function startSpeak(mid) {
  const m = MISSIONS.find(x => x.id === mid);
  speakGame.mid = mid;
  speakGame.rounds = shuffle(m.phrases).slice(0, Math.min(5, m.phrases.length));
  speakGame.idx = 0;
  speakGame.passed = 0;
  renderSpeakRound();
}

function renderSpeakRound() {
  const g = speakGame;
  const m = MISSIONS.find(x => x.id === g.mid);
  if (g.idx >= g.rounds.length) return finishSpeak();
  const ph = g.rounds[g.idx];
  const thai = fillName(ph.thai);
  const supported = Audio_.recognitionSupported();
  app.innerHTML = html`
    ${header()}
    <div class="screen-head">
      <button class="backbtn" onclick="renderMission('${g.mid}')">←</button>
      <div><h2>🎤 Speak it!</h2><div class="sub">${m.emoji} ${m.title} · ${g.idx + 1}/${g.rounds.length}</div></div>
    </div>
    <div class="phrase-stage">
      <div class="phrase-card">
        <div class="counter-pill">say this out loud!</div>
        <div class="p-emoji">${ph.emoji}</div>
        <div class="p-thai">${esc(thai)}</div>
        <div class="p-roman">${esc(fillName(ph.roman))}</div>
        <div class="p-kana">${esc(fillName(ph.kana))}</div>
        <div class="soundrow" style="margin-top:.9rem">
          <button class="soundbtn play" onclick="Audio_.speak(${JSON.stringify(thai)})">🔊 Hear it</button>
          <button class="soundbtn slow" onclick="Audio_.speakSlow(${JSON.stringify(thai)})">🐢 Slow</button>
        </div>
      </div>
      ${supported ? html`
        <button class="micbtn" id="micbtn" onclick="doListen(${JSON.stringify(thai)})">🎤</button>
        <div class="speak-result" id="speak-result">Tap the mic, then say it loud and proud!</div>
      ` : html`
        <div class="speak-result">🎤 Mic game needs Google Chrome.<br>Say it out loud 3 times, then tap below!</div>
        <button class="navbtn primary" style="flex:none;padding:.8rem 2rem" onclick="speakPass(true)">💪 I said it!</button>
      `}
      <div class="navrow">
        <button class="navbtn" onclick="speakSkip()">Skip →</button>
      </div>
    </div>
  `;
  setTimeout(() => Audio_.speak(thai), 350);
}

async function doListen(targetThai) {
  const btn = document.getElementById('micbtn');
  const out = document.getElementById('speak-result');
  speechSynthesis.cancel();
  btn.classList.add('listening');
  btn.disabled = true;
  out.innerHTML = '<span class="verdict">👂 Listening… speak now!</span>';
  try {
    const { alternatives } = await Audio_.listen();
    const grade = gradeSpeech(alternatives, targetThai);
    const heard = esc(alternatives[0] || '');
    if (grade === 'great') {
      Audio_.fanfare(); confetti(35);
      out.innerHTML = `<span class="verdict great">🌟 PERFECT! เก่งมาก!</span><span class="heard">I heard: ${heard}</span>`;
      setTimeout(() => speakPass(true), 1400);
      return;
    } else if (grade === 'close') {
      Audio_.ding();
      out.innerHTML = `<span class="verdict close">🔆 SO close! Try once more!</span><span class="heard">I heard: ${heard}</span>`;
    } else {
      Audio_.boop();
      out.innerHTML = `<span class="verdict try">💭 Hmm, listen again and copy the sound!</span><span class="heard">I heard: ${heard}</span>`;
    }
  } catch (e) {
    Audio_.boop();
    out.innerHTML = e.message === 'not-allowed'
      ? '<span class="verdict try">🎤 Please allow the microphone in your browser!</span>'
      : '<span class="verdict try">🤫 I didn\'t hear anything — try again!</span>';
  }
  btn.classList.remove('listening');
  btn.disabled = false;
}

function speakPass(passed) {
  if (passed) speakGame.passed++;
  speakGame.idx++;
  renderSpeakRound();
}
function speakSkip() { speakGame.idx++; renderSpeakRound(); }

function finishSpeak() {
  const g = speakGame;
  const stars = starsFromRatio(g.passed / g.rounds.length);
  const p = prog(g.mid);
  const gained = Math.max(0, stars - p.speak);
  p.speak = Math.max(p.speak, stars);
  if (gained) addXP(gained * 15);
  bumpStreak();
  if (stars === 3) earnBadge('brave-voice');
  checkMissionBadges(g.mid);
  save();
  if (stars >= 2) { confetti(); Audio_.tada(); } else Audio_.ding();

  const mi = MISSIONS.findIndex(x => x.id === g.mid);
  const nextM = MISSIONS[mi + 1];
  renderGameResult({
    stars,
    title: stars === 3 ? 'SUPERSTAR VOICE!' : stars === 2 ? 'Brave speaking!' : stars === 1 ? 'Good effort!' : 'Warm-up round!',
    detail: `You nailed ${g.passed} of ${g.rounds.length} phrases out loud.`,
    xp: gained * 15,
    retry: `startSpeak('${g.mid}')`,
    next: nextM ? `renderMission('${nextM.id}')` : `renderTalk()`,
    nextLabel: nextM ? `${nextM.emoji} Next Mission →` : '📞 Call Yaai! →',
    mid: g.mid,
  });
}

// ── TALK: video call with Yaai ───────────────────────────
const chat = { step: 0, log: [] };

function renderTalk() {
  speechSynthesis.cancel();
  chat.step = 0;
  chat.log = [];
  drawChat();
  setTimeout(() => yaaiSpeaks(), 600);
}

function drawChat() {
  const step = YAAI_CHAT[chat.step];
  const done = chat.step >= YAAI_CHAT.length;
  app.innerHTML = html`
    ${header()}
    <div class="screen-head">
      <button class="backbtn" onclick="renderHome()">←</button>
      <div><h2>📞 Video Call</h2><div class="sub">Talking with Yaai (Grandma)</div></div>
    </div>
    <div class="call-frame">
      <div class="call-head">
        <div class="avatar">👵</div>
        <div><b>Yaai ยาย</b><span style="font-size:.8rem">Bangkok, Thailand 🇹🇭</span></div>
        <span class="live" style="margin-left:auto">● LIVE</span>
      </div>
      <div class="chat-log" id="chat-log">
        ${chat.log.map(b => html`
          <div class="bubble ${b.who}">
            <div class="b-thai">${esc(b.thai)}
              <button class="b-speak" onclick="Audio_.speak(${JSON.stringify(b.thai)})">🔊</button>
            </div>
            <div class="b-roman">${esc(b.roman)}</div>
            <div class="b-en">${esc(b.en)}</div>
          </div>`).join('')}
      </div>
      ${!done && step && chat.log.length && chat.log[chat.log.length - 1].who === 'yaai' ? html`
        <div class="choices">
          <span class="choice-label">Your turn — pick what to say:</span>
          ${step.replies.map((r, i) => html`
            <button class="choice" onclick="kidSays(${i})">
              <span>${r.emoji}</span>
              <span>
                <span style="font-size:1.05rem">${esc(r.thai)}</span>
                <small>${esc(r.roman)} — ${esc(r.en)}</small>
              </span>
              <span class="c-hear" onclick="event.stopPropagation(); Audio_.speak(${JSON.stringify(r.thai)})">🔊</span>
            </button>`).join('')}
        </div>` : ''}
    </div>
  `;
  const log = document.getElementById('chat-log');
  if (log) log.scrollTop = log.scrollHeight;
}

function yaaiSpeaks() {
  const step = YAAI_CHAT[chat.step];
  if (!step) return finishChat();
  chat.log.push({ who: 'yaai', ...step.yaai });
  drawChat();
  Audio_.speak(step.yaai.thai);
}

function kidSays(i) {
  const step = YAAI_CHAT[chat.step];
  const r = step.replies[i];
  chat.log.push({ who: 'kid', thai: r.thai, roman: r.roman, en: r.en });
  drawChat();
  Audio_.pop();
  Audio_.speak(r.thai, { onend: () => {
    chat.step++;
    setTimeout(() => yaaiSpeaks(), 500);
  }});
  // safety: if TTS is unavailable, still advance
  if (!Audio_.thaiVoice) { chat.step++; setTimeout(() => yaaiSpeaks(), 1200); }
}

function finishChat() {
  const first = !state.chatDone;
  state.chatDone = true;
  if (first) addXP(50);
  bumpStreak();
  earnBadge('chatterbox');
  save();
  confetti(90);
  Audio_.tada();
  app.innerHTML = html`
    ${header()}
    <div class="result-card">
      <div class="r-stars"><span class="lit">💬</span><span class="lit">👵</span><span class="lit">❤️</span></div>
      <h2>You talked with Yaai!</h2>
      <p>A whole conversation in Thai — the real one in Bangkok is going to be amazing.<br>
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
      <div><h2>🎖️ Badge Collection</h2><div class="sub">${state.badges.length} of ${BADGES.length} collected</div></div>
    </div>
    <div class="badge-grid">
      ${BADGES.map(b => html`
        <div class="badge-card ${state.badges.includes(b.id) ? 'earned' : 'locked'}">
          <div class="bg-emoji">${b.emoji}</div>
          <b>${b.name}</b>
          <small>${b.desc}</small>
        </div>`).join('')}
    </div>
  `;
}

// ── settings ─────────────────────────────────────────────
function openSettings() {
  const wrap = document.createElement('div');
  wrap.className = 'modal-wrap';
  wrap.innerHTML = html`
    <div class="modal">
      <h3>⚙️ Settings</h3>
      <label>Your name (shows in phrases)</label>
      <input id="set-name" value="${esc(state.name)}" maxlength="20">
      <label>Bangkok trip date 🛫</label>
      <input id="set-date" type="date" value="${state.tripDate || ''}">
      <div class="mrow">
        <button class="navbtn danger" onclick="resetAll()">🗑 Reset</button>
        <button class="navbtn primary" onclick="saveSettings()">💾 Save</button>
      </div>
    </div>
  `;
  wrap.onclick = e => { if (e.target === wrap) wrap.remove(); };
  document.body.appendChild(wrap);
}

function saveSettings() {
  state.name = document.getElementById('set-name').value.trim();
  state.tripDate = document.getElementById('set-date').value || state.tripDate;
  save();
  document.querySelector('.modal-wrap')?.remove();
  renderHome();
}

function resetAll() {
  if (!confirm('Erase ALL progress and start over?')) return;
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}

// ── onboarding ───────────────────────────────────────────
function renderWelcome() {
  app.innerHTML = html`
    <div class="welcome">
      <div class="hero">🛺</div>
      <h1>MISSION:<br><em>BANGKOK</em></h1>
      <p>In one month you fly to Thailand… and your whole Thai family is waiting.
         Your mission: learn to <b>talk to them in Thai</b> and blow their minds! 🤯</p>
      <p><b>What's your name, agent?</b></p>
      <input id="welcome-name" placeholder="Type your name…" maxlength="20" autofocus>
      <button class="gobtn" onclick="startMission()">🚀 START MISSION</button>
    </div>
  `;
  document.getElementById('welcome-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') startMission();
  });
}

function startMission() {
  const name = document.getElementById('welcome-name').value.trim();
  if (!name) { Audio_.boop(); document.getElementById('welcome-name').focus(); return; }
  state.name = name;
  if (!state.tripDate) {
    const d = new Date(); d.setDate(d.getDate() + 30);
    state.tripDate = d.toISOString().slice(0, 10);
  }
  bumpStreak();
  save();
  confetti(60);
  Audio_.fanfare();
  renderHome();
}

// ── boot ─────────────────────────────────────────────────
Audio_.init();
if (state.name) renderHome(); else renderWelcome();
