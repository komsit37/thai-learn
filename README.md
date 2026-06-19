# Mission: Bangkok 🛺

A personalized Thai conversation game for an 8-year-old who's fluent in Japanese and
English — built to get him ready to wow the Thai family on the next Bangkok trip.

## Run it

```bash
cd thai-learn
python3 -m http.server 8000
```

Open **http://localhost:8000** in **Google Chrome** (important — Chrome has the Thai
text-to-speech voice and the Thai speech recognition that powers the mic game).
Works great on a laptop or iPad (use Chrome there too).

It's a plain static site, so you can also drop it on **GitHub Pages** (or any static
host) and open it from anywhere — no server or build step.

## Structure: Missions → Quests

The app is a multi-**Mission** platform. **Mission: Bangkok** is the first course;
adding another (Tokyo, Chiang Mai…) is just one object appended to `MISSIONS` in
`js/data.js`. Each Mission contains **Quests** (the topics), and each Quest has three
steps: **Learn → Listen → Speak**. A Mission also carries its own video-call finale
and badges. Kids pick a Mission from the "Choose your mission" screen.

## Profiles (multiple kids)

- A **"Who's playing?"** screen lets each kid pick an avatar + name — like Netflix
  kid profiles, no passwords. Tap the name chip in the header to switch players.
- Each profile keeps its **own** progress, stars, streak, badges, and spaced-repetition
  memory. Saved in the browser (localStorage).
- **Export / Import**: a profile can be exported to a small `.json` file (⚙️ Settings →
  Export) and imported on another device — the simple way to move a kid laptop ↔ iPad.

## What's inside

- **8 quests** on a "road to Bangkok" map — greetings & the wai, family words
  (yaai/taa/pùu/yâa…), all-about-me, food, magic polite words, numbers & market
  haggling, superstar compliments, and playing with cousins. ~65 phrases total, all
  chosen for real conversations with Thai relatives.
- **Triple phonetics on every card**: Thai script (he can start reading it),
  romanization with tone accents, and **katakana hints** — since he reads Japanese
  fluently, サワッディー クラップ clicks faster than "sawatdee krap".
  Japanese meanings shown too.
- **Learn → Listen → Speak** loop per mission:
  - *Learn*: flip-through phrase cards with normal + slow ( 🐢 ) Thai audio.
  - *Listen game*: hear a phrase, tap the right meaning (builds on his listening strength).
  - *Speak challenge*: real speech recognition in Thai grades his pronunciation —
    "PERFECT! เก่งมาก!" with confetti when he nails it.
- **📞 Call Yaa**: a simulated video call with grandma (ย่า, dad's side) — she
  speaks Thai out loud, he picks (and hears) his replies. The exact conversation
  he'll have in real life.
- **Adaptive difficulty** (`js/adapt.js`): every phrase has a mastery level
  (Leitner box 0–4) updated on each listen/speak answer.
  - Weak and overdue phrases show up more often in every game.
  - Listen quiz gets harder per phrase as he masters it: emoji + English options
    → English only → **Thai-script options** (he must read what he heard).
  - Speak challenge: the pronunciation pass bar rises with mastery, and mastered
    phrases go into "memory mode" (no warm-up audio — produce it yourself).
  - **⚡ Daily Power-Up** on the home screen: spaced-repetition mixed review
    across all learned missions (intervals 0/1/2/4/7 days), with a "words to
    rescue" counter so early missions stay fresh until the trip.
- **Gamification**: stars, XP, daily streak, 10 badges, mission skill levels
  (🌱 Rookie → ⭐ Pro → 🏆 Superstar), and a tuk-tuk countdown of days until
  the trip.

## Parent notes

- Tap **⚙️** to set his name (it gets inserted into "ผมชื่อ___ครับ") and the real
  trip date for the countdown.
- Phrases use boy-speech (ผม / ครับ). For a girl, the data in `js/data.js` would
  need ฉัน/หนู + ค่ะ.
- Progress lives in the browser (localStorage), per profile. It stays on that browser +
  device; use ⚙️ → **Export** and **Import a player** (on the picker) to move a kid to
  another device. Each kid gets their own avatar, stars, streak, and review schedule.
- The mic game needs mic permission on first use; if the browser has no speech
  recognition it falls back to honor-system practice ("I said it!").
- A great routine for the month: one quest's *Learn* per weekend, games on
  weekdays (10 min), and **Call Yaa** together every few days — then try a real
  video call with the family.

No build step, no dependencies — plain HTML/CSS/JS. Fonts load from Google Fonts.
