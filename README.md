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

## What's inside

- **7 missions** on a "road to Bangkok" map — greetings & the wai, family words
  (yaai/taa/pùu/yâa…), all-about-me, food, magic polite words, numbers & market
  haggling, and superstar compliment phrases. ~55 phrases total, all chosen for
  real conversations with Thai relatives.
- **Triple phonetics on every card**: Thai script (he can start reading it),
  romanization with tone accents, and **katakana hints** — since he reads Japanese
  fluently, サワッディー クラップ clicks faster than "sawatdee krap".
  Japanese meanings shown too.
- **Learn → Listen → Speak** loop per mission:
  - *Learn*: flip-through phrase cards with normal + slow ( 🐢 ) Thai audio.
  - *Listen game*: hear a phrase, tap the right meaning (builds on his listening strength).
  - *Speak challenge*: real speech recognition in Thai grades his pronunciation —
    "PERFECT! เก่งมาก!" with confetti when he nails it.
- **📞 Call Yaai**: a simulated video call with grandma — she speaks Thai out loud,
  he picks (and hears) his replies. The exact conversation he'll have in real life.
- **Gamification**: stars, XP, daily streak, 10 badges, and a tuk-tuk countdown of
  days until the trip.

## Parent notes

- Tap **⚙️** to set his name (it gets inserted into "ผมชื่อ___ครับ") and the real
  trip date for the countdown.
- Phrases use boy-speech (ผม / ครับ). For a girl, the data in `js/data.js` would
  need ฉัน/หนู + ค่ะ.
- Progress lives in the browser (localStorage) — same browser + device keeps the streak.
- The mic game needs mic permission on first use; if the browser has no speech
  recognition it falls back to honor-system practice ("I said it!").
- A great routine for the month: one mission's *Learn* per weekend, games on
  weekdays (10 min), and **Call Yaai** together every few days — then try a real
  video call with the family.

No build step, no dependencies — plain HTML/CSS/JS. Fonts load from Google Fonts.
