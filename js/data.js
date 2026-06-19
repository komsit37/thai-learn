// ─────────────────────────────────────────────────────────────
// Curriculum data — multi-Mission structure.
//
//   MISSIONS = top-level courses (e.g. "Mission: Bangkok").
//   Each mission has QUESTS (the topics: Hello, Family, Food…).
//   Each quest has PHRASES, and three steps: Learn · Listen · Speak.
//   A mission also has a `call` finale (video call roleplay) and
//   its own `badges`. GLOBAL_BADGES apply across every mission.
//
// Each phrase: thai script, roman (with tone accents), kana
// (katakana hint for a Japanese-reading kid), en + jp meaning.
// "___" in a phrase is filled with the player's name.
//
// To add a new course: append another object to MISSIONS. Nothing
// else in the app needs to change.
// ─────────────────────────────────────────────────────────────

const MISSIONS = [
  {
    id: 'bangkok',
    title: 'Mission: Bangkok',
    emoji: '🛺',
    color: 'pink',
    blurb: 'Learn Thai to wow your whole family in Bangkok!',
    quests: [
      {
        id: 'hello',
        num: 1,
        title: 'Say Hello Like a Star',
        emoji: '🙏',
        color: 'pink',
        intro: 'First impressions! Greet everyone with a big wai and watch their faces light up.',
        phrases: [
          { thai: 'สวัสดีครับ', roman: 'sà-wàt-dii khráp', kana: 'サワッディー クラップ', en: 'Hello!', jp: 'こんにちは', emoji: '👋',
            tip: 'Press your hands together at your chest and bow a little — that\'s a wai! 🙏' },
          { thai: 'สบายดีไหมครับ', roman: 'sà-baai-dii mǎi khráp', kana: 'サバーイディー マイ クラップ', en: 'How are you?', jp: '元気ですか？', emoji: '😊' },
          { thai: 'สบายดีครับ', roman: 'sà-baai-dii khráp', kana: 'サバーイディー クラップ', en: "I'm great!", jp: '元気です！', emoji: '💪' },
          { thai: 'กินข้าวหรือยัง', roman: 'kin khâao rǔe yang', kana: 'キン カーオ ルー ヤン', en: 'Have you eaten yet?', jp: 'ごはん食べた？', emoji: '🍚',
            tip: 'Thai families say this instead of "how are you" — food is love!' },
          { thai: 'กินแล้วครับ', roman: 'kin láew khráp', kana: 'キン レーオ クラップ', en: 'I already ate!', jp: 'もう食べたよ', emoji: '😋' },
          { thai: 'เจอกันใหม่ครับ', roman: 'joe kan mài khráp', kana: 'ジュー ガン マイ クラップ', en: 'See you again!', jp: 'またね！', emoji: '🤙' },
          { thai: 'ฝันดีครับ', roman: 'fǎn dii khráp', kana: 'ファン ディー クラップ', en: 'Sweet dreams!', jp: 'おやすみ', emoji: '🌙' },
        ],
      },
      {
        id: 'family',
        num: 2,
        title: 'Know Your Family',
        emoji: '👨‍👩‍👧‍👦',
        color: 'gold',
        intro: 'Thai has a special word for every family member. Call them by the right name = instant hero.',
        phrases: [
          { thai: 'คุณยาย', roman: 'khun yaai', kana: 'クン ヤーイ', en: "Grandma (mom's side)", jp: 'おばあちゃん（母方）', emoji: '👵' },
          { thai: 'คุณตา', roman: 'khun taa', kana: 'クン ター', en: "Grandpa (mom's side)", jp: 'おじいちゃん（母方）', emoji: '👴' },
          { thai: 'คุณย่า', roman: 'khun yâa', kana: 'クン ヤー', en: "Grandma (dad's side)", jp: 'おばあちゃん（父方）', emoji: '👵🏽' },
          { thai: 'คุณปู่', roman: 'khun pùu', kana: 'クン プー', en: "Grandpa (dad's side)", jp: 'おじいちゃん（父方）', emoji: '👴🏽' },
          { thai: 'ป้า', roman: 'pâa', kana: 'パー', en: 'Auntie', jp: 'おばさん', emoji: '👩' },
          { thai: 'ลุง', roman: 'lung', kana: 'ルン', en: 'Uncle', jp: 'おじさん', emoji: '👨' },
          { thai: 'พี่', roman: 'phîi', kana: 'ピー', en: 'Older brother / sister / cousin', jp: 'お兄ちゃん・お姉ちゃん', emoji: '🧒',
            tip: 'Use พี่ for ANY kid older than you — even cousins and friends!' },
          { thai: 'น้อง', roman: 'nóng', kana: 'ノーン', en: 'Younger brother / sister / cousin', jp: '年下の子', emoji: '👶' },
        ],
      },
      {
        id: 'aboutme',
        num: 3,
        title: 'All About Me',
        emoji: '🌟',
        color: 'teal',
        intro: 'Everyone will ask you questions. Be ready with superstar answers!',
        phrases: [
          { thai: 'ผมชื่อ___ครับ', roman: 'phǒm chûe ___ khráp', kana: 'ポム チュー ___ クラップ', en: 'My name is ___', jp: 'ぼくの名前は___です', emoji: '📛', blank: true },
          { thai: 'ผมอายุแปดขวบครับ', roman: 'phǒm aa-yú pàet khùap khráp', kana: 'ポム アーユ ペート クアップ クラップ', en: "I'm 8 years old", jp: '8さいです', emoji: '🎂' },
          { thai: 'ผมมาจากญี่ปุ่นครับ', roman: 'phǒm maa jàak yîi-pùn khráp', kana: 'ポム マー ジャーク イープン クラップ', en: "I'm from Japan", jp: '日本から来ました', emoji: '🗾' },
          { thai: 'ผมพูดไทยได้นิดหน่อยครับ', roman: 'phǒm phûut thai dâai nít-nòi khráp', kana: 'ポム プート タイ ダーイ ニットノイ クラップ', en: 'I speak a little Thai!', jp: 'タイ語が少し話せます', emoji: '🗣️',
            tip: 'THE magic sentence. Say this and the whole family will cheer! 🎉' },
          { thai: 'ผมชอบ___ครับ', roman: 'phǒm châwp ___ khráp', kana: 'ポム チョープ ___ クラップ', en: 'I like ___', jp: '___が好きです', emoji: '💖', blank: true },
          { thai: 'ใช่ครับ', roman: 'châi khráp', kana: 'チャイ クラップ', en: 'Yes!', jp: 'はい', emoji: '✅' },
          { thai: 'ไม่ใช่ครับ', roman: 'mâi châi khráp', kana: 'マイ チャイ クラップ', en: 'No', jp: 'いいえ', emoji: '❌' },
        ],
      },
      {
        id: 'food',
        num: 4,
        title: 'Food Adventure',
        emoji: '🍜',
        color: 'orange',
        intro: 'Bangkok = food paradise. One word — aròi! — makes every cook in the family smile.',
        phrases: [
          { thai: 'อร่อยมาก', roman: 'à-ròi mâak', kana: 'アロイ マーク', en: 'SO delicious!', jp: 'すごくおいしい！', emoji: '😋',
            tip: 'The #1 most powerful word in Thailand. Use it at every meal!' },
          { thai: 'ผมหิวครับ', roman: 'phǒm hǐw khráp', kana: 'ポム ヒウ クラップ', en: "I'm hungry", jp: 'おなかすいた', emoji: '🍽️' },
          { thai: 'อิ่มแล้วครับ', roman: 'ìm láew khráp', kana: 'イム レーオ クラップ', en: "I'm full!", jp: 'おなかいっぱい', emoji: '😌' },
          { thai: 'เผ็ดไหมครับ', roman: 'phèt mǎi khráp', kana: 'ペット マイ クラップ', en: 'Is it spicy?', jp: 'からい？', emoji: '🌶️' },
          { thai: 'ไม่เผ็ดครับ', roman: 'mâi phèt khráp', kana: 'マイ ペット クラップ', en: 'Not spicy, please', jp: 'からくしないでね', emoji: '🧯' },
          { thai: 'ข้าวผัด', roman: 'khâao phàt', kana: 'カーオ パット', en: 'Fried rice', jp: 'チャーハン', emoji: '🍛' },
          { thai: 'ไก่ทอด', roman: 'kài thâwt', kana: 'ガイ トート', en: 'Fried chicken', jp: 'からあげ', emoji: '🍗' },
          { thai: 'มะม่วง', roman: 'má-mûang', kana: 'マムアン', en: 'Mango', jp: 'マンゴー', emoji: '🥭' },
          { thai: 'ขอน้ำหน่อยครับ', roman: 'khǎw náam nòi khráp', kana: 'コー ナーム ノイ クラップ', en: 'Water, please', jp: 'お水ください', emoji: '💧' },
        ],
      },
      {
        id: 'polite',
        num: 5,
        title: 'Magic Polite Words',
        emoji: '✨',
        color: 'purple',
        intro: 'Polite words are magic spells in Thailand. Grown-ups melt when kids use them.',
        phrases: [
          { thai: 'ขอบคุณครับ', roman: 'khàwp-khun khráp', kana: 'コープ クン クラップ', en: 'Thank you', jp: 'ありがとう', emoji: '🙏' },
          { thai: 'ขอบคุณมากครับ', roman: 'khàwp-khun mâak khráp', kana: 'コープ クン マーク クラップ', en: 'Thank you SO much', jp: 'ありがとうございます', emoji: '🌟' },
          { thai: 'ขอโทษครับ', roman: 'khǎw-thôht khráp', kana: 'コー トート クラップ', en: 'Sorry / Excuse me', jp: 'ごめんなさい', emoji: '🙇' },
          { thai: 'ไม่เป็นไรครับ', roman: 'mâi pen rai khráp', kana: 'マイ ペン ライ クラップ', en: "No problem! It's okay!", jp: 'だいじょうぶ', emoji: '👌',
            tip: "Thailand's most famous phrase — the chill, happy spirit of Thai people." },
          { thai: 'ขอ___หน่อยครับ', roman: 'khǎw ___ nòi khráp', kana: 'コー ___ ノイ クラップ', en: 'May I have ___, please?', jp: '___をください', emoji: '🤲', blank: true },
          { thai: 'ครับ', roman: 'khráp', kana: 'クラップ', en: 'Polite word for boys', jp: '男の子のていねい語', emoji: '🎩',
            tip: 'End every sentence with khráp — it makes everything you say polite!' },
        ],
      },
      {
        id: 'numbers',
        num: 6,
        title: 'Numbers & Market Power',
        emoji: '🛍️',
        color: 'green',
        intro: 'Count to ten and ask prices — then go shopping at the market like a pro!',
        phrases: [
          { thai: 'หนึ่ง', roman: 'nùeng', kana: 'ヌン', en: '1', jp: '一', emoji: '1️⃣' },
          { thai: 'สอง', roman: 'sǎwng', kana: 'ソーン', en: '2', jp: '二', emoji: '2️⃣' },
          { thai: 'สาม', roman: 'sǎam', kana: 'サーム', en: '3', jp: '三', emoji: '3️⃣' },
          { thai: 'สี่', roman: 'sìi', kana: 'シー', en: '4', jp: '四', emoji: '4️⃣' },
          { thai: 'ห้า', roman: 'hâa', kana: 'ハー', en: '5', jp: '五', emoji: '5️⃣',
            tip: 'Thai people type "555" to mean hahaha — because 5 = hâa! 😂' },
          { thai: 'หก', roman: 'hòk', kana: 'ホック', en: '6', jp: '六', emoji: '6️⃣' },
          { thai: 'เจ็ด', roman: 'jèt', kana: 'ジェット', en: '7', jp: '七', emoji: '7️⃣' },
          { thai: 'แปด', roman: 'pàet', kana: 'ペート', en: '8 (your age!)', jp: '八', emoji: '8️⃣' },
          { thai: 'เก้า', roman: 'kâo', kana: 'ガーオ', en: '9', jp: '九', emoji: '9️⃣' },
          { thai: 'สิบ', roman: 'sìp', kana: 'シップ', en: '10', jp: '十', emoji: '🔟' },
          { thai: 'เท่าไหร่ครับ', roman: 'thâo-rài khráp', kana: 'タオ ライ クラップ', en: 'How much is it?', jp: 'いくらですか？', emoji: '💰' },
          { thai: 'แพงจัง', roman: 'phaeng jang', kana: 'ペーン ジャン', en: 'SO expensive!', jp: '高い！', emoji: '💸',
            tip: 'Say this at the market and the seller will laugh — and maybe give a discount!' },
        ],
      },
      {
        id: 'superstar',
        num: 7,
        title: 'Superstar Phrases',
        emoji: '🏆',
        color: 'red',
        intro: 'The finishing moves. These phrases turn you into the family legend.',
        phrases: [
          { thai: 'เก่งมาก', roman: 'kèng mâak', kana: 'ゲン マーク', en: 'Great job! Awesome!', jp: 'すごい！じょうず！', emoji: '🏆' },
          { thai: 'สนุกมาก', roman: 'sà-nùk mâak', kana: 'サヌック マーク', en: 'SO fun!', jp: 'めっちゃ楽しい！', emoji: '🎉' },
          { thai: 'น่ารัก', roman: 'nâa-rák', kana: 'ナー ラック', en: 'Cute!', jp: 'かわいい', emoji: '🥰' },
          { thai: 'สวยมาก', roman: 'sǔai mâak', kana: 'スワイ マーク', en: 'Very beautiful!', jp: 'とてもきれい', emoji: '🌸' },
          { thai: 'รักนะ', roman: 'rák ná', kana: 'ラック ナ', en: 'Love you!', jp: 'だいすき', emoji: '❤️' },
          { thai: 'คิดถึงนะ', roman: 'khít-thǔeng ná', kana: 'キット トゥン ナ', en: 'I miss you!', jp: '会いたかったよ', emoji: '🥺',
            tip: 'Say this on a video call before the trip — guaranteed happy tears.' },
          { thai: 'ไปเที่ยวกันไหม', roman: 'pai thîao kan mǎi', kana: 'パイ ティアオ ガン マイ', en: "Let's go out and play!", jp: 'あそびに行こう？', emoji: '🛺' },
        ],
      },
      {
        id: 'play',
        num: 8,
        title: 'Playing with Cousins',
        emoji: '🤸',
        color: 'teal',
        intro: 'Your Thai cousins want to play! These are the words that turn strangers into best friends in five minutes.',
        phrases: [
          { thai: 'มาเล่นกันไหม', roman: 'maa lên kan mǎi', kana: 'マー レン ガン マイ', en: "Want to play together?", jp: 'いっしょにあそぼう？', emoji: '🤸',
            tip: 'The fastest way to make a new cousin-friend — just smile big and say this!' },
          { thai: 'เล่นอะไรดี', roman: 'lên à-rai dii', kana: 'レン アライ ディー', en: 'What should we play?', jp: '何してあそぶ？', emoji: '🤔' },
          { thai: 'ตาผมครับ', roman: 'taa phǒm khráp', kana: 'ター ポム クラップ', en: "My turn!", jp: 'ぼくの番！', emoji: '🙋',
            tip: 'ตา (taa) means "turn" here — it\'s the same word as "eye"! 👀' },
          { thai: 'ตาเธอ', roman: 'taa thoe', kana: 'ター トゥー', en: "Your turn!", jp: 'きみの番！', emoji: '👉' },
          { thai: 'ไปกันเลย', roman: 'pai kan loei', kana: 'パイ ガン ルーイ', en: "Let's go!", jp: '行こう！', emoji: '🏃' },
          { thai: 'รอผมด้วย', roman: 'raw phǒm dûai', kana: 'ロー ポム ドゥアイ', en: 'Wait for me!', jp: 'まってよ〜', emoji: '✋' },
          { thai: 'สนุกจังเลย', roman: 'sà-nùk jang loei', kana: 'サヌック ジャン ルーイ', en: 'This is SO fun!', jp: 'めっちゃ楽しい！', emoji: '😄' },
          { thai: 'เอาอีกรอบ', roman: 'ao ìik râwp', kana: 'アオ イーク ロープ', en: 'One more round!', jp: 'もう一回！', emoji: '🔁' },
          { thai: 'ผมชนะแล้ว', roman: 'phǒm chá-ná láew', kana: 'ポム チャナ レーオ', en: 'I won!', jp: 'ぼくの勝ち！', emoji: '🏆' },
        ],
      },
    ],

    // ── Video-call finale: a scripted conversation roleplay ──
    call: {
      label: 'Call Yaa!',
      blurb: 'Practice a real conversation with Grandma',
      homeEmoji: '📞👵',
      personaName: 'Yaa',
      personaThai: 'ย่า',
      personaEmoji: '👵',
      personaPlace: 'Bangkok, Thailand 🇹🇭',
      // Each step: persona says a line, kid picks one of the replies.
      steps: [
        {
          yaa: { thai: 'สวัสดีจ้ะหลาน!', roman: 'sà-wàt-dii jâ lǎan!', en: 'Hello, my grandchild!', jp: 'こんにちは、まごちゃん！' },
          replies: [
            { thai: 'สวัสดีครับ', roman: 'sà-wàt-dii khráp', kana: 'サワッディー クラップ', en: 'Hello! 🙏', emoji: '🙏' },
          ],
        },
        {
          yaa: { thai: 'สบายดีไหมจ๊ะ?', roman: 'sà-baai-dii mǎi já?', en: 'How are you?', jp: '元気？' },
          replies: [
            { thai: 'สบายดีครับ', roman: 'sà-baai-dii khráp', kana: 'サバーイディー クラップ', en: "I'm great!", emoji: '💪' },
            { thai: 'สบายดีครับ แล้วย่าล่ะครับ', roman: 'sà-baai-dii khráp, láew yâa lâ khráp', kana: 'サバーイディー クラップ、レーオ ヤー ラ クラップ', en: "I'm great! And you, Grandma?", emoji: '😊', bonus: true },
          ],
        },
        {
          yaa: { thai: 'กินข้าวหรือยังจ๊ะ?', roman: 'kin khâao rǔe yang já?', en: 'Have you eaten yet?', jp: 'ごはん食べた？' },
          replies: [
            { thai: 'กินแล้วครับ อร่อยมาก!', roman: 'kin láew khráp, à-ròi mâak!', kana: 'キン レーオ クラップ、アロイ マーク！', en: 'I ate already — it was delicious!', emoji: '😋' },
            { thai: 'ยังครับ ผมหิว', roman: 'yang khráp, phǒm hǐw', kana: 'ヤン クラップ、ポム ヒウ', en: "Not yet — I'm hungry!", emoji: '🍽️' },
          ],
        },
        {
          yaa: { thai: 'หลานชอบกินอะไรจ๊ะ?', roman: 'lǎan châwp kin à-rai já?', en: 'What do you like to eat?', jp: '何を食べるのが好き？' },
          replies: [
            { thai: 'ผมชอบข้าวผัดครับ', roman: 'phǒm châwp khâao phàt khráp', kana: 'ポム チョープ カーオ パット クラップ', en: 'I like fried rice!', emoji: '🍛' },
            { thai: 'ผมชอบไก่ทอดครับ', roman: 'phǒm châwp kài thâwt khráp', kana: 'ポム チョープ ガイ トート クラップ', en: 'I like fried chicken!', emoji: '🍗' },
            { thai: 'ผมชอบมะม่วงครับ', roman: 'phǒm châwp má-mûang khráp', kana: 'ポム チョープ マムアン クラップ', en: 'I like mango!', emoji: '🥭' },
          ],
        },
        {
          yaa: { thai: 'โอ้โห พูดไทยเก่งมาก!', roman: 'ôo-hǒo, phûut thai kèng mâak!', en: 'WOW, your Thai is so good!', jp: 'わあ、タイ語じょうずだね！' },
          replies: [
            { thai: 'ขอบคุณครับ ผมพูดไทยได้นิดหน่อยครับ', roman: 'khàwp-khun khráp, phǒm phûut thai dâai nít-nòi khráp', kana: 'コープクン クラップ、ポム プート タイ ダーイ ニットノイ クラップ', en: 'Thank you! I speak a little Thai!', emoji: '🗣️' },
          ],
        },
        {
          yaa: { thai: 'ย่าคิดถึงหลานนะ', roman: 'yâa khít-thǔeng lǎan ná', en: 'Grandma misses you', jp: 'おばあちゃん、会いたいよ' },
          replies: [
            { thai: 'ผมคิดถึงย่าเหมือนกันครับ', roman: 'phǒm khít-thǔeng yâa mǔean-kan khráp', kana: 'ポム キットトゥン ヤー ムアンガン クラップ', en: 'I miss you too, Grandma!', emoji: '🥺' },
            { thai: 'รักย่านะครับ', roman: 'rák yâa ná khráp', kana: 'ラック ヤー ナ クラップ', en: 'I love you, Grandma!', emoji: '❤️' },
          ],
        },
        {
          yaa: { thai: 'เจอกันที่กรุงเทพฯ นะจ๊ะ!', roman: 'joe kan thîi krung-thêep ná já!', en: 'See you in Bangkok!', jp: 'バンコクで会おうね！' },
          replies: [
            { thai: 'เจอกันใหม่ครับ บ๊ายบาย!', roman: 'joe kan mài khráp, báai-baai!', kana: 'ジュー ガン マイ クラップ、バイバイ！', en: 'See you soon, bye bye!', emoji: '👋' },
          ],
        },
      ],
    },

    // ── Mission-specific badges (rules are declarative) ──
    // when.quest + need: 'learn' | 'complete' | 'listen2'
    // when.call: true   → finished the call finale
    // when.allQuests: 'learn' → every quest's Learn step done
    badges: [
      { id: 'first-wai',   emoji: '🙏', name: 'First Wai',      desc: 'Finished the Hello quest',        when: { quest: 'hello', need: 'learn' } },
      { id: 'family-star', emoji: '👵', name: 'Family Star',    desc: 'Learned all the family words',     when: { quest: 'family', need: 'learn' } },
      { id: 'foodie',      emoji: '🍜', name: 'Foodie',         desc: 'Finished the Food Adventure',      when: { quest: 'food', need: 'complete' } },
      { id: 'ninja',       emoji: '🥷', name: 'Number Ninja',   desc: 'Mastered Thai numbers',            when: { quest: 'numbers', need: 'listen2' } },
      { id: 'cousin-buddy',emoji: '🤝', name: 'Cousin Buddy',   desc: 'Finished Playing with Cousins',    when: { quest: 'play', need: 'complete' } },
      { id: 'chatterbox',  emoji: '💬', name: 'Chatterbox',     desc: 'Finished a whole call with Yaa',   when: { call: true } },
      { id: 'legend',      emoji: '🏆', name: 'Bangkok Legend', desc: 'Finished every single quest',      when: { allQuests: 'learn' } },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// Global badges — earned across any mission (habits & skills).
// Awarded imperatively by the games (see app.js).
// ─────────────────────────────────────────────────────────────
const GLOBAL_BADGES = [
  { id: 'golden-ear',  emoji: '👂', name: 'Golden Ear',  desc: '3 stars in a Listen game' },
  { id: 'brave-voice', emoji: '🎤', name: 'Brave Voice', desc: '3 stars in a Speak challenge' },
  { id: 'streak-3',    emoji: '🔥', name: 'On Fire',     desc: 'Practiced 3 days in a row' },
  { id: 'streak-7',    emoji: '🌋', name: 'Unstoppable', desc: 'Practiced 7 days in a row' },
];

// Kid-friendly avatars for profile picking.
const AVATARS = ['🦊','🐯','🐼','🐸','🦄','🐲','🦉','🐙','🦖','🐬','🐱','🐶','🐵','🦁','🐧','🐨','🐰','🐳'];
