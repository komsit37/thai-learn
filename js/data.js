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
      personaRole: 'Grandma',
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

  // ═══════════════════════════════════════════════════════════
  // Mission: Summer Camp — make friends at Regent's Summer Camp.
  // Same Learn·Listen·Speak engine; finale is meeting a new
  // camp friend (Ploy) instead of calling Grandma.
  // ═══════════════════════════════════════════════════════════
  {
    id: 'camp',
    title: 'Mission: Summer Camp',
    emoji: '🏕️',
    color: 'teal',
    blurb: 'Make brand-new friends at summer camp — all in Thai!',
    quests: [
      {
        id: 'friend',
        num: 1,
        title: 'Make a New Friend',
        emoji: '🤝',
        color: 'pink',
        intro: 'The #1 camp superpower: turning a stranger into a friend. Walk up, smile big, and use these magic words.',
        phrases: [
          { thai: 'มาเป็นเพื่อนกันไหม', roman: 'maa pen phûean kan mǎi', kana: 'マー ペン プアン ガン マイ', en: 'Want to be friends?', jp: 'おともだちになろう？', emoji: '🤝',
            tip: 'THE friend-making sentence. Smile, say it, and you have a new buddy! 🎉' },
          { thai: 'เธอชื่ออะไร', roman: 'thoe chûe à-rai', kana: 'トゥー チュー アライ', en: "What's your name?", jp: 'なまえは？', emoji: '🙋' },
          { thai: 'ผมชื่อ___ครับ', roman: 'phǒm chûe ___ khráp', kana: 'ポム チュー ___ クラップ', en: 'My name is ___', jp: 'ぼくの名前は___です', emoji: '📛', blank: true },
          { thai: 'ขอเล่นด้วยได้ไหมครับ', roman: 'khǎw lên dûai dâai mǎi khráp', kana: 'コー レン ドゥアイ ダーイ マイ クラップ', en: 'Can I play with you?', jp: 'いっしょにあそんでいい？', emoji: '🤸',
            tip: 'Walk up to any kid, say this, and you are IN the game!' },
          { thai: 'นั่งด้วยได้ไหมครับ', roman: 'nâng dûai dâai mǎi khráp', kana: 'ナン ドゥアイ ダーイ マイ クラップ', en: 'Can I sit here?', jp: 'となりにすわっていい？', emoji: '🪑',
            tip: 'Perfect for the lunch table — sit with someone new!' },
          { thai: 'ยินดีที่ได้รู้จักครับ', roman: 'yin-dii thîi dâai rúu-jàk khráp', kana: 'インディー ティー ダーイ ルージャック クラップ', en: 'Nice to meet you!', jp: 'はじめまして', emoji: '😊' },
          { thai: 'เธอใจดีจัง', roman: 'thoe jai-dii jang', kana: 'トゥー ジャイ ディー ジャン', en: "You're so kind!", jp: 'やさしいね', emoji: '💛',
            tip: 'Say this and you have a friend for life.' },
        ],
      },
      {
        id: 'campday',
        num: 2,
        title: 'At Camp',
        emoji: '🎒',
        color: 'orange',
        intro: 'Camp happens in Thai AND English. When you get stuck, these phrases are your secret weapon — brave kids ask for help!',
        phrases: [
          { thai: 'คุณครูครับ', roman: 'khun-khruu khráp', kana: 'クン クルー クラップ', en: 'Teacher! (excuse me)', jp: 'せんせい', emoji: '🧑‍🏫' },
          { thai: 'ผมไม่เข้าใจครับ', roman: 'phǒm mâi khâo-jai khráp', kana: 'ポム マイ カオ ジャイ クラップ', en: "I don't understand", jp: 'わからないです', emoji: '😕',
            tip: 'Brave kids say this — it is how you learn the fastest!' },
          { thai: 'พูดอีกทีได้ไหมครับ', roman: 'phûut ìik thii dâai mǎi khráp', kana: 'プート イーク ティー ダーイ マイ クラップ', en: 'Can you say it again?', jp: 'もういちど言って？', emoji: '🔁' },
          { thai: 'ช่วยผมหน่อยได้ไหมครับ', roman: 'chûai phǒm nòi dâai mǎi khráp', kana: 'チュアイ ポム ノイ ダーイ マイ クラップ', en: 'Can you help me?', jp: 'てつだってくれる？', emoji: '🙏' },
          { thai: 'ขอไปห้องน้ำได้ไหมครับ', roman: 'khǎw pai hông-náam dâai mǎi khráp', kana: 'コー パイ ホン ナーム ダーイ マイ クラップ', en: 'May I go to the bathroom?', jp: 'トイレに行ってもいい？', emoji: '🚻',
            tip: 'The most important sentence in ANY school!' },
          { thai: 'เสร็จแล้วครับ', roman: 'sèt láew khráp', kana: 'セット レーオ クラップ', en: "I'm done!", jp: 'できた！', emoji: '✅' },
          { thai: 'นี่อะไรครับ', roman: 'nîi à-rai khráp', kana: 'ニー アライ クラップ', en: "What's this?", jp: 'これなに？', emoji: '❓' },
        ],
      },
      {
        id: 'play',
        num: 3,
        title: "Let's Play!",
        emoji: '🏊',
        color: 'green',
        intro: 'Swimming, art, music, cooking, Thai dance — every camp day is an adventure. Pick what to do with your new friends!',
        phrases: [
          { thai: 'เล่นอะไรกันดี', roman: 'lên à-rai kan dii', kana: 'レン アライ ガン ディー', en: 'What should we play?', jp: 'なにしてあそぶ？', emoji: '🤔' },
          { thai: 'ว่ายน้ำกันไหม', roman: 'wâai-náam kan mǎi', kana: 'ワーイ ナーム ガン マイ', en: "Let's go swimming!", jp: 'すいえいしよう？', emoji: '🏊' },
          { thai: 'เล่นน้ำกันไหม', roman: 'lên náam kan mǎi', kana: 'レン ナーム ガン マイ', en: 'Wanna play in the water?', jp: 'みずあそびしよう？', emoji: '💦',
            tip: 'Camp has a water slide and bubble show — you will use this a lot!' },
          { thai: 'วาดรูปกันไหม', roman: 'wâat rûup kan mǎi', kana: 'ワート ループ ガン マイ', en: "Let's draw!", jp: 'おえかきしよう？', emoji: '🎨' },
          { thai: 'ทำขนมกันไหม', roman: 'tham khà-nǒm kan mǎi', kana: 'タム カノム ガン マイ', en: "Let's make snacks!", jp: 'おかしつくろう？', emoji: '🧁' },
          { thai: 'เต้นกันไหม', roman: 'tên kan mǎi', kana: 'テン ガン マイ', en: "Let's dance!", jp: 'おどろう？', emoji: '💃',
            tip: 'Camp has Thai dancing — show them your moves!' },
          { thai: 'ผมชอบ___ครับ', roman: 'phǒm châwp ___ khráp', kana: 'ポム チョープ ___ クラップ', en: 'I like ___!', jp: '___がすきです', emoji: '💖', blank: true },
        ],
      },
      {
        id: 'feelings',
        num: 4,
        title: 'How I Feel',
        emoji: '😊',
        color: 'purple',
        intro: 'Far from home, big feelings happen. Tell a teacher or friend exactly what you need — they want to help you!',
        phrases: [
          { thai: 'ผมเหนื่อยครับ', roman: 'phǒm nùeai khráp', kana: 'ポム ヌアイ クラップ', en: "I'm tired", jp: 'つかれた', emoji: '😮‍💨' },
          { thai: 'ผมร้อนครับ', roman: 'phǒm ráwn khráp', kana: 'ポム ローン クラップ', en: "I'm hot", jp: 'あつい', emoji: '🥵' },
          { thai: 'ผมง่วงนอนครับ', roman: 'phǒm ngûang-nawn khráp', kana: 'ポム グアン ノーン クラップ', en: "I'm sleepy", jp: 'ねむい', emoji: '😴' },
          { thai: 'ผมเจ็บครับ', roman: 'phǒm jèp khráp', kana: 'ポム ジェップ クラップ', en: 'It hurts! / I got hurt', jp: 'いたい', emoji: '🤕',
            tip: 'Say this and point — a teacher will help right away.' },
          { thai: 'ผมหิวครับ', roman: 'phǒm hǐw khráp', kana: 'ポム ヒウ クラップ', en: "I'm hungry", jp: 'おなかすいた', emoji: '🍽️' },
          { thai: 'ขอน้ำหน่อยครับ', roman: 'khǎw náam nòi khráp', kana: 'コー ナーム ノイ クラップ', en: 'Water, please', jp: 'おみずください', emoji: '💧' },
          { thai: 'ผมโอเคครับ', roman: 'phǒm oo-khee khráp', kana: 'ポム オー ケー クラップ', en: "I'm okay!", jp: 'だいじょうぶ', emoji: '👍' },
        ],
      },
      {
        id: 'kind',
        num: 5,
        title: 'Be a Good Friend',
        emoji: '🌟',
        color: 'gold',
        intro: 'The best friends are KIND friends. These words make everyone at camp want to play with you.',
        phrases: [
          { thai: 'เธอโอเคไหม', roman: 'thoe oo-khee mǎi', kana: 'トゥー オー ケー マイ', en: 'Are you okay?', jp: 'だいじょうぶ？', emoji: '🤗',
            tip: 'When a friend falls, ask this first — that is a TRUE friend.' },
          { thai: 'แบ่งกันนะ', roman: 'bàeng kan ná', kana: 'ベン ガン ナ', en: "Let's share!", jp: 'わけっこしよう', emoji: '🤲' },
          { thai: 'ตาเธอ', roman: 'taa thoe', kana: 'ター トゥー', en: 'Your turn!', jp: 'きみのばん！', emoji: '👉' },
          { thai: 'เก่งมาก', roman: 'kèng mâak', kana: 'ゲン マーク', en: 'Great job!', jp: 'じょうず！', emoji: '🏆' },
          { thai: 'ไม่เป็นไรครับ', roman: 'mâi pen rai khráp', kana: 'マイ ペン ライ クラップ', en: "It's okay! No worries!", jp: 'だいじょうぶだよ', emoji: '😌' },
          { thai: 'ใจเย็นๆ', roman: 'jai-yen yen', kana: 'ジャイ イェン イェン', en: 'Take it easy / Calm down', jp: 'おちついて', emoji: '🧘',
            tip: 'A magic phrase when a friend is upset — Thai people love it.' },
          { thai: 'ไปด้วยกันนะ', roman: 'pai dûai-kan ná', kana: 'パイ ドゥアイ ガン ナ', en: "Let's go together!", jp: 'いっしょに行こう', emoji: '🫶' },
        ],
      },
      {
        id: 'bye',
        num: 6,
        title: 'See You Tomorrow!',
        emoji: '👋',
        color: 'red',
        intro: 'The day ends but the friendship does not. End every day so your new friends can\'t wait to see you tomorrow!',
        phrases: [
          { thai: 'สนุกมากเลยวันนี้', roman: 'sà-nùk mâak loei wan-níi', kana: 'サヌック マーク ルーイ ワン ニー', en: 'Today was SO fun!', jp: 'きょうたのしかった！', emoji: '🎉' },
          { thai: 'เล่นด้วยกันอีกนะ', roman: 'lên dûai-kan ìik ná', kana: 'レン ドゥアイ ガン イーク ナ', en: "Let's play again!", jp: 'またあそぼうね', emoji: '🔁' },
          { thai: 'เธอเป็นเพื่อนที่ดีที่สุด', roman: 'thoe pen phûean thîi-dii thîi-sùt', kana: 'トゥー ペン プアン ティーディー ティースット', en: "You're the best friend!", jp: 'さいこうのともだち', emoji: '💖',
            tip: 'The biggest compliment a kid can give — watch them beam!' },
          { thai: 'พรุ่งนี้เจอกันนะ', roman: 'phrûng-níi joe kan ná', kana: 'プルン ニー ジュー ガン ナ', en: 'See you tomorrow!', jp: 'また明日ね', emoji: '🌅' },
          { thai: 'คิดถึงนะ', roman: 'khít-thǔeng ná', kana: 'キット トゥン ナ', en: "I'll miss you!", jp: 'またね、さみしいな', emoji: '🥺' },
          { thai: 'บ๊ายบาย', roman: 'báai-baai', kana: 'バイバイ', en: 'Bye bye!', jp: 'バイバイ', emoji: '👋' },
        ],
      },
    ],

    // ── Finale: meeting a new friend at camp (roleplay) ──
    call: {
      label: 'Meet a Friend!',
      blurb: 'Make a brand-new friend at summer camp',
      homeEmoji: '🧒🤝',
      personaName: 'Ploy',
      personaThai: 'พลอย',
      personaRole: 'your new camp friend',
      personaEmoji: '🧒',
      personaPlace: "Regent's Summer Camp 🏕️",
      steps: [
        {
          yaa: { thai: 'สวัสดีจ้ะ! เธอชื่ออะไร?', roman: 'sà-wàt-dii jâ! thoe chûe à-rai?', en: "Hi! What's your name?", jp: 'こんにちは！なまえは？' },
          replies: [
            { thai: 'สวัสดีครับ ผมชื่อ___ครับ', roman: 'sà-wàt-dii khráp, phǒm chûe ___ khráp', kana: 'サワッディー クラップ、ポム チュー ___ クラップ', en: "Hi! My name is ___", emoji: '🙋' },
          ],
        },
        {
          yaa: { thai: 'ยินดีที่ได้รู้จักนะ! เธอมาจากไหน?', roman: 'yin-dii thîi dâai rúu-jàk ná! thoe maa jàak nǎi?', en: 'Nice to meet you! Where are you from?', jp: 'はじめまして！どこから来たの？' },
          replies: [
            { thai: 'ผมมาจากญี่ปุ่นครับ', roman: 'phǒm maa jàak yîi-pùn khráp', kana: 'ポム マー ジャーク イープン クラップ', en: "I'm from Japan!", emoji: '🗾' },
            { thai: 'ผมมาจากญี่ปุ่น พูดไทยได้นิดหน่อยครับ', roman: 'phǒm maa jàak yîi-pùn, phûut thai dâai nít-nòi khráp', kana: 'ポム マー ジャーク イープン、プート タイ ダーイ ニットノイ クラップ', en: 'From Japan — I speak a little Thai!', emoji: '🗣️', bonus: true },
          ],
        },
        {
          yaa: { thai: 'เก่งจังเลย! มาเป็นเพื่อนกันไหม?', roman: 'kèng jang loei! maa pen phûean kan mǎi?', en: 'So good! Want to be friends?', jp: 'すごい！おともだちになろう？' },
          replies: [
            { thai: 'เอาสิครับ! มาเป็นเพื่อนกัน', roman: 'ao sì khráp! maa pen phûean kan', kana: 'アオ シ クラップ！マー ペン プアン ガン', en: "Yes! Let's be friends!", emoji: '🤝' },
            { thai: 'เธอใจดีจังครับ', roman: 'thoe jai-dii jang khráp', kana: 'トゥー ジャイ ディー ジャン クラップ', en: "You're so kind!", emoji: '💛', bonus: true },
          ],
        },
        {
          yaa: { thai: 'วันนี้เล่นอะไรกันดี?', roman: 'wan-níi lên à-rai kan dii?', en: 'What should we play today?', jp: 'きょうなにしてあそぶ？' },
          replies: [
            { thai: 'ว่ายน้ำกันไหมครับ', roman: 'wâai-náam kan mǎi khráp', kana: 'ワーイ ナーム ガン マイ クラップ', en: "Let's go swimming!", emoji: '🏊' },
            { thai: 'วาดรูปกันไหมครับ', roman: 'wâat rûup kan mǎi khráp', kana: 'ワート ループ ガン マイ クラップ', en: "Let's draw!", emoji: '🎨' },
            { thai: 'ทำขนมกันไหมครับ', roman: 'tham khà-nǒm kan mǎi khráp', kana: 'タム カノム ガン マイ クラップ', en: "Let's make snacks!", emoji: '🧁' },
          ],
        },
        {
          yaa: { thai: 'เยี่ยมเลย! ไปกันเลย!', roman: 'yîam loei! pai kan loei!', en: "Awesome! Let's go!", jp: 'いいね！行こう！' },
          replies: [
            { thai: 'ไปกันเลยครับ!', roman: 'pai kan loei khráp!', kana: 'パイ ガン ルーイ クラップ！', en: "Let's go!", emoji: '🏃' },
            { thai: 'รอผมด้วยครับ!', roman: 'raw phǒm dûai khráp!', kana: 'ロー ポム ドゥアイ クラップ！', en: 'Wait for me!', emoji: '✋' },
          ],
        },
        {
          yaa: { thai: 'สนุกมากเลยวันนี้!', roman: 'sà-nùk mâak loei wan-níi!', en: 'Today was so much fun!', jp: 'きょうすごく楽しかった！' },
          replies: [
            { thai: 'ใช่! เธอเป็นเพื่อนที่ดีที่สุด', roman: 'châi! thoe pen phûean thîi-dii thîi-sùt', kana: 'チャイ！トゥー ペン プアン ティーディー ティースット', en: "Yes! You're the best friend!", emoji: '💖' },
            { thai: 'สนุกจังเลยครับ!', roman: 'sà-nùk jang loei khráp!', kana: 'サヌック ジャン ルーイ クラップ！', en: 'That was SO fun!', emoji: '😄' },
          ],
        },
        {
          yaa: { thai: 'พรุ่งนี้เจอกันนะ!', roman: 'phrûng-níi joe kan ná!', en: 'See you tomorrow!', jp: 'また明日ね！' },
          replies: [
            { thai: 'พรุ่งนี้เจอกันนะครับ บ๊ายบาย!', roman: 'phrûng-níi joe kan ná khráp, báai-baai!', kana: 'プルン ニー ジュー ガン ナ クラップ、バイバイ！', en: 'See you tomorrow, bye bye!', emoji: '👋' },
          ],
        },
      ],
    },

    // ── Mission-specific badges ──
    badges: [
      { id: 'icebreaker',  emoji: '🧊', name: 'Ice Breaker',  desc: 'Learned how to make a new friend',  when: { quest: 'friend', need: 'learn' } },
      { id: 'camp-pro',    emoji: '🎒', name: 'Camp Pro',     desc: 'Finished the At Camp quest',         when: { quest: 'campday', need: 'complete' } },
      { id: 'splash',      emoji: '🏊', name: 'Splash Star',  desc: "Mastered the Let's Play words",      when: { quest: 'play', need: 'listen2' } },
      { id: 'brave-heart', emoji: '💗', name: 'Brave Heart',  desc: 'Learned to say how you feel',        when: { quest: 'feelings', need: 'learn' } },
      { id: 'kind-kid',    emoji: '🌟', name: 'Kind Kid',     desc: 'Finished Be a Good Friend',          when: { quest: 'kind', need: 'complete' } },
      { id: 'new-buddy',   emoji: '🤝', name: 'New Buddy',    desc: 'Made a friend in the camp roleplay', when: { call: true } },
      { id: 'camp-legend', emoji: '🏆', name: 'Camp Legend',  desc: 'Finished every single quest',        when: { allQuests: 'learn' } },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Mission: Go Shopping — a Bangkok shopping day with the family:
  // haggling at Chatuchak (JJ) Weekend Market, snacks, then the
  // shiny Siam Paragon mall. Finale is a bargaining roleplay with
  // a friendly market seller (mâe-káa) instead of a phone call.
  // ═══════════════════════════════════════════════════════════
  {
    id: 'shopping',
    title: 'Mission: Go Shopping',
    emoji: '🛍️',
    color: 'gold',
    blurb: 'Shop like a local — haggle at JJ Market and explore Siam Paragon!',
    quests: [
      {
        id: 'shop',
        num: 1,
        title: 'Ready to Shop!',
        emoji: '🛍️',
        color: 'pink',
        intro: 'JJ Market has 15,000 shops! Walk in like a pro: look around, point, and ask to see the cool stuff.',
        phrases: [
          { thai: 'อยากซื้อของครับ', roman: 'yàak súe khǎwng khráp', kana: 'ヤーク スー コーン クラップ', en: 'I want to buy something', jp: '買い物したい', emoji: '🛍️' },
          { thai: 'ขอดูหน่อยได้ไหมครับ', roman: 'khǎw duu nòi dâai mǎi khráp', kana: 'コー ドゥー ノイ ダーイ マイ クラップ', en: 'May I take a look?', jp: '見てもいい？', emoji: '👀',
            tip: 'Say this at any stall and the seller will happily show you things!' },
          { thai: 'อันนี้ครับ', roman: 'an níi khráp', kana: 'アン ニー クラップ', en: 'This one!', jp: 'これ！', emoji: '👇' },
          { thai: 'อันนั้นครับ', roman: 'an nán khráp', kana: 'アン ナン クラップ', en: 'That one!', jp: 'あれ！', emoji: '👉' },
          { thai: 'สวยจังเลย', roman: 'sǔai jang loei', kana: 'スワイ ジャン ルーイ', en: 'So pretty!', jp: 'すごくかわいい！', emoji: '✨' },
          { thai: 'มีอันอื่นไหมครับ', roman: 'mii an ùen mǎi khráp', kana: 'ミー アン ウーン マイ クラップ', en: 'Do you have another one?', jp: 'ほかのある？', emoji: '🔁' },
          { thai: 'ผมชอบอันนี้ครับ', roman: 'phǒm châwp an níi khráp', kana: 'ポム チョープ アン ニー クラップ', en: 'I like this one!', jp: 'これが好き！', emoji: '💖' },
        ],
      },
      {
        id: 'price',
        num: 2,
        title: 'How Much?',
        emoji: '💰',
        color: 'green',
        intro: 'At JJ Market the price is just a START. Smile, say it\'s expensive, and ask for a discount — that\'s the game!',
        phrases: [
          { thai: 'เท่าไหร่ครับ', roman: 'thâo-rài khráp', kana: 'タオ ライ クラップ', en: 'How much?', jp: 'いくら？', emoji: '💰' },
          { thai: 'อันนี้เท่าไหร่ครับ', roman: 'an níi thâo-rài khráp', kana: 'アン ニー タオ ライ クラップ', en: 'How much is this?', jp: 'これいくら？', emoji: '🏷️' },
          { thai: 'แพงจังครับ', roman: 'phaeng jang khráp', kana: 'ペーン ジャン クラップ', en: 'So expensive!', jp: '高い！', emoji: '💸',
            tip: 'Say it with a big smile — the seller will laugh and drop the price!' },
          { thai: 'ลดหน่อยได้ไหมครับ', roman: 'lót nòi dâai mǎi khráp', kana: 'ロット ノイ ダーイ マイ クラップ', en: 'Can you give a little discount?', jp: 'ちょっと安くして？', emoji: '🙏',
            tip: 'THE magic bargaining sentence. Use it every time!' },
          { thai: 'ถูกๆ หน่อยนะครับ', roman: 'thùuk thùuk nòi ná khráp', kana: 'トゥーク トゥーク ノイ ナ クラップ', en: 'Make it cheap, please!', jp: '安くしてね', emoji: '🤝' },
          { thai: 'แพงไปครับ', roman: 'phaeng pai khráp', kana: 'ペーン パイ クラップ', en: 'Too expensive', jp: '高すぎる', emoji: '😮' },
          { thai: 'เอาอันนี้ครับ', roman: 'ao an níi khráp', kana: 'アオ アン ニー クラップ', en: "I'll take this one!", jp: 'これにする！', emoji: '✅' },
        ],
      },
      {
        id: 'pick',
        num: 3,
        title: 'Colors & Things',
        emoji: '👕',
        color: 'teal',
        intro: 'So many shirts, toys and bags! Tell the seller exactly what you want — the right color, the right size.',
        phrases: [
          { thai: 'เสื้อ', roman: 'sûea', kana: 'スア', en: 'Shirt', jp: 'シャツ', emoji: '👕' },
          { thai: 'กระเป๋า', roman: 'krà-pǎo', kana: 'クラパオ', en: 'Bag', jp: 'かばん', emoji: '🎒' },
          { thai: 'ของเล่น', roman: 'khǎwng-lên', kana: 'コーン レン', en: 'Toy', jp: 'おもちゃ', emoji: '🧸' },
          { thai: 'สีแดง', roman: 'sǐi daeng', kana: 'シー デーン', en: 'Red', jp: 'あか', emoji: '🔴' },
          { thai: 'สีฟ้า', roman: 'sǐi fáa', kana: 'シー ファー', en: 'Blue', jp: 'あお', emoji: '🔵' },
          { thai: 'อันใหญ่ครับ', roman: 'an yài khráp', kana: 'アン ヤイ クラップ', en: 'The big one', jp: '大きいの', emoji: '🔆' },
          { thai: 'อันเล็กครับ', roman: 'an lék khráp', kana: 'アン レック クラップ', en: 'The small one', jp: '小さいの', emoji: '🔅' },
        ],
      },
      {
        id: 'snacks',
        num: 4,
        title: 'Market Snacks',
        emoji: '🍢',
        color: 'orange',
        intro: 'Shopping is hungry work! JJ Market is famous for coconut ice cream and grilled treats. Order like a champ.',
        phrases: [
          { thai: 'หิวจังครับ', roman: 'hǐw jang khráp', kana: 'ヒウ ジャン クラップ', en: "I'm so hungry!", jp: 'おなかすいた〜', emoji: '🤤' },
          { thai: 'ขออันนี้ครับ', roman: 'khǎw an níi khráp', kana: 'コー アン ニー クラップ', en: "I'd like this one, please", jp: 'これください', emoji: '🤲' },
          { thai: 'ไอติมมะพร้าว', roman: 'ai-tim má-phráao', kana: 'アイティム マプラーオ', en: 'Coconut ice cream', jp: 'ココナッツアイス', emoji: '🥥',
            tip: 'The most famous treat at JJ Market — served in a real coconut shell!' },
          { thai: 'ลูกชิ้นปิ้ง', roman: 'lûuk-chín pîng', kana: 'ルークチン ピン', en: 'Grilled meatballs', jp: 'やきだんご', emoji: '🍢' },
          { thai: 'น้ำส้ม', roman: 'náam sôm', kana: 'ナーム ソム', en: 'Orange juice', jp: 'オレンジジュース', emoji: '🧃' },
          { thai: 'เอาหนึ่งอันครับ', roman: 'ao nùeng an khráp', kana: 'アオ ヌン アン クラップ', en: "I'll take one", jp: 'ひとつください', emoji: '☝️' },
          { thai: 'อร่อยมากครับ', roman: 'à-ròi mâak khráp', kana: 'アロイ マーク クラップ', en: 'So delicious!', jp: 'すごくおいしい！', emoji: '😋' },
        ],
      },
      {
        id: 'mall',
        num: 5,
        title: 'At Siam Paragon',
        emoji: '🏬',
        color: 'purple',
        intro: 'From the market to the super-shiny mall! Ride the escalator, find the floors — and don\'t get lost in the crowd.',
        phrases: [
          { thai: 'ห้องน้ำอยู่ที่ไหนครับ', roman: 'hông-náam yùu thîi-nǎi khráp', kana: 'ホン ナーム ユー ティー ナイ クラップ', en: 'Where is the bathroom?', jp: 'トイレはどこ？', emoji: '🚻',
            tip: 'The #1 must-know question in any big mall!' },
          { thai: 'บันไดเลื่อน', roman: 'ban-dai-lûean', kana: 'バンダイ ルアン', en: 'Escalator', jp: 'エスカレーター', emoji: '🛗' },
          { thai: 'ชั้นสองครับ', roman: 'chán sǎwng khráp', kana: 'チャン ソーン クラップ', en: 'The 2nd floor', jp: '2かい', emoji: '2️⃣' },
          { thai: 'ไปดูปลากันไหมครับ', roman: 'pai duu plaa kan mǎi khráp', kana: 'パイ ドゥー プラー ガン マイ クラップ', en: "Let's go see the fish!", jp: 'おさかな見に行こう？', emoji: '🐠',
            tip: 'There\'s a huge aquarium (Sea Life) right under Siam Paragon!' },
          { thai: 'รอตรงนี้นะครับ', roman: 'raw trong-níi ná khráp', kana: 'ロー トロン ニー ナ クラップ', en: 'Wait here, okay?', jp: 'ここで待っててね', emoji: '✋' },
          { thai: 'ผมหลงทางครับ', roman: 'phǒm lǒng-thaang khráp', kana: 'ポム ロン ターン クラップ', en: "I'm lost", jp: 'まいごになった', emoji: '🥺',
            tip: 'If you can\'t find your family, say this to a shop helper right away.' },
          { thai: 'แม่อยู่ไหนครับ', roman: 'mâe yùu nǎi khráp', kana: 'メー ユー ナイ クラップ', en: "Where's Mom?", jp: 'ママどこ？', emoji: '👩' },
        ],
      },
      {
        id: 'pay',
        num: 6,
        title: 'Time to Pay',
        emoji: '💳',
        color: 'red',
        intro: 'You found the perfect thing! Now pay, grab your bag, thank the seller — and promise to come back.',
        phrases: [
          { thai: 'เอาอันนี้ครับ', roman: 'ao an níi khráp', kana: 'アオ アン ニー クラップ', en: "I'll take this one", jp: 'これにします', emoji: '🛒' },
          { thai: 'จ่ายตรงไหนครับ', roman: 'jàai trong-nǎi khráp', kana: 'ジャーイ トロン ナイ クラップ', en: 'Where do I pay?', jp: 'どこで払うの？', emoji: '💳' },
          { thai: 'คิดเงินด้วยครับ', roman: 'khít ngoen dûai khráp', kana: 'キット グン ドゥアイ クラップ', en: "I'd like to pay, please", jp: 'おかいけいください', emoji: '🧾' },
          { thai: 'มีถุงไหมครับ', roman: 'mii thǔng mǎi khráp', kana: 'ミー トゥン マイ クラップ', en: 'Do you have a bag?', jp: 'ふくろある？', emoji: '🛍️' },
          { thai: 'ขอบคุณมากครับ', roman: 'khàwp-khun mâak khráp', kana: 'コープ クン マーク クラップ', en: 'Thank you so much!', jp: 'ありがとうございます', emoji: '🙏' },
          { thai: 'สนุกมากเลยวันนี้', roman: 'sà-nùk mâak loei wan-níi', kana: 'サヌック マーク ルーイ ワン ニー', en: 'Today was SO fun!', jp: 'きょうたのしかった！', emoji: '🎉' },
          { thai: 'ไว้มาใหม่นะครับ', roman: 'wái maa mài ná khráp', kana: 'ワイ マー マイ ナ クラップ', en: "I'll come again!", jp: 'また来るね', emoji: '👋' },
        ],
      },
    ],

    // ── Finale: bargaining with a friendly market seller (roleplay) ──
    call: {
      label: 'Go Bargaining!',
      blurb: 'Haggle for a souvenir at JJ Market',
      homeEmoji: '🛍️💰',
      personaName: 'Mâe-káa',
      personaThai: 'แม่ค้า',
      personaRole: 'a friendly market seller',
      personaEmoji: '👩‍🦱',
      personaPlace: 'Chatuchak (JJ) Market 🛍️',
      steps: [
        {
          yaa: { thai: 'สวัสดีจ้ะหนู! สนใจอะไรจ๊ะ?', roman: 'sà-wàt-dii jâ nǔu! sǒn-jai à-rai já?', en: "Hello dear! What are you interested in?", jp: 'こんにちは！何が気になる？' },
          replies: [
            { thai: 'สวัสดีครับ ขอดูอันนี้ได้ไหมครับ', roman: 'sà-wàt-dii khráp, khǎw duu an níi dâai mǎi khráp', kana: 'サワッディー クラップ、コー ドゥー アン ニー ダーイ マイ クラップ', en: 'Hello! Can I see this one?', emoji: '👀' },
          ],
        },
        {
          yaa: { thai: 'ได้สิจ๊ะ อันนี้สวยมากเลย', roman: 'dâai sì já, an níi sǔai mâak loei', en: 'Of course! This one is very pretty.', jp: 'いいよ！これすごくかわいいよ' },
          replies: [
            { thai: 'อันนี้เท่าไหร่ครับ', roman: 'an níi thâo-rài khráp', kana: 'アン ニー タオ ライ クラップ', en: 'How much is this?', emoji: '💰' },
            { thai: 'สวยจังเลยครับ อันนี้เท่าไหร่ครับ', roman: 'sǔai jang loei khráp, an níi thâo-rài khráp', kana: 'スワイ ジャン ルーイ クラップ、アン ニー タオ ライ クラップ', en: "So pretty! How much is it?", emoji: '✨', bonus: true },
          ],
        },
        {
          yaa: { thai: 'สองร้อยบาทจ้ะ', roman: 'sǎwng-rói bàat jâ', en: '200 baht.', jp: '200バーツだよ' },
          replies: [
            { thai: 'แพงจังครับ', roman: 'phaeng jang khráp', kana: 'ペーン ジャン クラップ', en: 'So expensive!', emoji: '💸' },
            { thai: 'แพงจังครับ ลดหน่อยได้ไหมครับ', roman: 'phaeng jang khráp, lót nòi dâai mǎi khráp', kana: 'ペーン ジャン クラップ、ロット ノイ ダーイ マイ クラップ', en: 'So expensive! Can you give a discount?', emoji: '🙏', bonus: true },
          ],
        },
        {
          yaa: { thai: 'ลดให้นิดหน่อยนะ ร้อยห้าสิบจ้ะ', roman: 'lót hâi nít-nòi ná, rói-hâa-sìp jâ', en: "I'll lower it a bit — 150.", jp: 'ちょっとまけるね、150だよ' },
          replies: [
            { thai: 'ร้อยได้ไหมครับ', roman: 'rói dâai mǎi khráp', kana: 'ローイ ダーイ マイ クラップ', en: '100, okay?', emoji: '🤝' },
            { thai: 'ลดอีกหน่อยได้ไหมครับ', roman: 'lót ìik nòi dâai mǎi khráp', kana: 'ロット イーク ノイ ダーイ マイ クラップ', en: 'Can you lower it a little more?', emoji: '😄', bonus: true },
          ],
        },
        {
          yaa: { thai: 'โอเค ร้อยก็ได้จ้ะ หนูเก่งมาก!', roman: 'oo-khee, rói kâw dâai jâ, nǔu kèng mâak!', en: "Okay, 100 is fine! You're so good!", jp: 'OK、100でいいよ。じょうずだね！' },
          replies: [
            { thai: 'ขอบคุณครับ เอาอันนี้ครับ', roman: 'khàwp-khun khráp, ao an níi khráp', kana: 'コープクン クラップ、アオ アン ニー クラップ', en: "Thank you! I'll take this one.", emoji: '✅' },
          ],
        },
        {
          yaa: { thai: 'นี่จ้ะ มีถุงให้ด้วยนะ', roman: 'nîi jâ, mii thǔng hâi dûai ná', en: 'Here you go — with a bag too.', jp: 'はいどうぞ、ふくろもね' },
          replies: [
            { thai: 'ขอบคุณมากครับ', roman: 'khàwp-khun mâak khráp', kana: 'コープ クン マーク クラップ', en: 'Thank you so much!', emoji: '🙏' },
          ],
        },
        {
          yaa: { thai: 'ไว้มาใหม่นะจ๊ะ!', roman: 'wái maa mài ná já!', en: 'Come again!', jp: 'また来てね！' },
          replies: [
            { thai: 'ครับ ไว้มาใหม่ครับ บ๊ายบาย!', roman: 'khráp, wái maa mài khráp, báai-baai!', kana: 'クラップ、ワイ マー マイ クラップ、バイバイ！', en: "Yes, I'll come again — bye bye!", emoji: '👋' },
          ],
        },
      ],
    },

    // ── Mission-specific badges ──
    badges: [
      { id: 'window-shopper', emoji: '🛍️', name: 'Window Shopper', desc: 'Learned how to browse the market', when: { quest: 'shop', need: 'learn' } },
      { id: 'deal-maker',     emoji: '💰', name: 'Deal Maker',     desc: 'Finished the How Much quest',      when: { quest: 'price', need: 'complete' } },
      { id: 'color-star',     emoji: '🌈', name: 'Color Star',     desc: 'Mastered colors & things',        when: { quest: 'pick', need: 'listen2' } },
      { id: 'snack-attack',   emoji: '🍢', name: 'Snack Attack',   desc: 'Finished Market Snacks',          when: { quest: 'snacks', need: 'complete' } },
      { id: 'mall-explorer',  emoji: '🏬', name: 'Mall Explorer',  desc: 'Learned to find your way at the mall', when: { quest: 'mall', need: 'learn' } },
      { id: 'bargain-boss',   emoji: '🤝', name: 'Bargain Boss',   desc: 'Haggled a deal in the roleplay',  when: { call: true } },
      { id: 'shopping-legend',emoji: '🏆', name: 'Shopping Legend',desc: 'Finished every single quest',     when: { allQuests: 'learn' } },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Mission: Temple & Day Out — the classic Thai family outing:
  // Grandpa takes you to a temple (wat) to make merit, then out
  // sightseeing for the day. Teaches culture + elder respect.
  // Finale is a roleplay day at the temple with Grandpa (ปู่),
  // the partner to Bangkok's Grandma (ย่า) call.
  // ═══════════════════════════════════════════════════════════
  {
    id: 'temple',
    title: 'Mission: Temple & Day Out',
    emoji: '🛕',
    color: 'purple',
    blurb: 'Visit a temple and explore the city — a real Thai family day out!',
    quests: [
      {
        id: 'goout',
        num: 1,
        title: "Let's Go Out!",
        emoji: '🚗',
        color: 'teal',
        intro: 'Grandpa is taking everyone out for the day! Pile into the car and ask all the questions a curious kid asks.',
        phrases: [
          { thai: 'ไปไหนครับ', roman: 'pai nǎi khráp', kana: 'パイ ナイ クラップ', en: 'Where are we going?', jp: 'どこ行くの？', emoji: '🤔' },
          { thai: 'ไปวัดครับ', roman: 'pai wát khráp', kana: 'パイ ワット クラップ', en: "We're going to the temple!", jp: 'お寺に行くよ', emoji: '🛕' },
          { thai: 'ผมไปด้วยได้ไหมครับ', roman: 'phǒm pai dûai dâai mǎi khráp', kana: 'ポム パイ ドゥアイ ダーイ マイ クラップ', en: 'Can I come too?', jp: 'ぼくも行っていい？', emoji: '🙋' },
          { thai: 'ถึงหรือยังครับ', roman: 'thǔeng rǔe yang khráp', kana: 'トゥン ルー ヤン クラップ', en: 'Are we there yet?', jp: 'もう着いた？', emoji: '🚗',
            tip: 'Every kid\'s favorite car question — works in Thai too!' },
          { thai: 'อีกไกลไหมครับ', roman: 'ìik klai mǎi khráp', kana: 'イーク クライ マイ クラップ', en: 'Is it still far?', jp: 'まだ遠い？', emoji: '🛣️' },
          { thai: 'นั่งรถไปครับ', roman: 'nâng rót pai khráp', kana: 'ナン ロット パイ クラップ', en: 'We go by car', jp: '車で行く', emoji: '🚙' },
          { thai: 'สนุกแน่ๆ เลยครับ', roman: 'sà-nùk nâe nâe loei khráp', kana: 'サヌック ネー ネー ルーイ クラップ', en: "It's going to be so fun!", jp: 'ぜったい楽しいよ！', emoji: '🤩' },
        ],
      },
      {
        id: 'wat',
        num: 2,
        title: 'At the Temple',
        emoji: '🛕',
        color: 'gold',
        intro: 'A Thai temple is calm and beautiful. There are special rules — shoes off, soft voice, and a respectful wai.',
        phrases: [
          { thai: 'วัด', roman: 'wát', kana: 'ワット', en: 'Temple', jp: 'おてら', emoji: '🛕' },
          { thai: 'ถอดรองเท้าครับ', roman: 'thàwt rawng-tháo khráp', kana: 'トート ロン タオ クラップ', en: 'Take off your shoes', jp: 'くつをぬぐ', emoji: '👟',
            tip: 'ALWAYS take your shoes off before going inside a temple.' },
          { thai: 'ไหว้พระ', roman: 'wâai phrá', kana: 'ワーイ プラ', en: 'Pay respect to the Buddha', jp: '仏さまをおがむ', emoji: '🙏',
            tip: 'Press your palms together and bow your head — a special temple wai.' },
          { thai: 'พระ', roman: 'phrá', kana: 'プラ', en: 'Monk / Buddha image', jp: 'おぼうさん・仏さま', emoji: '🧎' },
          { thai: 'เงียบๆ นะครับ', roman: 'ngîap ngîap ná khráp', kana: 'ギアップ ギアップ ナ クラップ', en: 'Shh, be quiet', jp: 'しずかにね', emoji: '🤫',
            tip: 'Temples are calm places — use your softest voice.' },
          { thai: 'สวยมากครับ', roman: 'sǔai mâak khráp', kana: 'スワイ マーク クラップ', en: 'So beautiful!', jp: 'とてもきれい！', emoji: '✨' },
          { thai: 'ใหญ่จังเลย', roman: 'yài jang loei', kana: 'ヤイ ジャン ルーイ', en: "It's so big!", jp: 'すごく大きい！', emoji: '😲' },
        ],
      },
      {
        id: 'merit',
        num: 3,
        title: 'Make a Wish',
        emoji: '🪷',
        color: 'orange',
        intro: 'Thai people come to the temple to "tham bun" — make merit and a wish. Light incense, press your palms, and say sǎa-thú!',
        phrases: [
          { thai: 'ทำบุญ', roman: 'tham bun', kana: 'タム ブン', en: 'Make merit (do good)', jp: 'とくをつむ', emoji: '🪷',
            tip: 'Tham bun = doing good deeds. It\'s a big part of Thai life!' },
          { thai: 'จุดธูป', roman: 'jùt thûup', kana: 'ジュット トゥープ', en: 'Light incense', jp: 'おせんこうをつける', emoji: '🕯️' },
          { thai: 'พนมมือ', roman: 'phá-nom mue', kana: 'パノム ムー', en: 'Press your palms together', jp: 'てを合わせる', emoji: '🙏' },
          { thai: 'กราบ', roman: 'kràap', kana: 'クラープ', en: 'Bow down low', jp: 'ふかくおじぎする', emoji: '🧎' },
          { thai: 'ขอพร', roman: 'khǎw phawn', kana: 'コー ポーン', en: 'Make a wish / ask a blessing', jp: 'おねがいごとをする', emoji: '🌟' },
          { thai: 'ขอให้โชคดีครับ', roman: 'khǎw hâi chôok-dii khráp', kana: 'コー ハイ チョーク ディー クラップ', en: 'Wishing for good luck', jp: 'こううんでありますように', emoji: '🍀' },
          { thai: 'สาธุ', roman: 'sǎa-thú', kana: 'サートゥ', en: 'Sa-thu (amen)', jp: 'サートゥ（アーメン）', emoji: '🙏',
            tip: 'Say sǎa-thú after a blessing — like saying "amen".' },
        ],
      },
      {
        id: 'see',
        num: 4,
        title: 'Look at This!',
        emoji: '📸',
        color: 'teal',
        intro: 'So much to see on a day out! Point at the cool stuff, ask what things are, and strike a pose for photos.',
        phrases: [
          { thai: 'ดูนี่สิครับ', roman: 'duu nîi sì khráp', kana: 'ドゥー ニー シ クラップ', en: 'Look at this!', jp: 'これ見て！', emoji: '👀' },
          { thai: 'นั่นอะไรครับ', roman: 'nân à-rai khráp', kana: 'ナン アライ クラップ', en: "What's that?", jp: 'あれなに？', emoji: '❓' },
          { thai: 'ถ่ายรูปกันครับ', roman: 'thàai rûup kan khráp', kana: 'ターイ ループ ガン クラップ', en: "Let's take a photo!", jp: 'しゃしんとろう！', emoji: '📸' },
          { thai: 'สวยจังเลย', roman: 'sǔai jang loei', kana: 'スワイ ジャン ルーイ', en: 'So beautiful!', jp: 'すごくきれい！', emoji: '✨' },
          { thai: 'ใหญ่มากครับ', roman: 'yài mâak khráp', kana: 'ヤイ マーク クラップ', en: "It's so big!", jp: 'すごく大きい！', emoji: '🏛️' },
          { thai: 'ผมชอบที่นี่ครับ', roman: 'phǒm châwp thîi-nîi khráp', kana: 'ポム チョープ ティー ニー クラップ', en: 'I like it here!', jp: 'ここすき！', emoji: '💖' },
          { thai: 'สนุกมากครับ', roman: 'sà-nùk mâak khráp', kana: 'サヌック マーク クラップ', en: 'So much fun!', jp: 'すごく楽しい！', emoji: '🎉' },
        ],
      },
      {
        id: 'need',
        num: 5,
        title: 'I Need...',
        emoji: '🙋',
        color: 'green',
        intro: 'A long day out is tiring! Tell Grandpa exactly what you need — brave kids always speak up.',
        phrases: [
          { thai: 'ผมเหนื่อยครับ', roman: 'phǒm nùeai khráp', kana: 'ポム ヌアイ クラップ', en: "I'm tired", jp: 'つかれた', emoji: '😮‍💨' },
          { thai: 'ร้อนจังครับ', roman: 'ráwn jang khráp', kana: 'ローン ジャン クラップ', en: "It's so hot!", jp: 'あつい〜', emoji: '🥵' },
          { thai: 'ขอน้ำหน่อยครับ', roman: 'khǎw náam nòi khráp', kana: 'コー ナーム ノイ クラップ', en: 'Water, please', jp: 'おみずください', emoji: '💧' },
          { thai: 'อุ้มหน่อยได้ไหมครับ', roman: 'ûm nòi dâai mǎi khráp', kana: 'ウム ノイ ダーイ マイ クラップ', en: 'Can you carry me?', jp: 'だっこして？', emoji: '🤱',
            tip: 'Tired little legs? This one works on every grandpa!' },
          { thai: 'ห้องน้ำอยู่ไหนครับ', roman: 'hông-náam yùu nǎi khráp', kana: 'ホン ナーム ユー ナイ クラップ', en: 'Where is the bathroom?', jp: 'トイレどこ？', emoji: '🚻' },
          { thai: 'ปู่อยู่ไหนครับ', roman: 'pùu yùu nǎi khráp', kana: 'プー ユー ナイ クラップ', en: "Where's Grandpa?", jp: 'おじいちゃんどこ？', emoji: '👴' },
          { thai: 'ผมโอเคครับ', roman: 'phǒm oo-khee khráp', kana: 'ポム オーケー クラップ', en: "I'm okay!", jp: 'だいじょうぶ！', emoji: '👍' },
        ],
      },
      {
        id: 'thanks',
        num: 6,
        title: 'Thank You, Grandpa',
        emoji: '🙏',
        color: 'red',
        intro: 'A perfect day deserves a big thank-you. Make Grandpa\'s heart melt before you head home.',
        phrases: [
          { thai: 'ขอบคุณครับ', roman: 'khàwp-khun khráp', kana: 'コープ クン クラップ', en: 'Thank you', jp: 'ありがとう', emoji: '🙏' },
          { thai: 'สนุกมากเลยวันนี้', roman: 'sà-nùk mâak loei wan-níi', kana: 'サヌック マーク ルーイ ワン ニー', en: 'Today was SO fun!', jp: 'きょうたのしかった！', emoji: '🎉' },
          { thai: 'ผมชอบไปวัดครับ', roman: 'phǒm châwp pai wát khráp', kana: 'ポム チョープ パイ ワット クラップ', en: 'I love going to the temple', jp: 'おてらすき！', emoji: '🛕' },
          { thai: 'ไปเที่ยวอีกนะครับ', roman: 'pai thîao ìik ná khráp', kana: 'パイ ティアオ イーク ナ クラップ', en: "Let's go out again!", jp: 'またおでかけしようね', emoji: '🔁' },
          { thai: 'ปู่ใจดีมากครับ', roman: 'pùu jai-dii mâak khráp', kana: 'プー ジャイ ディー マーク クラップ', en: "Grandpa, you're so kind", jp: 'おじいちゃんやさしい', emoji: '💛' },
          { thai: 'ผมรักปู่ครับ', roman: 'phǒm rák pùu khráp', kana: 'ポム ラック プー クラップ', en: 'I love you, Grandpa!', jp: 'おじいちゃん大好き', emoji: '❤️' },
          { thai: 'กลับบ้านกันครับ', roman: 'klàp bâan kan khráp', kana: 'クラップ バーン ガン クラップ', en: "Let's go home", jp: 'おうちに帰ろう', emoji: '🏠' },
        ],
      },
    ],

    // ── Finale: a day at the temple with Grandpa (roleplay) ──
    call: {
      label: 'A Day with Pùu!',
      blurb: 'Spend a temple day out with Grandpa',
      homeEmoji: '🛕👴',
      personaName: 'Pùu',
      personaThai: 'ปู่',
      personaRole: 'Grandpa',
      personaEmoji: '👴',
      personaPlace: 'A temple in Bangkok 🛕',
      steps: [
        {
          yaa: { thai: 'ถึงวัดแล้วนะหลาน สวยไหมล่ะ?', roman: 'thǔeng wát láew ná lǎan, sǔai mǎi lâ?', en: "We've reached the temple. Isn't it pretty?", jp: 'お寺についたよ。きれいでしょ？' },
          replies: [
            { thai: 'สวยมากครับ ใหญ่จังเลย', roman: 'sǔai mâak khráp, yài jang loei', kana: 'スワイ マーク クラップ、ヤイ ジャン ルーイ', en: "So beautiful! It's so big!", emoji: '✨' },
          ],
        },
        {
          yaa: { thai: 'ก่อนเข้าไป ต้องถอดรองเท้าก่อนนะ', roman: 'kàwn khâo pai, tâwng thàwt rawng-tháo kàwn ná', en: 'Before we go in, we take our shoes off.', jp: '入る前にくつをぬごうね' },
          replies: [
            { thai: 'ครับ ถอดรองเท้าครับ', roman: 'khráp, thàwt rawng-tháo khráp', kana: 'クラップ、トート ロン タオ クラップ', en: 'Okay, taking my shoes off', emoji: '👟' },
            { thai: 'ครับ วางตรงนี้ใช่ไหมครับ', roman: 'khráp, waang trong-níi châi mǎi khráp', kana: 'クラップ、ワーン トロン ニー チャイ マイ クラップ', en: 'Okay — I put them here, right?', emoji: '🤔', bonus: true },
          ],
        },
        {
          yaa: { thai: 'มาไหว้พระด้วยกันนะ', roman: 'maa wâai phrá dûai-kan ná', en: "Let's pay respect to the Buddha together.", jp: 'いっしょに仏さまをおがもうね' },
          replies: [
            { thai: 'ครับ ไหว้พระครับ', roman: 'khráp, wâai phrá khráp', kana: 'クラップ、ワーイ プラ クラップ', en: 'Yes, I wai the Buddha', emoji: '🙏' },
            { thai: 'พนมมือแบบนี้ใช่ไหมครับ', roman: 'phá-nom mue bàep níi châi mǎi khráp', kana: 'パノム ムー ベープ ニー チャイ マイ クラップ', en: 'Palms together like this, right?', emoji: '🤲', bonus: true },
          ],
        },
        {
          yaa: { thai: 'มาทำบุญขอพรกันจ้ะ', roman: 'maa tham bun khǎw phawn kan jâ', en: "Let's make merit and a wish.", jp: 'とくをつんで、おねがいごとしようね' },
          replies: [
            { thai: 'ขอให้โชคดีครับ สาธุ', roman: 'khǎw hâi chôok-dii khráp, sǎa-thú', kana: 'コー ハイ チョーク ディー クラップ、サートゥ', en: 'Wishing for good luck — sǎa-thú!', emoji: '🍀' },
            { thai: 'ผมขอให้ปู่แข็งแรงครับ', roman: 'phǒm khǎw hâi pùu khǎeng-raeng khráp', kana: 'ポム コー ハイ プー ケン レーン クラップ', en: 'I wish for Grandpa to be healthy!', emoji: '🥺', bonus: true },
          ],
        },
        {
          yaa: { thai: 'หลานเหนื่อยไหม พักก่อนไหมจ๊ะ?', roman: 'lǎan nùeai mǎi, phák kàwn mǎi já?', en: 'Are you tired? Want to rest a bit?', jp: 'つかれた？すこし休む？' },
          replies: [
            { thai: 'นิดหน่อยครับ ขอน้ำหน่อยครับ', roman: 'nít-nòi khráp, khǎw náam nòi khráp', kana: 'ニットノイ クラップ、コー ナーム ノイ クラップ', en: 'A little — water, please', emoji: '💧' },
            { thai: 'ไม่เหนื่อยครับ สนุกมากเลย!', roman: 'mâi nùeai khráp, sà-nùk mâak loei!', kana: 'マイ ヌアイ クラップ、サヌック マーク ルーイ！', en: "I'm not tired — it's so fun!", emoji: '🤩' },
          ],
        },
        {
          yaa: { thai: 'วันนี้สนุกไหมจ๊ะ?', roman: 'wan-níi sà-nùk mǎi já?', en: 'Did you have fun today?', jp: 'きょう楽しかった？' },
          replies: [
            { thai: 'สนุกมากครับ ผมชอบไปวัดครับ', roman: 'sà-nùk mâak khráp, phǒm châwp pai wát khráp', kana: 'サヌック マーク クラップ、ポム チョープ パイ ワット クラップ', en: 'So fun! I love going to the temple', emoji: '🛕' },
            { thai: 'ขอบคุณที่พามานะครับ', roman: 'khàwp-khun thîi phaa maa ná khráp', kana: 'コープクン ティー パー マー ナ クラップ', en: 'Thank you for bringing me!', emoji: '🙏', bonus: true },
          ],
        },
        {
          yaa: { thai: 'ปู่ก็รักหลานนะ กลับบ้านกัน!', roman: 'pùu kâw rák lǎan ná, klàp bâan kan!', en: "Grandpa loves you too. Let's go home!", jp: 'おじいちゃんも大好きだよ。帰ろうね！' },
          replies: [
            { thai: 'ผมรักปู่ครับ ไปเที่ยวอีกนะครับ!', roman: 'phǒm rák pùu khráp, pai thîao ìik ná khráp!', kana: 'ポム ラック プー クラップ、パイ ティアオ イーク ナ クラップ！', en: "I love you, Grandpa — let's go out again!", emoji: '❤️' },
          ],
        },
      ],
    },

    // ── Mission-specific badges ──
    badges: [
      { id: 'day-tripper',    emoji: '🚗', name: 'Day Tripper',     desc: 'Learned to head out for the day',  when: { quest: 'goout', need: 'learn' } },
      { id: 'temple-visitor', emoji: '🛕', name: 'Temple Visitor',  desc: 'Finished the At the Temple quest',  when: { quest: 'wat', need: 'complete' } },
      { id: 'merit-maker',    emoji: '🪷', name: 'Merit Maker',     desc: 'Mastered making merit & a wish',   when: { quest: 'merit', need: 'listen2' } },
      { id: 'shutterbug',     emoji: '📸', name: 'Shutterbug',      desc: 'Finished the Look at This quest',   when: { quest: 'see', need: 'complete' } },
      { id: 'brave-asker',    emoji: '🙋', name: 'Brave Asker',     desc: 'Learned to ask for what you need',  when: { quest: 'need', need: 'learn' } },
      { id: 'grandpas-buddy', emoji: '👴', name: "Grandpa's Buddy", desc: 'Finished the temple day roleplay', when: { call: true } },
      { id: 'temple-legend',  emoji: '🏆', name: 'Temple Legend',   desc: 'Finished every single quest',      when: { allQuests: 'learn' } },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Mission: Let's Eat Out! — a full restaurant adventure: get a
  // table, read the menu, order yummy dishes, get the spice just
  // right, finish with Thai sweets, then pay. Finale is ordering a
  // whole meal in a roleplay with a friendly waiter (น้อง).
  // ═══════════════════════════════════════════════════════════
  {
    id: 'restaurant',
    title: "Mission: Let's Eat Out!",
    emoji: '🍽️',
    color: 'orange',
    blurb: 'Order a whole Thai meal — from menu to mango sticky rice!',
    quests: [
      {
        id: 'table',
        num: 1,
        title: 'Find a Table',
        emoji: '🍽️',
        color: 'pink',
        intro: "Time to eat out! Walk into the restaurant like a regular: ask for a table and grab a menu.",
        phrases: [
          { thai: 'หิวแล้วครับ', roman: 'hǐw láew khráp', kana: 'ヒウ レーオ クラップ', en: "I'm hungry now!", jp: 'おなかすいた！', emoji: '🤤' },
          { thai: 'กินข้าวกันครับ', roman: 'kin khâao kan khráp', kana: 'キン カーオ ガン クラップ', en: "Let's eat!", jp: 'ごはん食べよう！', emoji: '🍚' },
          { thai: 'มีโต๊ะไหมครับ', roman: 'mii tó mǎi khráp', kana: 'ミー ト マイ クラップ', en: 'Do you have a table?', jp: 'せきある？', emoji: '🪑' },
          { thai: 'สองคนครับ', roman: 'sǎwng khon khráp', kana: 'ソーン コン クラップ', en: 'Two people', jp: 'ふたりです', emoji: '✌️' },
          { thai: 'ขอเมนูหน่อยครับ', roman: 'khǎw mee-nuu nòi khráp', kana: 'コー メーヌー ノイ クラップ', en: 'Menu, please', jp: 'メニューください', emoji: '📖',
            tip: 'mee-nuu sounds just like "menu" — easy one!' },
          { thai: 'นั่งตรงนี้ได้ไหมครับ', roman: 'nâng trong-níi dâai mǎi khráp', kana: 'ナン トロン ニー ダーイ マイ クラップ', en: 'Can we sit here?', jp: 'ここにすわっていい？', emoji: '🪑' },
          { thai: 'ล้างมือก่อนครับ', roman: 'láang mue kàwn khráp', kana: 'ラーン ムー ゴーン クラップ', en: 'Wash hands first', jp: 'さきに手をあらう', emoji: '🧼' },
        ],
      },
      {
        id: 'order',
        num: 2,
        title: 'What Should We Order?',
        emoji: '📖',
        color: 'teal',
        intro: "So many choices! Ask what's good, get a recommendation, and order like a pro.",
        phrases: [
          { thai: 'มีอะไรอร่อยครับ', roman: 'mii à-rai à-ròi khráp', kana: 'ミー アライ アロイ クラップ', en: "What's good here?", jp: 'なにがおいしい？', emoji: '😋' },
          { thai: 'แนะนำอะไรดีครับ', roman: 'náe-nam à-rai dii khráp', kana: 'ネナム アライ ディー クラップ', en: 'What do you recommend?', jp: 'おすすめは？', emoji: '🤔',
            tip: 'Ask this and the staff will pick their tastiest dish for you!' },
          { thai: 'ขออันนี้ครับ', roman: 'khǎw an níi khráp', kana: 'コー アン ニー クラップ', en: "I'd like this one", jp: 'これください', emoji: '👇' },
          { thai: 'ขอข้าวหนึ่งจานครับ', roman: 'khǎw khâao nùeng jaan khráp', kana: 'コー カーオ ヌン ジャーン クラップ', en: 'One plate of rice, please', jp: 'ごはん1つください', emoji: '🍚' },
          { thai: 'ขอน้ำเปล่าครับ', roman: 'khǎw náam plàao khráp', kana: 'コー ナーム プラーオ クラップ', en: 'Plain water, please', jp: 'おみずください', emoji: '💧' },
          { thai: 'เอาอันนี้ครับ', roman: 'ao an níi khráp', kana: 'アオ アン ニー クラップ', en: "I'll have this one", jp: 'これにする', emoji: '✅' },
          { thai: 'เท่านี้ครับ', roman: 'thâo-níi khráp', kana: 'タオ ニー クラップ', en: "That's all, thanks", jp: 'いじょうです', emoji: '🙆' },
        ],
      },
      {
        id: 'dishes',
        num: 3,
        title: 'Yummy Dishes',
        emoji: '🍜',
        color: 'orange',
        intro: 'The best Thai dishes, ready to order by name. Say them out loud and watch the food appear!',
        phrases: [
          { thai: 'ผัดไทย', roman: 'phàt-thai', kana: 'パッタイ', en: 'Pad thai (fried noodles)', jp: 'パッタイ', emoji: '🍜' },
          { thai: 'ต้มยำกุ้ง', roman: 'tôm-yam kûng', kana: 'トムヤム クン', en: 'Tom yum shrimp soup', jp: 'トムヤムクン', emoji: '🍲' },
          { thai: 'ข้าวเหนียว', roman: 'khâao-nǐao', kana: 'カーオ ニアオ', en: 'Sticky rice', jp: 'もちごめ', emoji: '🍙' },
          { thai: 'ส้มตำ', roman: 'sôm-tam', kana: 'ソムタム', en: 'Papaya salad', jp: 'パパイヤサラダ', emoji: '🥗',
            tip: 'Super famous — but it can be SPICY. Ask for it mild!' },
          { thai: 'ก๋วยเตี๋ยว', roman: 'kǔai-tǐao', kana: 'クアイティアオ', en: 'Noodle soup', jp: 'タイラーメン', emoji: '🍜' },
          { thai: 'หมูปิ้ง', roman: 'mǔu pîng', kana: 'ムー ピン', en: 'Grilled pork skewers', jp: 'やきぶた串', emoji: '🍢' },
          { thai: 'ไข่เจียว', roman: 'khài-jiao', kana: 'カイ ジアオ', en: 'Thai omelette', jp: 'タイふうオムレツ', emoji: '🍳',
            tip: 'A kid favorite — fluffy egg on top of rice. Yum!' },
        ],
      },
      {
        id: 'taste',
        num: 4,
        title: 'Just Right',
        emoji: '🌶️',
        color: 'green',
        intro: 'Thai food can be SPICY! Tell the kitchen exactly how you like it, and ask for anything you need.',
        phrases: [
          { thai: 'เผ็ดไหมครับ', roman: 'phèt mǎi khráp', kana: 'ペット マイ クラップ', en: 'Is it spicy?', jp: 'からい？', emoji: '🌶️' },
          { thai: 'ไม่เผ็ดนะครับ', roman: 'mâi phèt ná khráp', kana: 'マイ ペット ナ クラップ', en: 'Not spicy, please', jp: 'からくしないでね', emoji: '🧯',
            tip: 'The most important food sentence for kids in Thailand!' },
          { thai: 'เผ็ดนิดเดียวครับ', roman: 'phèt nít-diao khráp', kana: 'ペット ニットディアオ クラップ', en: 'Just a tiny bit spicy', jp: 'すこしだけからく', emoji: '🌶️' },
          { thai: 'อร่อยมากครับ', roman: 'à-ròi mâak khráp', kana: 'アロイ マーク クラップ', en: 'So delicious!', jp: 'すごくおいしい！', emoji: '😋' },
          { thai: 'ขอเพิ่มหน่อยครับ', roman: 'khǎw phôem nòi khráp', kana: 'コー プーム ノイ クラップ', en: 'A little more, please', jp: 'もうすこしください', emoji: '➕' },
          { thai: 'ขอน้ำแข็งหน่อยครับ', roman: 'khǎw náam-khǎeng nòi khráp', kana: 'コー ナーム ケン ノイ クラップ', en: 'Some ice, please', jp: 'こおりください', emoji: '🧊' },
          { thai: 'ขอช้อนหน่อยครับ', roman: 'khǎw cháwn nòi khráp', kana: 'コー チョーン ノイ クラップ', en: 'A spoon, please', jp: 'スプーンください', emoji: '🥄' },
        ],
      },
      {
        id: 'sweets',
        num: 5,
        title: 'Snacks & Sweets',
        emoji: '🍡',
        color: 'purple',
        intro: 'The best part — dessert! Thai sweets are world famous. Order one (or two!) and say how yummy they are.',
        phrases: [
          { thai: 'ของหวาน', roman: 'khǎwng-wǎan', kana: 'コーン ワーン', en: 'Dessert / sweets', jp: 'デザート', emoji: '🍮' },
          { thai: 'ข้าวเหนียวมะม่วง', roman: 'khâao-nǐao má-mûang', kana: 'カーオ ニアオ マムアン', en: 'Mango sticky rice', jp: 'マンゴーもちごめ', emoji: '🥭',
            tip: 'THE most famous Thai dessert — you have to try it!' },
          { thai: 'โรตี', roman: 'roo-tii', kana: 'ローティー', en: 'Roti (sweet pancake)', jp: 'ロティ', emoji: '🥞' },
          { thai: 'บัวลอย', roman: 'bua-loi', kana: 'ブアロイ', en: 'Rice balls in coconut milk', jp: 'ココナッツだんご', emoji: '🍡' },
          { thai: 'ขนม', roman: 'khà-nǒm', kana: 'カノム', en: 'Snack / sweet', jp: 'おやつ', emoji: '🍬' },
          { thai: 'หวานจังครับ', roman: 'wǎan jang khráp', kana: 'ワーン ジャン クラップ', en: 'So sweet!', jp: 'あま〜い！', emoji: '😍' },
          { thai: 'ขออีกอันได้ไหมครับ', roman: 'khǎw ìik an dâai mǎi khráp', kana: 'コー イーク アン ダーイ マイ クラップ', en: 'Can I have one more?', jp: 'もうひとついい？', emoji: '🙏' },
        ],
      },
      {
        id: 'done',
        num: 6,
        title: 'All Done!',
        emoji: '🧾',
        color: 'red',
        intro: 'Tummy full, everyone happy. Compliment the cook, ask for the bill, and pay like a grown-up.',
        phrases: [
          { thai: 'อิ่มแล้วครับ', roman: 'ìm láew khráp', kana: 'イム レーオ クラップ', en: "I'm full!", jp: 'おなかいっぱい', emoji: '😌' },
          { thai: 'อร่อยทุกอย่างเลยครับ', roman: 'à-ròi thúk yàang loei khráp', kana: 'アロイ トゥック ヤーン ルーイ クラップ', en: 'Everything was delicious!', jp: 'ぜんぶおいしかった！', emoji: '🤩' },
          { thai: 'คิดเงินด้วยครับ', roman: 'khít ngoen dûai khráp', kana: 'キット グン ドゥアイ クラップ', en: 'Check, please', jp: 'おかいけいください', emoji: '🧾' },
          { thai: 'เท่าไหร่ครับ', roman: 'thâo-rài khráp', kana: 'タオ ライ クラップ', en: 'How much is it?', jp: 'いくら？', emoji: '💰' },
          { thai: 'จ่ายเงินครับ', roman: 'jàai ngoen khráp', kana: 'ジャーイ グン クラップ', en: 'Pay the bill', jp: 'おかねをはらう', emoji: '💳' },
          { thai: 'ขอบคุณมากครับ', roman: 'khàwp-khun mâak khráp', kana: 'コープ クン マーク クラップ', en: 'Thank you so much!', jp: 'ありがとうございます', emoji: '🙏' },
          { thai: 'อร่อยมาก ไว้มาอีกครับ', roman: 'à-ròi mâak, wái maa ìik khráp', kana: 'アロイ マーク、ワイ マー イーク クラップ', en: "Delicious — we'll come again!", jp: 'おいしかった、また来ます', emoji: '👋' },
        ],
      },
    ],

    // ── Finale: ordering a whole meal with a waiter (roleplay) ──
    call: {
      label: 'Order Dinner!',
      blurb: 'Order a whole meal at a Thai restaurant',
      homeEmoji: '🍽️🧑‍🍳',
      personaName: 'Nóng',
      personaThai: 'น้อง',
      personaRole: 'a friendly waiter',
      personaEmoji: '🧑‍🍳',
      personaPlace: 'A Thai restaurant 🍜',
      steps: [
        {
          yaa: { thai: 'สวัสดีครับ กี่คนครับ?', roman: 'sà-wàt-dii khráp, kìi khon khráp?', en: 'Hello! How many people?', jp: 'いらっしゃいませ！何名さま？' },
          replies: [
            { thai: 'สวัสดีครับ สองคนครับ', roman: 'sà-wàt-dii khráp, sǎwng khon khráp', kana: 'サワッディー クラップ、ソーン コン クラップ', en: 'Hello! Two people', emoji: '✌️' },
          ],
        },
        {
          yaa: { thai: 'เชิญนั่งเลยครับ รับอะไรดีครับ?', roman: 'choen nâng loei khráp, ráp à-rai dii khráp?', en: 'Please have a seat. What would you like?', jp: 'どうぞおすわりください。ご注文は？' },
          replies: [
            { thai: 'ขอเมนูหน่อยครับ', roman: 'khǎw mee-nuu nòi khráp', kana: 'コー メーヌー ノイ クラップ', en: 'Menu, please', emoji: '📖' },
            { thai: 'มีอะไรอร่อยครับ', roman: 'mii à-rai à-ròi khráp', kana: 'ミー アライ アロイ クラップ', en: "What's good here?", emoji: '😋', bonus: true },
          ],
        },
        {
          yaa: { thai: 'ผัดไทยอร่อยมากครับ ลองไหมครับ?', roman: 'phàt-thai à-ròi mâak khráp, lawng mǎi khráp?', en: 'The pad thai is very good — want to try it?', jp: 'パッタイおいしいですよ、いかが？' },
          replies: [
            { thai: 'เอาผัดไทยครับ', roman: 'ao phàt-thai khráp', kana: 'アオ パッタイ クラップ', en: "I'll have the pad thai!", emoji: '🍜' },
            { thai: 'ขอผัดไทยไม่เผ็ดครับ', roman: 'khǎw phàt-thai mâi phèt khráp', kana: 'コー パッタイ マイ ペット クラップ', en: 'Pad thai, not spicy please', emoji: '🧯', bonus: true },
          ],
        },
        {
          yaa: { thai: 'รับน้ำอะไรดีครับ?', roman: 'ráp náam à-rai dii khráp?', en: 'What would you like to drink?', jp: 'お飲み物は？' },
          replies: [
            { thai: 'ขอน้ำเปล่าครับ', roman: 'khǎw náam plàao khráp', kana: 'コー ナーム プラーオ クラップ', en: 'Plain water, please', emoji: '💧' },
            { thai: 'ขอน้ำส้มครับ', roman: 'khǎw náam sôm khráp', kana: 'コー ナーム ソム クラップ', en: 'Orange juice, please', emoji: '🧃' },
          ],
        },
        {
          yaa: { thai: 'รับของหวานไหมครับ?', roman: 'ráp khǎwng-wǎan mǎi khráp?', en: 'Would you like dessert?', jp: 'デザートはいかが？' },
          replies: [
            { thai: 'เอาข้าวเหนียวมะม่วงครับ', roman: 'ao khâao-nǐao má-mûang khráp', kana: 'アオ カーオ ニアオ マムアン クラップ', en: 'Mango sticky rice, please!', emoji: '🥭' },
            { thai: 'ขอข้าวเหนียวมะม่วง ชอบมากเลยครับ', roman: 'khǎw khâao-nǐao má-mûang, châwp mâak loei khráp', kana: 'コー カーオ ニアオ マムアン、チョープ マーク ルーイ クラップ', en: 'Mango sticky rice — I love it!', emoji: '😍', bonus: true },
          ],
        },
        {
          yaa: { thai: 'อร่อยไหมครับ?', roman: 'à-ròi mǎi khráp?', en: 'Is it tasty?', jp: 'おいしいですか？' },
          replies: [
            { thai: 'อร่อยมากครับ อิ่มแล้วครับ', roman: 'à-ròi mâak khráp, ìm láew khráp', kana: 'アロイ マーク クラップ、イム レーオ クラップ', en: "So delicious — I'm full!", emoji: '😌' },
            { thai: 'อร่อยทุกอย่างเลยครับ', roman: 'à-ròi thúk yàang loei khráp', kana: 'アロイ トゥック ヤーン ルーイ クラップ', en: 'Everything was delicious!', emoji: '🤩', bonus: true },
          ],
        },
        {
          yaa: { thai: 'ขอบคุณครับ ไว้มาใหม่นะครับ', roman: 'khàwp-khun khráp, wái maa mài ná khráp', en: 'Thank you — please come again!', jp: 'ありがとうございます、またどうぞ！' },
          replies: [
            { thai: 'ขอบคุณครับ อร่อยมาก ไว้มาอีกครับ', roman: 'khàwp-khun khráp, à-ròi mâak, wái maa ìik khráp', kana: 'コープクン クラップ、アロイ マーク、ワイ マー イーク クラップ', en: "Thank you — so delicious, we'll come again!", emoji: '👋' },
          ],
        },
      ],
    },

    // ── Mission-specific badges ──
    badges: [
      { id: 'table-master',      emoji: '🍽️', name: 'Table Master',      desc: 'Learned to get a table',          when: { quest: 'table', need: 'learn' } },
      { id: 'order-up',          emoji: '📖', name: 'Order Up',          desc: 'Finished What Should We Order',    when: { quest: 'order', need: 'complete' } },
      { id: 'dish-master',       emoji: '🍜', name: 'Dish Master',       desc: 'Mastered the yummy dishes',       when: { quest: 'dishes', need: 'listen2' } },
      { id: 'spice-boss',        emoji: '🌶️', name: 'Spice Boss',        desc: 'Finished the Just Right quest',    when: { quest: 'taste', need: 'complete' } },
      { id: 'sweet-tooth',       emoji: '🍡', name: 'Sweet Tooth',       desc: 'Learned snacks & sweets',         when: { quest: 'sweets', need: 'learn' } },
      { id: 'master-orderer',    emoji: '🧑‍🍳', name: 'Master Orderer',    desc: 'Ordered a meal in the roleplay',  when: { call: true } },
      { id: 'restaurant-legend', emoji: '🏆', name: 'Restaurant Legend', desc: 'Finished every single quest',     when: { allQuests: 'learn' } },
    ],
  },

// ═══════════════════════════════════════════════════════════
  // Mission: Songkran — the Thai New Year water festival: splash
  // everyone, then gently pour water on elders' hands for a
  // blessing. Finale is blessing your Auntie (ป้า) at Songkran.
  // ═══════════════════════════════════════════════════════════
  {
    id: 'songkran',
    title: 'Mission: Songkran',
    emoji: '💦',
    color: 'teal',
    blurb: 'Splash into the Thai New Year — soak everyone and shout Happy Songkran! 💦🎉',
    quests: [
      {
        id: 'sk-happy', num: 1, title: 'Happy Songkran!', emoji: '🎉', color: 'gold',
        intro: 'It\'s Songkran, the Thai New Year, and everyone is splashing water! Spread big happy greetings to the whole family.',
        phrases: [
          { thai: 'สุขสันต์วันสงกรานต์ครับ', roman: 'sùk-sǎn wan sǒng-kraan khráp', kana: 'スックサン ワン ソンクラーン クラップ', en: 'Happy Songkran!', jp: 'ハッピーソンクラーン！', emoji: '🎉', tip: 'Songkran is the Thai New Year in April — the whole country has a giant water fight! 💦' },
          { thai: 'สวัสดีปีใหม่ไทยครับ', roman: 'sà-wàt-dii pii-mài thai khráp', kana: 'サワッディー ピーマイ タイ クラップ', en: 'Happy Thai New Year!', jp: 'タイのお正月おめでとう！', emoji: '🎊', tip: 'pii-mài means "new year" — pii is year, mài is new! 🆕' },
          { thai: 'ผมชื่อ ___ ครับ', roman: 'phǒm chûe ___ khráp', kana: 'ポム チュー ___ クラップ', en: 'My name is ___.', jp: 'ぼくの名前は___だよ', emoji: '🙋', blank: true, tip: 'A boy says phǒm for "I" and adds khráp to be polite! 😊' },
          { thai: 'ยินดีที่ได้รู้จักครับ', roman: 'yin-dii thîi dâai rúu-jàk khráp', kana: 'インディー ティー ダーイ ルージャック クラップ', en: 'Nice to meet you!', jp: 'はじめまして', emoji: '🤝' },
          { thai: 'วันนี้สนุกแน่เลยครับ', roman: 'wan-níi sà-nùk nâe loei khráp', kana: 'ワンニー サヌック ネー ルーイ クラップ', en: 'Today is going to be so fun!', jp: '今日はぜったい楽しいよ！', emoji: '😆' },
          { thai: 'ผมตื่นเต้นมากครับ', roman: 'phǒm tùen-tên mâak khráp', kana: 'ポム トゥーンテン マーク クラップ', en: 'I\'m so excited!', jp: 'ぼく、すごくワクワクしてる！', emoji: '🤩' },
          { thai: 'มาฉลองกันเถอะครับ', roman: 'maa chà-lǎwng kan thòe khráp', kana: 'マー チャローン カン トゥ クラップ', en: 'Let\'s celebrate!', jp: 'お祝いしよう！', emoji: '🥳' },
        ],
      },
      {
        id: 'water', num: 2, title: 'Water Fight!', emoji: '💦', color: 'teal',
        intro: 'Grab your water gun — the streets are one giant splash party! Everyone is soaked and laughing in the cool water.',
        phrases: [
          { thai: 'มาเล่นน้ำกันไหมครับ', roman: 'maa lên náam kan mǎi khráp', kana: 'マー レン ナーム カン マイ クラップ', en: 'Wanna play in the water?', jp: 'いっしょに水あそびしない？', emoji: '💦', tip: 'lên náam means "play water" — the heart of Songkran fun! 💧' },
          { thai: 'ปืนฉีดน้ำของผมครับ', roman: 'puen chìit náam khǎwng phǒm khráp', kana: 'プーン チート ナーム コーン ポム クラップ', en: 'This is my water gun!', jp: 'これはぼくの水でっぽうだよ！', emoji: '🔫', tip: 'puen chìit náam = "water-squirt gun" — the coolest Songkran toy! 🔫' },
          { thai: 'สาดน้ำเลยครับ', roman: 'sàat náam loei khráp', kana: 'サート ナーム ルーイ クラップ', en: 'Splash!', jp: 'バシャー！水かけ！', emoji: '🌊' },
          { thai: 'เปียกหมดเลยครับ', roman: 'pìak mòt loei khráp', kana: 'ピアック モット ルーイ クラップ', en: 'I\'m all wet!', jp: 'びしょびしょになっちゃった！', emoji: '💧' },
          { thai: 'เย็นจังเลยครับ', roman: 'yen jang loei khráp', kana: 'イェン ジャン ルーイ クラップ', en: 'So cool and refreshing!', jp: 'すごくつめたくて気持ちいい！', emoji: '🧊' },
          { thai: 'จับได้แล้วครับ', roman: 'jàp dâai láew khráp', kana: 'ジャップ ダーイ レーオ クラップ', en: 'Got you!', jp: 'つかまえた！', emoji: '😄' },
          { thai: 'เติมน้ำก่อนนะครับ', roman: 'toem náam kàwn ná khráp', kana: 'トゥーム ナーム コーン ナ クラップ', en: 'Let me refill my water first!', jp: 'まず水を入れさせてね！', emoji: '🚰' },
        ],
      },
      {
        id: 'bless', num: 3, title: 'Bless the Grown-Ups', emoji: '🙏', color: 'purple',
        intro: 'Songkran isn\'t only splashing — it\'s also a gentle, special moment. You pour sweet-smelling water on the grown-ups\' hands to wish them good luck.',
        phrases: [
          { thai: 'ขอรดน้ำครับ', roman: 'khǎw rót náam khráp', kana: 'コー ロット ナーム クラップ', en: 'May I pour water (to bless you)?', jp: '水をかけさせてください', emoji: '🙏', tip: 'At Songkran you gently pour scented water on elders\' hands — it shows love and respect! 🙏' },
          { thai: 'ขอพรครับ', roman: 'khǎw phawn khráp', kana: 'コー ポーン クラップ', en: 'I ask for your blessing.', jp: 'おめぐみをください', emoji: '✨', tip: 'phawn means "blessing" — you ask grandparents and aunties for one! 🌸' },
          { thai: 'ขอให้สุขภาพดีครับ', roman: 'khǎw hâi sùk-khà-phâap dii khráp', kana: 'コー ハイ スッカパープ ディー クラップ', en: 'I wish you good health!', jp: '元気でいてね！', emoji: '💪' },
          { thai: 'ขอให้อายุยืนครับ', roman: 'khǎw hâi aa-yú yuen khráp', kana: 'コー ハイ アーユ ユーン クラップ', en: 'I wish you a long life!', jp: '長生きしてね！', emoji: '🎂' },
          { thai: 'สาธุครับ', roman: 'sǎa-thú khráp', kana: 'サートゥ クラップ', en: 'Amen / so be it!', jp: 'サートゥ（そうなりますように）', emoji: '🙏', tip: 'Say sǎa-thú after a blessing — it\'s like saying "may it come true"! ✨' },
          { thai: 'ผมรักคุณป้าครับ', roman: 'phǒm rák khun-pâa khráp', kana: 'ポム ラック クンパー クラップ', en: 'I love you, Auntie!', jp: 'おばさん、大好き！', emoji: '🥰' },
          { thai: 'ขอบคุณที่ดูแลผมครับ', roman: 'khàwp-khun thîi duu-lae phǒm khráp', kana: 'コープクン ティー ドゥーレー ポム クラップ', en: 'Thank you for taking care of me!', jp: 'ぼくのお世話ありがとう！', emoji: '💝' },
        ],
      },
      {
        id: 'skfun', num: 4, title: 'Festival Fun', emoji: '🎶', color: 'orange',
        intro: 'Music is booming and yummy snacks are everywhere! Dance, eat ice cream, and enjoy the festival with the whole family.',
        phrases: [
          { thai: 'อร่อยมากครับ', roman: 'à-ròi mâak khráp', kana: 'アロイ マーク クラップ', en: 'So delicious!', jp: 'すごくおいしい！', emoji: '😋', tip: 'à-ròi is the magic word for tasty Thai food! 😋' },
          { thai: 'ขอไอติมครับ', roman: 'khǎw ai-tim khráp', kana: 'コー アイティム クラップ', en: 'Ice cream, please!', jp: 'アイスクリームください！', emoji: '🍦', tip: 'ai-tim sounds like the English "ice cream" — easy! 🍦' },
          { thai: 'เพลงเพราะมากครับ', roman: 'phleeng phráw mâak khráp', kana: 'プレーン プロ マーク クラップ', en: 'The music is so nice!', jp: 'この曲すごくいい！', emoji: '🎵' },
          { thai: 'มาเต้นกันเถอะครับ', roman: 'maa tên kan thòe khráp', kana: 'マー テン カン トゥ クラップ', en: 'Let\'s dance!', jp: 'おどろうよ！', emoji: '💃' },
          { thai: 'สนุกสุดๆ ไปเลยครับ', roman: 'sà-nùk sùt-sùt pai loei khráp', kana: 'サヌック スットスット パイ ルーイ クラップ', en: 'This is SO much fun!', jp: '超たのしい！', emoji: '🎉' },
          { thai: 'หิวแล้วครับ', roman: 'hǐw láew khráp', kana: 'ヒウ レーオ クラップ', en: 'I\'m hungry now!', jp: 'おなかすいた！', emoji: '🍢' },
          { thai: 'ดูสวยจังเลยครับ', roman: 'duu sǔai jang loei khráp', kana: 'ドゥー スワイ ジャン ルーイ クラップ', en: 'It looks so pretty!', jp: 'すごくきれいだね！', emoji: '🎆' },
        ],
      },
      {
        id: 'skcare', num: 5, title: 'Play Safe & Kind', emoji: '😊', color: 'green',
        intro: 'The ground gets super slippery with all that water! Be a kind, careful friend so everyone stays happy and safe.',
        phrases: [
          { thai: 'ระวังลื่นนะครับ', roman: 'rá-wang lûen ná khráp', kana: 'ラワン ルーン ナ クラップ', en: 'Careful, it\'s slippery!', jp: 'すべるから気をつけてね！', emoji: '⚠️', tip: 'rá-wang means "be careful" — a kind thing to say at a wet festival! 💧' },
          { thai: 'ขอโทษครับ', roman: 'khǎw-thôht khráp', kana: 'コートート クラップ', en: 'I\'m sorry!', jp: 'ごめんね！', emoji: '🙇' },
          { thai: 'เธอโอเคไหมครับ', roman: 'thoe oo-khee mǎi khráp', kana: 'トゥー オーケー マイ クラップ', en: 'Are you okay?', jp: 'だいじょうぶ？', emoji: '🤗' },
          { thai: 'ค่อยๆ นะครับ', roman: 'khâwi-khâwi ná khráp', kana: 'コイコイ ナ クラップ', en: 'Gently now!', jp: 'そっとね！', emoji: '🫶', tip: 'khâwi-khâwi means "slowly, gently" — don\'t splash too hard! 💦' },
          { thai: 'แบ่งน้ำกันนะครับ', roman: 'bàeng náam kan ná khráp', kana: 'ベン ナーム カン ナ クラップ', en: 'Let\'s share the water!', jp: '水をわけっこしようね！', emoji: '🤝' },
          { thai: 'ไม่เป็นไรครับ', roman: 'mâi pen rai khráp', kana: 'マイ ペン ライ クラップ', en: 'It\'s okay, no worries!', jp: 'だいじょうぶ、気にしないで！', emoji: '😌' },
          { thai: 'เล่นด้วยกันนะครับ', roman: 'lên dûai-kan ná khráp', kana: 'レン ドゥアイカン ナ クラップ', en: 'Let\'s play together!', jp: 'いっしょにあそぼうね！', emoji: '👫' },
        ],
      },
      {
        id: 'skbye', num: 6, title: 'Best Day Ever!', emoji: '👋', color: 'pink',
        intro: 'The sun is setting and you\'re soaked and smiling! Time to thank everyone and say a happy goodbye to the best day.',
        phrases: [
          { thai: 'สนุกมากเลยวันนี้ครับ', roman: 'sà-nùk mâak loei wan-níi khráp', kana: 'サヌック マーク ルーイ ワンニー クラップ', en: 'Today was so much fun!', jp: '今日すごく楽しかった！', emoji: '🥳' },
          { thai: 'อยากเล่นอีกครับ', roman: 'yàak lên ìik khráp', kana: 'ヤーク レン イーク クラップ', en: 'I want to play again!', jp: 'もっとあそびたい！', emoji: '🔁' },
          { thai: 'ขอบคุณมากครับ', roman: 'khàwp-khun mâak khráp', kana: 'コープクン マーク クラップ', en: 'Thank you so much!', jp: 'どうもありがとう！', emoji: '🙏' },
          { thai: 'รักนะครับ', roman: 'rák ná khráp', kana: 'ラック ナ クラップ', en: 'Love you!', jp: '大好きだよ！', emoji: '❤️', tip: 'rák means "love" — a sweet way to end the day! 💞' },
          { thai: 'เจอกันใหม่นะครับ', roman: 'joe kan mài ná khráp', kana: 'ジュー カン マイ ナ クラップ', en: 'See you again!', jp: 'またね！', emoji: '👋', tip: 'joe kan mài = "see you again" — perfect for happy goodbyes! 😊' },
          { thai: 'บ๊ายบายครับ', roman: 'báai-baai khráp', kana: 'バーイバーイ クラップ', en: 'Bye-bye!', jp: 'バイバイ！', emoji: '👋' },
          { thai: 'ปีหน้าเจอกันนะครับ', roman: 'pii-nâa joe kan ná khráp', kana: 'ピーナー ジュー カン ナ クラップ', en: 'See you next year!', jp: '来年また会おうね！', emoji: '📅' },
        ],
      },
    ],
    call: {
      label: 'Bless Pâa!',
      blurb: 'Pour scented water on Auntie\'s hands for a Songkran blessing — then splash a little fun!',
      homeEmoji: '💦🙏',
      personaName: 'Pâa', personaThai: 'ป้า', personaRole: 'your auntie', personaEmoji: '👩', personaPlace: 'Songkran at home 💦',
      steps: [
        { yaa: { thai: 'หลานจ๋า สุขสันต์วันสงกรานต์นะ!', roman: 'lǎan jǎa sùk-sǎn wan sǒng-kraan ná!', en: 'Sweetie, Happy Songkran!', jp: 'かわいい子、ハッピーソンクラーン！' },
          replies: [
            { thai: 'สุขสันต์วันสงกรานต์ครับป้า', roman: 'sùk-sǎn wan sǒng-kraan khráp pâa', kana: 'スックサン ワン ソンクラーン クラップ パー', en: 'Happy Songkran, Auntie!', emoji: '🎉' },
          ] },
        { yaa: { thai: 'มารดน้ำขอพรป้าหน่อยไหมจ๊ะ', roman: 'maa rót náam khǎw phawn pâa nòi mǎi já', en: 'Would you like to pour water and ask for my blessing?', jp: '水をかけておばさんにおめぐみをお願いする？' },
          replies: [
            { thai: 'ครับ ผมอยากรดน้ำครับ', roman: 'khráp phǒm yàak rót náam khráp', kana: 'クラップ ポム ヤーク ロット ナーム クラップ', en: 'Yes, I want to pour water!', emoji: '🙏' },
            { thai: 'ครับ ขอรดน้ำขอพรหน่อยนะครับ', roman: 'khráp khǎw rót náam khǎw phawn nòi ná khráp', kana: 'クラップ コー ロット ナーム コー ポーン ノイ ナ クラップ', en: 'Yes, may I pour water for a blessing, please?', emoji: '✨', bonus: true },
          ] },
        { yaa: { thai: 'ดีจ้ะ เทน้ำลงบนมือป้าเบาๆ นะ', roman: 'dii jâ thee náam long bon mue pâa bao-bao ná', en: 'Good — pour the water gently onto my hands.', jp: 'いいよ、おばさんの手にそっと水をかけてね' },
          replies: [
            { thai: 'ค่อยๆ นะครับ', roman: 'khâwi-khâwi ná khráp', kana: 'コイコイ ナ クラップ', en: 'Gently now!', emoji: '💧' },
            { thai: 'ขอให้ป้าสุขภาพดีครับ', roman: 'khǎw hâi pâa sùk-khà-phâap dii khráp', kana: 'コー ハイ パー スッカパープ ディー クラップ', en: 'I wish you good health, Auntie!', emoji: '💪', bonus: true },
          ] },
        { yaa: { thai: 'ขอบใจจ้ะ ขอให้หลานโชคดี เรียนเก่งนะ', roman: 'khàwp-jai jâ khǎw hâi lǎan chôok-dii rian kèng ná', en: 'Thank you! I bless you with good luck and great studies.', jp: 'ありがとう！幸運とお勉強がよくできるようにね' },
          replies: [
            { thai: 'สาธุครับ ขอบคุณครับ', roman: 'sǎa-thú khráp khàwp-khun khráp', kana: 'サートゥ クラップ コープクン クラップ', en: 'Amen, thank you!', emoji: '🙏' },
            { thai: 'ผมรักคุณป้ามากเลยครับ', roman: 'phǒm rák khun-pâa mâak loei khráp', kana: 'ポム ラック クンパー マーク ルーイ クラップ', en: 'I love you so much, Auntie!', emoji: '🥰', bonus: true },
          ] },
        { yaa: { thai: 'ทีนี้มาเล่นน้ำกันไหมจ๊ะ ป้ามีปืนฉีดน้ำด้วยนะ', roman: 'thii-níi maa lên náam kan mǎi já pâa mii puen chìit náam dûai ná', en: 'Now shall we play in the water? I have a water gun too!', jp: 'じゃあ水あそびしようか？おばさんも水でっぽう持ってるよ！' },
          replies: [
            { thai: 'เล่นเลยครับ!', roman: 'lên loei khráp!', kana: 'レン ルーイ クラップ', en: 'Let\'s play!', emoji: '💦' },
            { thai: 'ระวังนะครับ ผมจะสาดน้ำแล้ว!', roman: 'rá-wang ná khráp phǒm jà sàat náam láew!', kana: 'ラワン ナ クラップ ポム ジャ サート ナーム レーオ', en: 'Watch out, I\'m going to splash!', emoji: '🌊', bonus: true },
          ] },
        { yaa: { thai: 'โอ๊ย เปียกหมดเลย! สนุกจังเลยนะหลาน', roman: 'óoi pìak mòt loei! sà-nùk jang loei ná lǎan', en: 'Oh, I\'m all wet! This is so much fun, sweetie!', jp: 'きゃー、びしょびしょ！すごく楽しいね！' },
          replies: [
            { thai: 'สนุกมากเลยครับป้า', roman: 'sà-nùk mâak loei khráp pâa', kana: 'サヌック マーク ルーイ クラップ パー', en: 'So much fun, Auntie!', emoji: '😆' },
            { thai: 'เย็นจังเลย อยากเล่นอีกครับ', roman: 'yen jang loei yàak lên ìik khráp', kana: 'イェン ジャン ルーイ ヤーク レン イーク クラップ', en: 'So refreshing — I want to play again!', emoji: '🧊', bonus: true },
          ] },
        { yaa: { thai: 'พักก่อนนะ มากินไอติมกับป้า แล้วปีหน้าเจอกันใหม่นะ', roman: 'phák kàwn ná maa kin ai-tim kàp pâa láew pii-nâa joe kan mài ná', en: 'Let\'s rest — come eat ice cream with me, and see you again next year!', jp: 'ちょっと休もう、おばさんとアイス食べよう、来年また会おうね！' },
          replies: [
            { thai: 'ขอบคุณมากครับป้า ปีหน้าเจอกันนะครับ', roman: 'khàwp-khun mâak khráp pâa pii-nâa joe kan ná khráp', kana: 'コープクン マーク クラップ パー ピーナー ジュー カン ナ クラップ', en: 'Thank you so much, Auntie — see you next year!', emoji: '👋' },
          ] },
      ],
    },
    badges: [
      { id: 'sk-newyear', emoji: '🎉', name: 'New Year Cheer', desc: 'Learned all the Happy Songkran greetings!', when: { quest: 'sk-happy', need: 'learn' } },
      { id: 'sk-splash', emoji: '💦', name: 'Splash Master', desc: 'Finished the whole Water Fight quest!', when: { quest: 'water', need: 'complete' } },
      { id: 'sk-bless', emoji: '🙏', name: 'Kind Blessing', desc: 'Learned how to bless the grown-ups!', when: { quest: 'bless', need: 'learn' } },
      { id: 'sk-festival', emoji: '🎶', name: 'Festival Star', desc: 'Mastered all the Festival Fun phrases!', when: { quest: 'skfun', need: 'listen2' } },
      { id: 'sk-kind', emoji: '😊', name: 'Kind & Careful', desc: 'Learned to play safe and kind!', when: { quest: 'skcare', need: 'learn' } },
      { id: 'sk-call', emoji: '👩', name: 'Auntie\'s Blessing', desc: 'Blessed Pâa with water on Songkran!', when: { call: true } },
      { id: 'sk-legend', emoji: '🏆', name: 'Songkran Champion', desc: 'Finished every single quest!', when: { allQuests: 'learn' } },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Mission: Beach Day — sun, sea and sandcastles. Finale is a
  // beach day with your big cousin Phîi-Nam.
  // ═══════════════════════════════════════════════════════════
  {
    id: 'beach', title: 'Mission: Beach Day', emoji: '🏖️', color: 'gold',
    blurb: 'Sun, sea and sandcastles — splash into Thai at the beach! 🌊',
    quests: [
      { id: 'gobeach', num: 1, title: 'To the Beach!', emoji: '🚗', color: 'teal',
        intro: 'The car is packed and the sea is waiting! Roll down the window and feel that salty wind. 🌬️',
        phrases: [
          { thai: 'ไปทะเลกัน', roman: 'pai thá-lee kan', kana: 'パイ タレー ガン', en: 'Let\'s go to the sea!', jp: '海に行こう！', emoji: '🚗', tip: 'kan at the end means "let\'s do it together"! 🤝' },
          { thai: 'ทะเลสวยจัง', roman: 'thá-lee sǔai jang', kana: 'タレー スワイ ジャン', en: 'The sea is so pretty!', jp: '海すごくきれい！', emoji: '🌊' },
          { thai: 'ร้อนจังเลย', roman: 'ráwn jang loei', kana: 'ローン ジャン ルーイ', en: 'It\'s so hot!', jp: 'すごく暑い！', emoji: '🥵', tip: 'jang loei is like saying "soooo much!" — kids use it all the time! 🔥' },
          { thai: 'ตื่นเต้นจัง', roman: 'tùen-tên jang', kana: 'トゥーンテン ジャン', en: 'I\'m so excited!', jp: 'すごくワクワクする！', emoji: '🤩' },
          { thai: 'น้ำทะเล', roman: 'náam thá-lee', kana: 'ナーム タレー', en: 'sea water', jp: '海の水', emoji: '💧' },
          { thai: 'ทราย', roman: 'saai', kana: 'サーイ', en: 'sand', jp: '砂', emoji: '🏖️' },
          { thai: 'ผมเห็นทะเลแล้วครับ', roman: 'phǒm hěn thá-lee láew khráp', kana: 'ポム ヘン タレー レーオ クラップ', en: 'I can see the sea now!', jp: '海が見えたよ！', emoji: '👀' },
        ] },
      { id: 'swim', num: 2, title: 'In the Water', emoji: '🏊', color: 'teal',
        intro: 'Splash! The waves are rolling in. Time to jump in and play! 🌊',
        phrases: [
          { thai: 'ว่ายน้ำ', roman: 'wâai-náam', kana: 'ワーイナーム', en: 'to swim', jp: '泳ぐ', emoji: '🏊' },
          { thai: 'เล่นน้ำ', roman: 'lên-náam', kana: 'レンナーム', en: 'to play in the water', jp: '水遊びする', emoji: '💦' },
          { thai: 'คลื่น', roman: 'khlûen', kana: 'クルーン', en: 'waves', jp: '波', emoji: '🌊' },
          { thai: 'ลอยน้ำ', roman: 'loi-náam', kana: 'ローイナーム', en: 'to float', jp: '浮かぶ', emoji: '🛟' },
          { thai: 'เย็นจังเลย', roman: 'yen jang loei', kana: 'イェン ジャン ルーイ', en: 'So cool and refreshing!', jp: 'すごく涼しい！', emoji: '😎' },
          { thai: 'ระวังคลื่นนะครับ', roman: 'rá-wang khlûen ná khráp', kana: 'ラワン クルーン ナ クラップ', en: 'Watch out for the waves!', jp: '波に気をつけてね！', emoji: '⚠️', tip: 'rá-wang means "be careful" — a super useful word! 🙌' },
          { thai: 'สนุกจังเลย', roman: 'sà-nùk jang loei', kana: 'サヌック ジャン ルーイ', en: 'This is so much fun!', jp: 'すごく楽しい！', emoji: '🤸' },
        ] },
      { id: 'sand', num: 3, title: 'Sand & Shells', emoji: '🏖️', color: 'gold',
        intro: 'Grab your bucket and spade! Let\'s build the biggest castle on the beach. 🏰',
        phrases: [
          { thai: 'ก่อปราสาททราย', roman: 'kàw praa-sàat saai', kana: 'ゴー プラサート サーイ', en: 'build a sandcastle', jp: '砂のお城を作る', emoji: '🏰', tip: 'praa-sàat means "castle" — just like a real king\'s palace! 👑' },
          { thai: 'ขุดทราย', roman: 'khùt saai', kana: 'クット サーイ', en: 'dig in the sand', jp: '砂を掘る', emoji: '⛏️' },
          { thai: 'เปลือกหอย', roman: 'plùeak hǒi', kana: 'プルアク ホイ', en: 'seashell', jp: '貝がら', emoji: '🐚' },
          { thai: 'เก็บเปลือกหอย', roman: 'kèp plùeak hǒi', kana: 'ゲップ プルアク ホイ', en: 'collect seashells', jp: '貝がらを集める', emoji: '🐚' },
          { thai: 'สวยจัง', roman: 'sǔai jang', kana: 'スワイ ジャン', en: 'So beautiful!', jp: 'きれい！', emoji: '✨' },
          { thai: 'ดูสิครับ', roman: 'duu sì khráp', kana: 'ドゥー シ クラップ', en: 'Look at this!', jp: '見て！', emoji: '👉', tip: 'duu sì is how kids say "hey, look!" to show off something cool. 😄' },
          { thai: 'ผมทำเองครับ', roman: 'phǒm tham eeng khráp', kana: 'ポム タム エーン クラップ', en: 'I made it myself!', jp: '自分で作ったよ！', emoji: '😏' },
        ] },
      { id: 'beachfood', num: 4, title: 'Beach Snacks', emoji: '🥥', color: 'orange',
        intro: 'Playing makes you hungry! Time for yummy beach treats. 🍦',
        phrases: [
          { thai: 'มะพร้าว', roman: 'má-práao', kana: 'マプラーオ', en: 'coconut', jp: 'ココナッツ', emoji: '🥥' },
          { thai: 'น้ำมะพร้าว', roman: 'náam má-práao', kana: 'ナーム マプラーオ', en: 'coconut water', jp: 'ココナッツジュース', emoji: '🥥', tip: 'You drink it with a straw right out of the coconut — so cool! 🥤' },
          { thai: 'ไอติม', roman: 'ai-tim', kana: 'アイティム', en: 'ice cream', jp: 'アイスクリーム', emoji: '🍦' },
          { thai: 'ลูกชิ้นปิ้ง', roman: 'lûuk-chín pîng', kana: 'ルークチン ピン', en: 'grilled meatballs', jp: '焼き団子', emoji: '🍢' },
          { thai: 'น้ำเย็นๆ', roman: 'náam yen-yen', kana: 'ナーム イェンイェン', en: 'cold water', jp: '冷たいお水', emoji: '🧊' },
          { thai: 'หิวจัง', roman: 'hǐw jang', kana: 'ヒウ ジャン', en: 'I\'m so hungry!', jp: 'すごくお腹すいた！', emoji: '🤤' },
          { thai: 'อร่อยมาก', roman: 'à-ròi mâak', kana: 'アロイ マーク', en: 'SO delicious!', jp: 'すごくおいしい！', emoji: '😋' },
        ] },
      { id: 'beachsafe', num: 5, title: 'Sun & Safety', emoji: '☀️', color: 'red',
        intro: 'The sun is strong out here! Let\'s stay safe and take good care of ourselves. 🧴',
        phrases: [
          { thai: 'ครีมกันแดด', roman: 'khriim kan-dàet', kana: 'クリーム ガンデート', en: 'sunscreen', jp: '日焼け止め', emoji: '🧴', tip: 'kan-dàet means "blocks the sun" — put it on before you play! ☀️' },
          { thai: 'แดดแรงจัง', roman: 'dàet raeng jang', kana: 'デート レーン ジャン', en: 'The sun is so strong!', jp: '日差しが強い！', emoji: '🔆' },
          { thai: 'เหนื่อยแล้วครับ', roman: 'nùeai láew khráp', kana: 'ヌアイ レーオ クラップ', en: 'I\'m tired now.', jp: 'もう疲れたよ。', emoji: '😮‍💨' },
          { thai: 'ขอน้ำหน่อยครับ', roman: 'khǎw náam nòi khráp', kana: 'コー ナーム ノイ クラップ', en: 'May I have some water?', jp: 'お水ちょうだい。', emoji: '🥤', tip: 'khǎw ... nòi is the polite way to ask for something. 🙏' },
          { thai: 'ระวังนะครับ', roman: 'rá-wang ná khráp', kana: 'ラワン ナ クラップ', en: 'Be careful!', jp: '気をつけてね！', emoji: '⚠️' },
          { thai: 'ผมโอเคครับ', roman: 'phǒm oo-khee khráp', kana: 'ポム オーケー クラップ', en: 'I\'m okay!', jp: 'ぼく大丈夫だよ！', emoji: '👍' },
          { thai: 'พักก่อนนะครับ', roman: 'phák kàwn ná khráp', kana: 'パック コーン ナ クラップ', en: 'Let\'s take a rest first.', jp: 'ちょっと休もうね。', emoji: '😌' },
        ] },
      { id: 'beachbye', num: 6, title: 'Bye Beach!', emoji: '👋', color: 'purple',
        intro: 'What an amazing day! Time to wave goodbye to the sea. 🌅',
        phrases: [
          { thai: 'สนุกมากเลยวันนี้', roman: 'sà-nùk mâak loei wan-níi', kana: 'サヌック マーク ルーイ ワンニー', en: 'Today was so much fun!', jp: '今日すごく楽しかった！', emoji: '🥳' },
          { thai: 'อยากมาอีก', roman: 'yàak maa ìik', kana: 'ヤーク マー イーク', en: 'I want to come again!', jp: 'また来たい！', emoji: '🔁', tip: 'yàak means "want to" — add a verb after it to say what you want to do! 💭' },
          { thai: 'ชอบทะเลมากเลย', roman: 'châwp thá-lee mâak loei', kana: 'チョープ タレー マーク ルーイ', en: 'I really love the sea!', jp: '海が大好き！', emoji: '🌊' },
          { thai: 'ขอบคุณครับ', roman: 'khàwp-khun khráp', kana: 'コープクン クラップ', en: 'Thank you!', jp: 'ありがとう！', emoji: '🙏' },
          { thai: 'รักนะ', roman: 'rák ná', kana: 'ラック ナ', en: 'Love you!', jp: '大好きだよ！', emoji: '❤️' },
          { thai: 'กลับบ้านกัน', roman: 'klàp bâan kan', kana: 'グラップ バーン ガン', en: 'Let\'s go home.', jp: 'おうちに帰ろう。', emoji: '🏠' },
          { thai: 'บายทะเล', roman: 'baai thá-lee', kana: 'バーイ タレー', en: 'Bye, sea!', jp: 'バイバイ、海！', emoji: '👋' },
        ] },
    ],
    call: {
      label: 'Beach with Phîi-Nam!', blurb: 'Spend a sunny beach day with your big cousin Phîi-Nam!', homeEmoji: '🏖️🌊',
      personaName: 'Phîi-Nam', personaThai: 'พี่น้ำ', personaRole: 'your big cousin', personaEmoji: '🧑', personaPlace: 'the beach 🏖️',
      steps: [
        { yaa: { thai: 'มาแล้วเหรอ! ทะเลสวยมากเลยวันนี้', roman: 'maa láew rǒe! thá-lee sǔai mâak loei wan-níi', en: 'You\'re here! The sea is so pretty today!', jp: '来たんだ！今日は海がすごくきれいだよ！' },
          replies: [
            { thai: 'สวัสดีครับพี่น้ำ ตื่นเต้นจัง', roman: 'sà-wàt-dii khráp phîi-náam, tùen-tên jang', kana: 'サワッディー クラップ ピーナーム トゥーンテン ジャン', en: 'Hi Phîi-Nam, I\'m so excited!', emoji: '🤩' },
          ] },
        { yaa: { thai: 'ไปว่ายน้ำกันไหม? น้ำกำลังดีเลย', roman: 'pai wâai-náam kan mǎi? náam kam-lang dii loei', en: 'Want to go swimming? The water is just right!', jp: '泳ぎに行く？水がちょうどいいよ！' },
          replies: [
            { thai: 'ไปครับ ผมชอบเล่นน้ำ', roman: 'pai khráp, phǒm châwp lên-náam', kana: 'パイ クラップ ポム チョープ レンナーム', en: 'Yes! I love playing in the water!', emoji: '🏊' },
            { thai: 'ไปครับ แต่ผมว่ายน้ำไม่เก่งนะครับ', roman: 'pai khráp, tàe phǒm wâai-náam mâi kèng ná khráp', kana: 'パイ クラップ テ ポム ワーイナーム マイ ゲン ナ クラップ', en: 'Yes, but I\'m not a strong swimmer!', emoji: '😅', bonus: true },
          ] },
        { yaa: { thai: 'ระวังคลื่นนะ! คลื่นใหญ่มาแล้ว', roman: 'rá-wang khlûen ná! khlûen yài maa láew', en: 'Watch out for the wave! A big one is coming!', jp: '波に気をつけて！大きいのが来たよ！' },
          replies: [
            { thai: 'โอ้โห คลื่นใหญ่จัง', roman: 'ôo-hǒo, khlûen yài jang', kana: 'オーホー クルーン ヤイ ジャン', en: 'Whoa, what a big wave!', emoji: '🌊' },
            { thai: 'ไม่เป็นไรครับ ผมโอเค สนุกจังเลย', roman: 'mâi pen rai khráp, phǒm oo-khee, sà-nùk jang loei', kana: 'マイ ペン ライ クラップ ポム オーケー サヌック ジャン ルーイ', en: 'It\'s okay, I\'m fine — that was fun!', emoji: '🤸', bonus: true },
          ] },
        { yaa: { thai: 'มาก่อปราสาททรายกันดีกว่า', roman: 'maa kàw praa-sàat saai kan dii kwàa', en: 'Let\'s build a sandcastle instead!', jp: '砂のお城を作ろうよ！' },
          replies: [
            { thai: 'ดีครับ! ผมจะขุดทราย', roman: 'dii khráp! phǒm jà khùt saai', kana: 'ディー クラップ ポム ジャ クット サーイ', en: 'Great! I\'ll dig the sand!', emoji: '⛏️' },
            { thai: 'ดูสิครับ ผมเก็บเปลือกหอยสวยๆ มาด้วย', roman: 'duu sì khráp, phǒm kèp plùeak hǒi sǔai-sǔai maa dûai', kana: 'ドゥー シ クラップ ポム ゲップ プルアク ホイ スワイスワイ マー ドゥアイ', en: 'Look, I collected pretty shells too!', emoji: '🐚', bonus: true },
          ] },
        { yaa: { thai: 'เหนื่อยไหม? พี่ซื้อมะพร้าวกับไอติมมาให้', roman: 'nùeai mǎi? phîi súe má-práao kàp ai-tim maa hâi', en: 'Tired? I bought you coconut and ice cream!', jp: '疲れた？ココナッツとアイス買ってきたよ！' },
          replies: [
            { thai: 'ขอบคุณครับ! ผมหิวพอดีเลย', roman: 'khàwp-khun khráp! phǒm hǐw phaw-dii loei', kana: 'コープクン クラップ ポム ヒウ ポーディー ルーイ', en: 'Thank you! I\'m hungry right now!', emoji: '🥥' },
            { thai: 'ขอน้ำมะพร้าวก่อนนะครับ อร่อยมาก', roman: 'khǎw náam má-práao kàwn ná khráp, à-ròi mâak', kana: 'コー ナーム マプラーオ コーン ナ クラップ アロイ マーク', en: 'Coconut water first please — so delicious!', emoji: '😋', bonus: true },
          ] },
        { yaa: { thai: 'อิ่มแล้ว มาถ่ายรูปเก็บไว้กันนะ', roman: 'ìm láew, maa thàai-rûup kèp wái kan ná', en: 'All full! Let\'s take a photo to remember this!', jp: 'お腹いっぱい！写真を撮ろうね！' },
          replies: [
            { thai: 'เหนื่อยแล้วครับ แต่สนุกมากเลยวันนี้', roman: 'nùeai láew khráp, tàe sà-nùk mâak loei wan-níi', kana: 'ヌアイ レーオ クラップ テ サヌック マーク ルーイ ワンニー', en: 'I\'m tired now, but today was so much fun!', emoji: '📸' },
          ] },
        { yaa: { thai: 'ถึงเวลากลับบ้านแล้ว เจอกันใหม่นะ', roman: 'thǔeng wee-laa klàp bâan láew, joe kan mài ná', en: 'It\'s time to go home now — see you again!', jp: 'もう帰る時間だね、また会おうね！' },
          replies: [
            { thai: 'บายทะเล! ขอบคุณครับพี่น้ำ รักนะ', roman: 'baai thá-lee! khàwp-khun khráp phîi-náam, rák ná', kana: 'バーイ タレー コープクン クラップ ピーナーム ラック ナ', en: 'Bye sea! Thank you Phîi-Nam, love you!', emoji: '👋' },
          ] },
      ],
    },
    badges: [
      { id: 'beach-road', emoji: '🚗', name: 'Sea Seeker', desc: 'Learned all the road-trip-to-the-sea phrases!', when: { quest: 'gobeach', need: 'learn' } },
      { id: 'beach-splash', emoji: '🌊', name: 'Wave Rider', desc: 'Completed all the swimming phrases!', when: { quest: 'swim', need: 'complete' } },
      { id: 'beach-castle', emoji: '🏰', name: 'Castle Builder', desc: 'Learned how to build sandcastles in Thai!', when: { quest: 'sand', need: 'learn' } },
      { id: 'beach-snack', emoji: '🥥', name: 'Coconut Kid', desc: 'Mastered the yummy beach snack phrases!', when: { quest: 'beachfood', need: 'listen2' } },
      { id: 'beach-sun', emoji: '☀️', name: 'Sun Smart', desc: 'Learned how to stay safe in the sun!', when: { quest: 'beachsafe', need: 'learn' } },
      { id: 'beach-call', emoji: '🧑', name: 'Cousin\'s Buddy', desc: 'Spent a whole beach day with Phîi-Nam!', when: { call: true } },
      { id: 'beach-legend', emoji: '🏖️', name: 'Beach Day Champ', desc: 'Finished every single quest!', when: { allQuests: 'learn' } },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Mission: Zoo Day — meet amazing animals and learn their names.
  // Finale is a zoo day with Dad (พ่อ).
  // ═══════════════════════════════════════════════════════════
  {
    id: 'zoo', title: 'Mission: Zoo Day', emoji: '🐘', color: 'green',
    blurb: 'Spend a whole day at the zoo and meet the most amazing animals in Thai!',
    quests: [
      { id: 'gozoo', num: 1, title: 'To the Zoo!', emoji: '🎟️', color: 'teal',
        intro: 'Today is zoo day and you can hardly sit still! Grab your ticket and let\'s find some animals.',
        phrases: [
          { thai: 'ไปสวนสัตว์กัน', roman: 'pai sǔan-sàt kan', kana: 'パイ スアンサット ガン', en: 'Let\'s go to the zoo!', jp: 'どうぶつえんに いこう', emoji: '🎟️', tip: 'sǔan-sàt means "zoo" — sǔan is garden, sàt is animal! 🐾' },
          { thai: 'อยากดูสัตว์', roman: 'yàak duu sàt', kana: 'ヤーク ドゥー サット', en: 'I want to see the animals', jp: 'どうぶつ みたい', emoji: '🐾' },
          { thai: 'ตื่นเต้นจัง', roman: 'tùen-tên jang', kana: 'トゥーンテン ジャン', en: 'So exciting!', jp: 'わくわくする', emoji: '🤩', tip: 'Add jang to say "so much!" — perfect when you feel super excited. ✨' },
          { thai: 'สัตว์อยู่ไหน', roman: 'sàt yùu nǎi', kana: 'サット ユー ナイ', en: 'Where are the animals?', jp: 'どうぶつは どこ', emoji: '🔍' },
          { thai: 'เดินไปทางไหนครับ', roman: 'doen pai thaang nǎi khráp', kana: 'ドゥーン パイ ターン ナイ クラップ', en: 'Which way do we walk?', jp: 'どっちに あるくの', emoji: '🗺️' },
          { thai: 'ไปกันเลย', roman: 'pai kan loei', kana: 'パイ ガン ルーイ', en: 'Let\'s go!', jp: 'さあ いこう', emoji: '🏃' },
          { thai: 'ผมพร้อมแล้วครับ', roman: 'phǒm phráwm láew khráp', kana: 'ポム プローム レーオ クラップ', en: 'I\'m ready!', jp: 'ぼく じゅんびできたよ', emoji: '✅' },
        ] },
      { id: 'bigani', num: 2, title: 'Big Animals', emoji: '🦁', color: 'orange',
        intro: 'Whoa, look how HUGE they are! These are the biggest animals in the whole zoo.',
        phrases: [
          { thai: 'ช้าง', roman: 'cháang', kana: 'チャーン', en: 'Elephant', jp: 'ぞう', emoji: '🐘', tip: 'The elephant is Thailand\'s most special animal — you\'ll see it everywhere! 🐘' },
          { thai: 'เสือ', roman: 'sǔea', kana: 'スア', en: 'Tiger', jp: 'とら', emoji: '🐅' },
          { thai: 'สิงโต', roman: 'sǐng-too', kana: 'シングトー', en: 'Lion', jp: 'ライオン', emoji: '🦁' },
          { thai: 'ยีราฟ', roman: 'yii-râap', kana: 'イーラープ', en: 'Giraffe', jp: 'キリン', emoji: '🦒' },
          { thai: 'ม้าลาย', roman: 'máa-laai', kana: 'マーラーイ', en: 'Zebra', jp: 'しまうま', emoji: '🦓' },
          { thai: 'หมี', roman: 'mǐi', kana: 'ミー', en: 'Bear', jp: 'くま', emoji: '🐻' },
          { thai: 'จระเข้', roman: 'jà-rá-khêe', kana: 'ジャラケー', en: 'Crocodile', jp: 'ワニ', emoji: '🐊', tip: 'Careful — jà-rá-khêe has big teeth! Watch from far away. 🐊' },
        ] },
      { id: 'smallani', num: 3, title: 'More Animals', emoji: '🐒', color: 'green',
        intro: 'Not all animals are giant! Some are small, fast, and super funny to watch.',
        phrases: [
          { thai: 'ลิง', roman: 'ling', kana: 'リング', en: 'Monkey', jp: 'さる', emoji: '🐒' },
          { thai: 'นก', roman: 'nók', kana: 'ノック', en: 'Bird', jp: 'とり', emoji: '🐦' },
          { thai: 'งู', roman: 'nguu', kana: 'グー', en: 'Snake', jp: 'へび', emoji: '🐍', tip: 'nguu starts with a tricky "ng" sound — hum like an airplane: ngggg! ✈️' },
          { thai: 'เต่า', roman: 'tào', kana: 'タオ', en: 'Turtle', jp: 'かめ', emoji: '🐢' },
          { thai: 'กระต่าย', roman: 'krà-tàai', kana: 'グラタイ', en: 'Rabbit', jp: 'うさぎ', emoji: '🐰' },
          { thai: 'เพนกวิน', roman: 'pheen-kwin', kana: 'ペングウィン', en: 'Penguin', jp: 'ペンギン', emoji: '🐧' },
          { thai: 'ฮิปโป', roman: 'híp-poo', kana: 'ヒップポー', en: 'Hippo', jp: 'カバ', emoji: '🦛' },
        ] },
      { id: 'zoolook', num: 4, title: 'Look at That!', emoji: '👀', color: 'purple',
        intro: 'Something amazing is right in front of you! Point, ask, and snap a photo.',
        phrases: [
          { thai: 'ดูสิครับ', roman: 'duu sì khráp', kana: 'ドゥー シ クラップ', en: 'Look!', jp: 'みて', emoji: '👀', tip: 'duu sì is a friendly way to say "hey, look at this!" 👉' },
          { thai: 'นั่นตัวอะไรครับ', roman: 'nân tua à-rai khráp', kana: 'ナン トゥア アライ クラップ', en: 'What animal is that?', jp: 'あれは なんの どうぶつ', emoji: '❓' },
          { thai: 'น่ารักจัง', roman: 'nâa-rák jang', kana: 'ナーラック ジャン', en: 'So cute!', jp: 'かわいい', emoji: '🥰' },
          { thai: 'ตัวใหญ่จัง', roman: 'tua yài jang', kana: 'トゥア ヤイ ジャン', en: 'So big!', jp: 'おおきい', emoji: '🐘' },
          { thai: 'ถ่ายรูปกันครับ', roman: 'thàai rûup kan khráp', kana: 'ターイ ループ ガン クラップ', en: 'Let\'s take a photo!', jp: 'しゃしん とろう', emoji: '📸', tip: 'thàai rûup means "take a photo" — say cheese! 📸' },
          { thai: 'ผมชอบช้างครับ', roman: 'phǒm châwp cháang khráp', kana: 'ポム チョープ チャーン クラップ', en: 'I like elephants', jp: 'ぼく ぞうが すき', emoji: '🐘' },
          { thai: 'สัตว์ตัวนั้นกินอะไรครับ', roman: 'sàt tua nán kin à-rai khráp', kana: 'サット トゥア ナン ギン アライ クラップ', en: 'What does that animal eat?', jp: 'あの どうぶつ なに たべるの', emoji: '🍽️' },
        ] },
      { id: 'zooneed', num: 5, title: 'On the Walk', emoji: '🙋', color: 'gold',
        intro: 'The zoo is big and your legs are getting tired! Time to ask for what you need.',
        phrases: [
          { thai: 'เดินเยอะจังเลย', roman: 'doen yóe jang loei', kana: 'ドゥーン ユ ジャン ルーイ', en: 'So much walking!', jp: 'たくさん あるいたね', emoji: '🚶', tip: 'yóe means "a lot" — use it for lots of anything! 👣' },
          { thai: 'เหนื่อยแล้วครับ', roman: 'nùeai láew khráp', kana: 'ヌアイ レーオ クラップ', en: 'I\'m tired', jp: 'つかれた', emoji: '😮‍💨' },
          { thai: 'หิวแล้วครับ', roman: 'hǐw láew khráp', kana: 'ヒウ レーオ クラップ', en: 'I\'m hungry', jp: 'おなか すいた', emoji: '🍙' },
          { thai: 'ขอน้ำหน่อยครับ', roman: 'khǎw náam nòi khráp', kana: 'コー ナーム ノイ クラップ', en: 'Some water please', jp: 'みず ちょうだい', emoji: '💧', tip: 'khǎw ... nòi is the magic way to politely ask for something. 🙏' },
          { thai: 'ห้องน้ำอยู่ไหนครับ', roman: 'hông-náam yùu nǎi khráp', kana: 'ホーンナーム ユー ナイ クラップ', en: 'Where is the bathroom?', jp: 'トイレは どこ', emoji: '🚻' },
          { thai: 'กลัวนิดหน่อยครับ', roman: 'klua nít-nòi khráp', kana: 'グルア ニットノイ クラップ', en: 'I\'m a little scared', jp: 'ちょっと こわい', emoji: '😨', tip: 'It\'s okay to feel scared — tell Dad and hold his hand. You\'re brave! 💪' },
          { thai: 'ดูอีกตัวได้ไหมครับ', roman: 'duu ìik tua dâai mǎi khráp', kana: 'ドゥー イーク トゥア ダイ マイ クラップ', en: 'Can we see one more?', jp: 'もう いっぴき みていい', emoji: '🐾' },
        ] },
      { id: 'zoobye', num: 6, title: 'Best Zoo Day!', emoji: '👋', color: 'pink',
        intro: 'What an awesome day! Tell everyone how much fun you had before you head home.',
        phrases: [
          { thai: 'สนุกมากเลยวันนี้', roman: 'sà-nùk mâak loei wan-níi', kana: 'サヌック マーク ルーイ ワンニー', en: 'So fun today!', jp: 'きょう すごく たのしかった', emoji: '🎉' },
          { thai: 'ชอบสวนสัตว์มากเลย', roman: 'châwp sǔan-sàt mâak loei', kana: 'チョープ スアンサット マーク ルーイ', en: 'I love the zoo!', jp: 'どうぶつえん だいすき', emoji: '🐘' },
          { thai: 'อยากมาอีก', roman: 'yàak maa ìik', kana: 'ヤーク マー イーク', en: 'I want to come again', jp: 'また きたい', emoji: '🔁', tip: 'maa ìik means "come again" — say it so they take you next time! 😄' },
          { thai: 'ขอบคุณครับ', roman: 'khàwp-khun khráp', kana: 'コープクン クラップ', en: 'Thank you', jp: 'ありがとう', emoji: '🙏', tip: 'A wai with khàwp-khun khráp is the kindest way to say thanks. 🙏' },
          { thai: 'รักนะ', roman: 'rák ná', kana: 'ラック ナ', en: 'Love you', jp: 'だいすき', emoji: '❤️' },
          { thai: 'กลับบ้านกัน', roman: 'klàp bâan kan', kana: 'グラップ バーン ガン', en: 'Let\'s go home', jp: 'おうちに かえろう', emoji: '🏠' },
          { thai: 'วันนี้ดีที่สุดเลยครับ', roman: 'wan-níi dii thîi-sùt loei khráp', kana: 'ワンニー ディー ティースット ルーイ クラップ', en: 'Today was the best!', jp: 'きょうは さいこう', emoji: '🌟' },
        ] },
    ],
    call: {
      label: 'Zoo with Phâw!', blurb: 'Spend a whole zoo day with Dad and chat all in Thai!', homeEmoji: '🐘🎟️',
      personaName: 'Phâw', personaThai: 'พ่อ', personaRole: 'Dad', personaEmoji: '👨', personaPlace: 'the zoo 🐘',
      steps: [
        { yaa: { thai: 'ถึงสวนสัตว์แล้ว พร้อมไหมลูก', roman: 'thǔeng sǔan-sàt láew, phráwm mǎi lûuk', en: 'We\'re at the zoo! Ready, kiddo?', jp: 'どうぶつえんに ついたよ。じゅんびはいい？' },
          replies: [
            { thai: 'พร้อมแล้วครับ ตื่นเต้นจังครับ', roman: 'phráwm láew khráp, tùen-tên jang khráp', kana: 'プローム レーオ クラップ、トゥーンテン ジャン クラップ', en: 'Ready! So excited!', emoji: '🤩' },
          ] },
        { yaa: { thai: 'ดูสิ ช้างตัวใหญ่มากเลย', roman: 'duu sì, cháang tua yài mâak loei', en: 'Look! The elephant is so big!', jp: 'みて、ぞうが すごく おおきい' },
          replies: [
            { thai: 'ตัวใหญ่จังเลยครับ', roman: 'tua yài jang loei khráp', kana: 'トゥア ヤイ ジャン クラップ', en: 'So big!', emoji: '🐘' },
            { thai: 'ผมชอบช้างมากเลยครับ', roman: 'phǒm châwp cháang mâak loei khráp', kana: 'ポム チョープ チャーン マーク クラップ', en: 'I really like elephants!', emoji: '🐘', bonus: true },
          ] },
        { yaa: { thai: 'ตรงนั้นมีลิงด้วยนะ', roman: 'trong nán mii ling dûai ná', en: 'There are monkeys over there too!', jp: 'あそこに さるも いるよ' },
          replies: [
            { thai: 'ลิงน่ารักจังครับ', roman: 'ling nâa-rák jang khráp', kana: 'リング ナーラック ジャン クラップ', en: 'The monkeys are so cute!', emoji: '🐒' },
            { thai: 'นั่นตัวอะไรครับ', roman: 'nân tua à-rai khráp', kana: 'ナン トゥア アライ クラップ', en: 'What animal is that?', emoji: '❓', bonus: true },
          ] },
        { yaa: { thai: 'น่ารักใช่ไหม ถ่ายรูปกันไหม', roman: 'nâa-rák châi mǎi, thàai rûup kan mǎi', en: 'Cute, right? Shall we take a photo?', jp: 'かわいいでしょ？しゃしん とる？' },
          replies: [
            { thai: 'ถ่ายรูปกันครับ', roman: 'thàai rûup kan khráp', kana: 'ターイ ループ ガン クラップ', en: 'Let\'s take a photo!', emoji: '📸' },
            { thai: 'น่ารักจังเลยครับ', roman: 'nâa-rák jang loei khráp', kana: 'ナーラック ジャン ルーイ クラップ', en: 'So cute!', emoji: '🥰', bonus: true },
          ] },
        { yaa: { thai: 'เดินมาเยอะแล้ว เหนื่อยไหมลูก', roman: 'doen maa yóe láew, nùeai mǎi lûuk', en: 'We\'ve walked a lot. Tired, kiddo?', jp: 'たくさん あるいたね。つかれた？' },
          replies: [
            { thai: 'เหนื่อยแล้วครับ ขอน้ำหน่อยครับ', roman: 'nùeai láew khráp, khǎw náam nòi khráp', kana: 'ヌアイ レーオ クラップ、コー ナーム ノイ クラップ', en: 'I\'m tired. Some water please.', emoji: '💧' },
            { thai: 'หิวด้วยครับ', roman: 'hǐw dûai khráp', kana: 'ヒウ ドゥアイ クラップ', en: 'I\'m hungry too!', emoji: '🍙', bonus: true },
          ] },
        { yaa: { thai: 'วันนี้สนุกไหมลูก', roman: 'wan-níi sà-nùk mǎi lûuk', en: 'Did you have fun today?', jp: 'きょうは たのしかった？' },
          replies: [
            { thai: 'สนุกมากเลยครับ ชอบสวนสัตว์มากเลยครับ', roman: 'sà-nùk mâak loei khráp, châwp sǔan-sàt mâak loei khráp', kana: 'サヌック マーク ルーイ クラップ、チョープ スアンサット マーク ルーイ クラップ', en: 'So much fun! I love the zoo!', emoji: '🎉' },
          ] },
        { yaa: { thai: 'ได้เวลากลับบ้านแล้วลูก', roman: 'dâai wee-laa klàp bâan láew lûuk', en: 'It\'s time to go home, kiddo.', jp: 'そろそろ おうちに かえる じかんだよ' },
          replies: [
            { thai: 'กลับบ้านกันครับ ขอบคุณครับ', roman: 'klàp bâan kan khráp, khàwp-khun khráp', kana: 'グラップ バーン ガン クラップ、コープクン クラップ', en: 'Let\'s go home. Thank you!', emoji: '🏠' },
          ] },
      ],
    },
    badges: [
      { id: 'zoo-ticket', emoji: '🎟️', name: 'Zoo Ticket', desc: 'Learned how to head off to the zoo!', when: { quest: 'gozoo', need: 'learn' } },
      { id: 'zoo-big', emoji: '🦁', name: 'Big Beast Boss', desc: 'Mastered every big animal name!', when: { quest: 'bigani', need: 'complete' } },
      { id: 'zoo-small', emoji: '🐒', name: 'Animal Friend', desc: 'Mastered all the small animals!', when: { quest: 'smallani', need: 'listen2' } },
      { id: 'zoo-look', emoji: '👀', name: 'Sharp Eyes', desc: 'Learned to point and ask about animals!', when: { quest: 'zoolook', need: 'learn' } },
      { id: 'zoo-walk', emoji: '🙋', name: 'Brave Walker', desc: 'Finished the whole long zoo walk!', when: { quest: 'zooneed', need: 'complete' } },
      { id: 'zoo-call', emoji: '👨', name: 'Zoo Day with Dad', desc: 'Did a whole zoo day with Phâw in Thai!', when: { call: true } },
      { id: 'zoo-legend', emoji: '🏆', name: 'Zoo Champion', desc: 'Finished every single quest!', when: { allQuests: 'learn' } },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Mission: Feeling Sick — being brave and telling grown-ups how
  // you feel, then visiting the doctor. Finale is a clinic visit
  // with the doctor (คุณหมอ).
  // ═══════════════════════════════════════════════════════════
  {
    id: 'doctor', title: 'Mission: Feeling Sick', emoji: '🤒', color: 'red',
    blurb: 'When your tummy hurts or you feel funny, being brave means telling a grown-up — let\'s learn how in Thai!',
    quests: [
      { id: 'notwell', num: 1, title: 'I Don\'t Feel Well', emoji: '🤒', color: 'red',
        intro: 'Uh oh, your body feels a little wobbly today. The bravest thing you can do is tell someone — let\'s learn how!',
        phrases: [
          { thai: 'ผมไม่สบายครับ', roman: 'phǒm mâi sà-baai khráp', kana: 'ポム マイ サバーイ クラップ', en: 'I don\'t feel well', jp: 'ぐあいがわるいです', emoji: '🤒', tip: 'The most important sentence today — say it to any grown-up you trust!' },
          { thai: 'ผมป่วยครับ', roman: 'phǒm pùai khráp', kana: 'ポム プアイ クラップ', en: 'I\'m sick', jp: 'びょうきなんです', emoji: '🤧' },
          { thai: 'ปวดหัวครับ', roman: 'pùat hǔa khráp', kana: 'プアット フア クラップ', en: 'I have a headache', jp: 'あたまがいたい', emoji: '🤕', tip: 'pùat means an aching kind of hurt — perfect for a headache or tummy ache.' },
          { thai: 'ปวดท้องครับ', roman: 'pùat tháwng khráp', kana: 'プアット トーン クラップ', en: 'I have a tummy ache', jp: 'おなかがいたい', emoji: '😣' },
          { thai: 'ช่วยด้วยครับ', roman: 'chûai dûai khráp', kana: 'チュアイ ドゥアイ クラップ', en: 'Help me please', jp: 'たすけてください', emoji: '🆘', tip: 'Call this out if you really need a grown-up fast!' },
          { thai: 'ผมไม่ไหวครับ', roman: 'phǒm mâi wǎi khráp', kana: 'ポム マイ ワイ クラップ', en: 'I can\'t do it, I\'m too weak', jp: 'もうむりです', emoji: '😩' },
          { thai: 'ผมต้องการพักครับ', roman: 'phǒm tâwng-kaan phák khráp', kana: 'ポム トンガーン パック クラップ', en: 'I need to rest', jp: 'やすみたいです', emoji: '🛏️' },
        ] },
      { id: 'wherehurt', num: 2, title: 'Where It Hurts', emoji: '🩹', color: 'orange',
        intro: 'Grown-ups can help faster if they know exactly where it hurts. Let\'s point and name the spot!',
        phrases: [
          { thai: 'หัว', roman: 'hǔa', kana: 'フア', en: 'head', jp: 'あたま', emoji: '🧠' },
          { thai: 'ท้อง', roman: 'tháwng', kana: 'トーン', en: 'tummy', jp: 'おなか', emoji: '🤰' },
          { thai: 'คอ', roman: 'khaw', kana: 'コー', en: 'throat', jp: 'のど', emoji: '🗣️' },
          { thai: 'ฟัน', roman: 'fan', kana: 'ファン', en: 'tooth', jp: 'は', emoji: '🦷' },
          { thai: 'ขา', roman: 'khǎa', kana: 'カー', en: 'leg', jp: 'あし', emoji: '🦵' },
          { thai: 'มือ', roman: 'mue', kana: 'ムー', en: 'hand', jp: 'て', emoji: '✋' },
          { thai: 'เจ็บตรงนี้ครับ', roman: 'jèp trong-níi khráp', kana: 'ジェップ トロン ニー クラップ', en: 'It hurts right here', jp: 'ここがいたい', emoji: '👉', tip: 'Point with your finger as you say it — that makes it super clear!' },
        ] },
      { id: 'symptoms', num: 3, title: 'How I Feel', emoji: '🌡️', color: 'purple',
        intro: 'Are you hot, cold, or sleepy? Telling exactly how you feel helps the grown-ups make you better!',
        phrases: [
          { thai: 'ผมเป็นไข้ครับ', roman: 'phǒm pen khâi khráp', kana: 'ポム ペン カイ クラップ', en: 'I have a fever', jp: 'ねつがあります', emoji: '🌡️', tip: 'pen khâi is the word the doctor will want to hear most.' },
          { thai: 'ผมไอครับ', roman: 'phǒm ai khráp', kana: 'ポム アイ クラップ', en: 'I have a cough', jp: 'せきがでます', emoji: '😷' },
          { thai: 'ตัวร้อนครับ', roman: 'tua ráwn khráp', kana: 'トゥア ローン クラップ', en: 'My body feels hot', jp: 'からだがあつい', emoji: '🥵' },
          { thai: 'ผมหนาวครับ', roman: 'phǒm nǎao khráp', kana: 'ポム ナーオ クラップ', en: 'I feel cold and shivery', jp: 'さむいです', emoji: '🥶' },
          { thai: 'ผมเหนื่อยครับ', roman: 'phǒm nùeai khráp', kana: 'ポム ヌアイ クラップ', en: 'I feel tired', jp: 'つかれました', emoji: '😮‍💨' },
          { thai: 'ผมอยากนอนครับ', roman: 'phǒm yàak nawn khráp', kana: 'ポム ヤーク ノーン クラップ', en: 'I want to lie down', jp: 'よこになりたい', emoji: '😴' },
          { thai: 'ผมไม่อยากกินข้าวครับ', roman: 'phǒm mâi yàak kin khâao khráp', kana: 'ポム マイ ヤーク キン カーオ クラップ', en: 'I don\'t want to eat', jp: 'ごはんたべたくない', emoji: '🍚' },
        ] },
      { id: 'atdoctor', num: 4, title: 'At the Doctor', emoji: '🩺', color: 'teal',
        intro: 'The doctor is a kind helper whose whole job is to make you feel better. Take a deep breath — you\'ve got this!',
        phrases: [
          { thai: 'คุณหมอครับ', roman: 'khun-mǎw khráp', kana: 'クン モー クラップ', en: 'Doctor!', jp: 'おいしゃさん', emoji: '🧑‍⚕️', tip: 'khun-mǎw is the polite, friendly way to call the doctor.' },
          { thai: 'หมอ', roman: 'mǎw', kana: 'モー', en: 'doctor', jp: 'いしゃ', emoji: '👩‍⚕️' },
          { thai: 'โรงพยาบาล', roman: 'roong-phá-yaa-baan', kana: 'ローン パヤーバーン', en: 'hospital', jp: 'びょういん', emoji: '🏥' },
          { thai: 'เจ็บไหมครับ', roman: 'jèp mǎi khráp', kana: 'ジェップ マイ クラップ', en: 'Will it hurt?', jp: 'いたいですか', emoji: '😟' },
          { thai: 'ผมไม่กลัวครับ', roman: 'phǒm mâi klua khráp', kana: 'ポム マイ クルア クラップ', en: 'I\'m not scared', jp: 'こわくないよ', emoji: '💪', tip: 'Say this proudly — you are a brave patient!' },
          { thai: 'ต้องกินยาไหมครับ', roman: 'tâwng kin yaa mǎi khráp', kana: 'トン キン ヤー マイ クラップ', en: 'Do I have to take medicine?', jp: 'くすりのみますか', emoji: '💊' },
          { thai: 'ขอบคุณคุณหมอครับ', roman: 'khàwp-khun khun-mǎw khráp', kana: 'コープ クン クン モー クラップ', en: 'Thank you, doctor', jp: 'せんせいありがとう', emoji: '🙏' },
        ] },
      { id: 'medicine', num: 5, title: 'Medicine & Rest', emoji: '💊', color: 'green',
        intro: 'Medicine, water, and good rest are your secret powers for getting better. Let\'s thank the people who take care of you!',
        phrases: [
          { thai: 'ยา', roman: 'yaa', kana: 'ヤー', en: 'medicine', jp: 'くすり', emoji: '💊' },
          { thai: 'ผมกินยาแล้วครับ', roman: 'phǒm kin yaa láew khráp', kana: 'ポム キン ヤー レーオ クラップ', en: 'I took my medicine', jp: 'くすりのんだよ', emoji: '🥄', tip: 'láew means "already" — it tells someone the action is done.' },
          { thai: 'ผมจะนอนพักครับ', roman: 'phǒm jà nawn phák khráp', kana: 'ポム ジャ ノーン パック クラップ', en: 'I\'m going to rest', jp: 'やすみます', emoji: '🛌' },
          { thai: 'ดื่มน้ำเยอะๆ ครับ', roman: 'dùem náam yóe-yóe khráp', kana: 'ドゥーム ナーム ユーユー クラップ', en: 'Drink lots of water', jp: 'おみずたくさんのむ', emoji: '💧' },
          { thai: 'ผมดีขึ้นแล้วครับ', roman: 'phǒm dii khûen láew khráp', kana: 'ポム ディー クン レーオ クラップ', en: 'I\'m feeling better', jp: 'よくなってきた', emoji: '🙂', tip: 'dii khûen means "getting better" — a happy thing to say!' },
          { thai: 'ขอบคุณที่ดูแลครับ', roman: 'khàwp-khun thîi duu-lae khráp', kana: 'コープ クン ティー ドゥーレー クラップ', en: 'Thank you for taking care of me', jp: 'みてくれてありがとう', emoji: '🤗' },
          { thai: 'ไม่เป็นไรครับ', roman: 'mâi pen rai khráp', kana: 'マイ ペン ライ クラップ', en: 'It\'s okay / no problem', jp: 'だいじょうぶ', emoji: '👍' },
        ] },
      { id: 'allbetter', num: 6, title: 'All Better!', emoji: '🎉', color: 'gold',
        intro: 'Yay — your body feels strong and happy again! Time to share the good news and give some hugs.',
        phrases: [
          { thai: 'ผมหายแล้วครับ', roman: 'phǒm hǎai láew khráp', kana: 'ポム ハーイ レーオ クラップ', en: 'I\'m all better now', jp: 'なおったよ', emoji: '🎉', tip: 'hǎai is the magic word for "healed" — everyone loves to hear it!' },
          { thai: 'ผมสบายดีแล้วครับ', roman: 'phǒm sà-baai dii láew khráp', kana: 'ポム サバーイ ディー レーオ クラップ', en: 'I feel just fine now', jp: 'もとげんきだよ', emoji: '😄' },
          { thai: 'ผมแข็งแรงแล้วครับ', roman: 'phǒm khǎeng-raeng láew khráp', kana: 'ポム ケーン レーン レーオ クラップ', en: 'I\'m strong again', jp: 'げんきになった', emoji: '💪' },
          { thai: 'ขอบคุณครับ', roman: 'khàwp-khun khráp', kana: 'コープ クン クラップ', en: 'Thank you', jp: 'ありがとう', emoji: '🙏' },
          { thai: 'รักนะครับ', roman: 'rák ná khráp', kana: 'ラック ナ クラップ', en: 'I love you', jp: 'だいすき', emoji: '❤️', tip: 'A sweet thing to tell the people who looked after you.' },
          { thai: 'ผมอยากไปเล่นแล้วครับ', roman: 'phǒm yàak pai lên láew khráp', kana: 'ポム ヤーク パイ レン レーオ クラップ', en: 'I want to go play now', jp: 'あそびにいきたい', emoji: '⚽' },
          { thai: 'วันนี้ผมมีความสุขครับ', roman: 'wan-níi phǒm mii khwaam-sùk khráp', kana: 'ワンニー ポム ミー クワーム スック クラップ', en: 'Today I\'m happy', jp: 'きょうはたのしい', emoji: '😁' },
        ] },
    ],
    call: {
      label: 'See the Doctor!',
      blurb: 'Visit Khun-Mǎw at the clinic and tell her how you feel — she\'ll help you get better!',
      homeEmoji: '🏥🩺',
      personaName: 'Khun-Mǎw', personaThai: 'คุณหมอ', personaRole: 'the doctor', personaEmoji: '🧑‍⚕️', personaPlace: 'the clinic 🏥',
      steps: [
        { yaa: { thai: 'สวัสดีจ้ะ ไม่สบายตรงไหนเอ่ย', roman: 'sà-wàt-dii jâ, mâi sà-baai trong nǎi òei', en: 'Hello dear! Where don\'t you feel well?', jp: 'こんにちは。どこがぐあいわるいの？' },
          replies: [
            { thai: 'สวัสดีครับ คุณหมอ', roman: 'sà-wàt-dii khráp khun-mǎw', kana: 'サワッディー クラップ クン モー', en: 'Hello, doctor', emoji: '🙂' },
          ] },
        { yaa: { thai: 'บอกหมอได้เลยนะ เจ็บตรงไหน', roman: 'bàwk mǎw dâai loei ná, jèp trong nǎi', en: 'You can tell me — where does it hurt?', jp: 'おしえてね、どこがいたい？' },
          replies: [
            { thai: 'ปวดท้องครับ', roman: 'pùat tháwng khráp', kana: 'プアット トーン クラップ', en: 'My tummy hurts', emoji: '😣' },
            { thai: 'ปวดท้องกับปวดหัวครับ', roman: 'pùat tháwng kàp pùat hǔa khráp', kana: 'プアット トーン カップ プアット フア クラップ', en: 'My tummy and my head hurt', emoji: '🤕', bonus: true },
          ] },
        { yaa: { thai: 'อืม หนูเป็นไข้ไหมจ๊ะ', roman: 'uem, nǔu pen khâi mǎi já', en: 'Hmm, do you have a fever?', jp: 'ねつはあるかな？' },
          replies: [
            { thai: 'เป็นไข้ครับ ตัวร้อนครับ', roman: 'pen khâi khráp, tua ráwn khráp', kana: 'ペン カイ クラップ トゥア ローン クラップ', en: 'Yes, I have a fever, my body is hot', emoji: '🌡️' },
            { thai: 'เป็นไข้กับไอด้วยครับ', roman: 'pen khâi kàp ai dûai khráp', kana: 'ペン カイ カップ アイ ドゥアイ クラップ', en: 'I have a fever and a cough too', emoji: '😷', bonus: true },
          ] },
        { yaa: { thai: 'ไม่ต้องห่วงนะ เดี๋ยวก็หาย กินยาแล้วนอนพักนะจ๊ะ', roman: 'mâi tâwng hùang ná, dǐao kâw hǎai, kin yaa láew nawn phák ná já', en: 'Don\'t worry, you\'ll get better. Take medicine and rest, okay?', jp: 'しんぱいないよ。くすりをのんでやすもうね。' },
          replies: [
            { thai: 'ต้องกินยาไหมครับ', roman: 'tâwng kin yaa mǎi khráp', kana: 'トン キン ヤー マイ クラップ', en: 'Do I have to take medicine?', emoji: '💊' },
            { thai: 'ครับ ผมจะกินยาแล้วนอนพักครับ', roman: 'khráp, phǒm jà kin yaa láew nawn phák khráp', kana: 'クラップ ポム ジャ キン ヤー レーオ ノーン パック クラップ', en: 'Okay, I\'ll take medicine and rest', emoji: '🛌', bonus: true },
          ] },
        { yaa: { thai: 'หมอขอฟังหัวใจหน่อยนะ เจ็บนิดเดียวเองจ้ะ', roman: 'mǎw khǎw fang hǔa-jai nòi ná, jèp nít-diao eeng jâ', en: 'Let me listen to your heart — it only hurts a tiny bit.', jp: 'むねのおとをきくね。すこしだけだよ。' },
          replies: [
            { thai: 'เจ็บไหมครับ', roman: 'jèp mǎi khráp', kana: 'ジェップ マイ クラップ', en: 'Will it hurt?', emoji: '😟' },
            { thai: 'ผมไม่กลัวครับ ผมกล้าครับ', roman: 'phǒm mâi klua khráp, phǒm klâa khráp', kana: 'ポム マイ クルア クラップ ポム クラー クラップ', en: 'I\'m not scared, I\'m brave', emoji: '💪', bonus: true },
          ] },
        { yaa: { thai: 'เก่งมากเลย หนูกล้าหาญจริงๆ', roman: 'kèng mâak loei, nǔu klâa-hǎan jing-jing', en: 'Very good! You\'re really brave.', jp: 'えらいね、ほんとうにゆうかんだね。' },
          replies: [
            { thai: 'ขอบคุณคุณหมอครับ', roman: 'khàwp-khun khun-mǎw khráp', kana: 'コープ クン クン モー クラップ', en: 'Thank you, doctor', emoji: '🙏' },
            { thai: 'ขอบคุณที่ดูแลผมครับ', roman: 'khàwp-khun thîi duu-lae phǒm khráp', kana: 'コープ クン ティー ドゥーレー ポム クラップ', en: 'Thank you for taking care of me', emoji: '🤗', bonus: true },
          ] },
        { yaa: { thai: 'หายไวๆ นะจ๊ะ ลาก่อนจ้ะ', roman: 'hǎai wai-wai ná já, laa-kàwn jâ', en: 'Get well soon! Goodbye, dear.', jp: 'はやくよくなってね。さようなら。' },
          replies: [
            { thai: 'ลาก่อนครับ คุณหมอ', roman: 'laa-kàwn khráp khun-mǎw', kana: 'ラーコーン クラップ クン モー', en: 'Goodbye, doctor', emoji: '👋' },
          ] },
      ],
    },
    badges: [
      { id: 'doc-teller', emoji: '🤒', name: 'Brave Teller', desc: 'Learned to tell a grown-up you don\'t feel well', when: { quest: 'notwell', need: 'learn' } },
      { id: 'doc-spot', emoji: '🩹', name: 'Spot Pointer', desc: 'Finished the Where It Hurts quest', when: { quest: 'wherehurt', need: 'complete' } },
      { id: 'doc-symptoms', emoji: '🌡️', name: 'Feelings Reporter', desc: 'Learned to say how your body feels', when: { quest: 'symptoms', need: 'learn' } },
      { id: 'doc-brave', emoji: '🩺', name: 'Brave Patient', desc: 'Mastered the At the Doctor phrases', when: { quest: 'atdoctor', need: 'listen2' } },
      { id: 'doc-better', emoji: '🎉', name: 'All Better Hero', desc: 'Finished the All Better quest', when: { quest: 'allbetter', need: 'complete' } },
      { id: 'doc-call', emoji: '🏥', name: 'Clinic Champion', desc: 'Visited Khun-Mǎw all by yourself!', when: { call: true } },
      { id: 'doc-legend', emoji: '💖', name: 'Strong & Well', desc: 'Finished every single quest!', when: { allQuests: 'learn' } },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Mission: At Grandma's House — helping, dinner, manners, chores
  // and bedtime. Finale is helping Grandma (ยาย) cook dinner.
  // ═══════════════════════════════════════════════════════════
  {
    id: 'home', title: 'Mission: At Grandma\'s House', emoji: '🏠', color: 'purple',
    blurb: 'Become the most helpful, most polite grandchild Yaai has ever had!',
    quests: [
      { id: 'helpout', num: 1, title: 'Can I Help?', emoji: '🤝', color: 'pink',
        intro: 'Yaai is busy in the kitchen! A super grandchild always jumps in to help. Let\'s show her what a helper you are!',
        phrases: [
          { thai: 'ผมช่วยได้ไหมครับ', roman: 'phǒm chûai dâai mǎi khráp', kana: 'ポム チュアイ ダーイ マイ クラップ', en: 'Can I help?', jp: 'てつだってもいい？', emoji: '🙋', tip: 'Grown-ups LOVE a kid who offers to help — instant superstar!' },
          { thai: 'ให้ผมช่วยนะครับ', roman: 'hâi phǒm chûai ná khráp', kana: 'ハイ ポム チュアイ ナ クラップ', en: 'Let me help!', jp: 'ぼくにてつだわせて！', emoji: '💪' },
          { thai: 'เอาอะไรไหมครับ', roman: 'ao à-rai mǎi khráp', kana: 'アオ アライ マイ クラップ', en: 'Do you need anything?', jp: 'なにかいる？', emoji: '🤔' },
          { thai: 'ผมทำเองได้ครับ', roman: 'phǒm tham eeng dâai khráp', kana: 'ポム タム エーン ダーイ クラップ', en: 'I can do it myself!', jp: 'じぶんでできるよ！', emoji: '😎' },
          { thai: 'ผมยกให้ครับ', roman: 'phǒm yók hâi khráp', kana: 'ポム ヨック ハイ クラップ', en: 'I\'ll carry it!', jp: 'ぼくがはこぶよ！', emoji: '📦' },
          { thai: 'ผมช่วยถือให้ครับ', roman: 'phǒm chûai thǔe hâi khráp', kana: 'ポム チュアイ トゥー ハイ クラップ', en: 'I\'ll hold it for you!', jp: 'もってあげるよ！', emoji: '🫳' },
          { thai: 'อยู่ไหนครับ', roman: 'yùu nǎi khráp', kana: 'ユー ナイ クラップ', en: 'Where is it?', jp: 'どこにあるの？', emoji: '🔍', tip: 'Use this to find what Yaai needs before she even asks!' },
        ] },
      { id: 'mealtime', num: 2, title: 'Dinner Time', emoji: '🍚', color: 'orange',
        intro: 'Mmm, something smells amazing! It\'s almost dinner. Let\'s help get the table ready and dig in the polite way.',
        phrases: [
          { thai: 'กินข้าวได้หรือยังครับ', roman: 'kin khâao dâai rǔe yang khráp', kana: 'キン カーオ ダーイ ルー ヤン クラップ', en: 'Can we eat yet?', jp: 'もうたべていい？', emoji: '🍽️' },
          { thai: 'ล้างมือก่อนครับ', roman: 'láang mue kàwn khráp', kana: 'ラーン ムー コーン クラップ', en: 'Wash hands first!', jp: 'まずてをあらうよ！', emoji: '🧼', tip: 'Thai kids always wash hands before eating — Yaai will be so proud!' },
          { thai: 'ผมช่วยจัดโต๊ะครับ', roman: 'phǒm chûai jàt tó khráp', kana: 'ポム チュアイ ジャット ト クラップ', en: 'I\'ll help set the table!', jp: 'テーブルをじゅんびするよ！', emoji: '🍴' },
          { thai: 'ขอข้าวเพิ่มได้ไหมครับ', roman: 'khǎw khâao phôem dâai mǎi khráp', kana: 'コー カーオ プーム ダーイ マイ クラップ', en: 'Can I have more rice?', jp: 'ごはんおかわりしていい？', emoji: '🍚' },
          { thai: 'ส่งน้ำให้หน่อยได้ไหมครับ', roman: 'sòng náam hâi nòi dâai mǎi khráp', kana: 'ソン ナーム ハイ ノイ ダーイ マイ クラップ', en: 'Can you pass the water?', jp: 'おみずとってくれる？', emoji: '💧' },
          { thai: 'ขอบคุณสำหรับอาหารครับ', roman: 'khàwp-khun sǎm-ràp aa-hǎan khráp', kana: 'コープクン サムラップ アーハーン クラップ', en: 'Thank you for the food!', jp: 'ごはんありがとう！', emoji: '🙏', tip: 'Say this and Yaai will give you the biggest smile!' },
          { thai: 'หิวมากเลยครับ', roman: 'hǐw mâak loei khráp', kana: 'ヒウ マーク ルーイ クラップ', en: 'I\'m so hungry!', jp: 'すごくおなかすいた！', emoji: '😋' },
        ] },
      { id: 'manners', num: 3, title: 'Good Manners', emoji: '✨', color: 'gold',
        intro: 'A polite grandchild is a sparkly superstar! These magic words make everyone happy. Let\'s shine!',
        phrases: [
          { thai: 'อร่อยมากครับ', roman: 'à-ròi mâak khráp', kana: 'アロイ マーク クラップ', en: 'So delicious!', jp: 'すごくおいしい！', emoji: '😋', tip: 'The #1 way to make a cook happy — say it with a big smile!' },
          { thai: 'อิ่มแล้วครับ', roman: 'ìm láew khráp', kana: 'イム レーオ クラップ', en: 'I\'m full!', jp: 'おなかいっぱい！', emoji: '🤗' },
          { thai: 'ขอบคุณครับ', roman: 'khàwp-khun khráp', kana: 'コープクン クラップ', en: 'Thank you!', jp: 'ありがとう！', emoji: '🙏' },
          { thai: 'ขอตัวนะครับ', roman: 'khǎw tua ná khráp', kana: 'コー トゥア ナ クラップ', en: 'May I be excused?', jp: 'しつれいします', emoji: '🙇' },
          { thai: 'ฝีมือดีจังครับ', roman: 'fǐi-mue dii jang khráp', kana: 'フィームー ディー ジャン クラップ', en: 'You cook so well!', jp: 'りょうりじょうずだね！', emoji: '👩‍🍳', tip: 'Praising the cook\'s skill is extra-grown-up and extra-sweet!' },
          { thai: 'ไม่เป็นไรครับ', roman: 'mâi pen rai khráp', kana: 'マイ ペン ライ クラップ', en: 'It\'s okay / no problem!', jp: 'だいじょうぶだよ！', emoji: '😊' },
          { thai: 'ขอโทษครับ', roman: 'khǎw-thôht khráp', kana: 'コートート クラップ', en: 'I\'m sorry!', jp: 'ごめんなさい！', emoji: '🙇' },
        ] },
      { id: 'chores', num: 4, title: 'Tidy Up!', emoji: '🧹', color: 'teal',
        intro: 'Dinner is done — now the clean-up team springs into action! Helping tidy up makes Yaai\'s evening so easy.',
        phrases: [
          { thai: 'เก็บจานครับ', roman: 'kèp jaan khráp', kana: 'ケップ ジャーン クラップ', en: 'I\'ll clear the plates!', jp: 'おさらをかたづけるよ！', emoji: '🍽️' },
          { thai: 'ล้างจานครับ', roman: 'láang jaan khráp', kana: 'ラーン ジャーン クラップ', en: 'I\'ll wash the dishes!', jp: 'おさらをあらうよ！', emoji: '🧽' },
          { thai: 'เก็บของครับ', roman: 'kèp khǎwng khráp', kana: 'ケップ コーン クラップ', en: 'I\'ll tidy up!', jp: 'かたづけるよ！', emoji: '📦' },
          { thai: 'ทิ้งขยะครับ', roman: 'thíng khà-yà khráp', kana: 'ティン カヤ クラップ', en: 'I\'ll throw out the trash!', jp: 'ごみをすてるよ！', emoji: '🗑️' },
          { thai: 'เช็ดโต๊ะครับ', roman: 'chét tó khráp', kana: 'チェット ト クラップ', en: 'I\'ll wipe the table!', jp: 'テーブルをふくよ！', emoji: '🧻' },
          { thai: 'เรียบร้อยแล้วครับ', roman: 'rîap-rói láew khráp', kana: 'リアップローイ レーオ クラップ', en: 'All done!', jp: 'ぜんぶおわったよ！', emoji: '✅', tip: 'Say this proudly when a job is finished — Yaai loves a finisher!' },
          { thai: 'ผมช่วยเก็บครับ', roman: 'phǒm chûai kèp khráp', kana: 'ポム チュアイ ケップ クラップ', en: 'I\'ll help clean up!', jp: 'かたづけてつだうよ！', emoji: '🤝' },
        ] },
      { id: 'bedtime', num: 5, title: 'Bath & Bedtime', emoji: '🛁', color: 'green',
        intro: 'After a big helpful day, it\'s time to get clean and cozy. Let\'s splash, brush, and snuggle into bed!',
        phrases: [
          { thai: 'อาบน้ำครับ', roman: 'àap náam khráp', kana: 'アープ ナーム クラップ', en: 'I\'m taking a bath!', jp: 'おふろにはいるよ！', emoji: '🛁' },
          { thai: 'แปรงฟันครับ', roman: 'praeng fan khráp', kana: 'プレーン ファン クラップ', en: 'I\'m brushing my teeth!', jp: 'はをみがくよ！', emoji: '🪥' },
          { thai: 'ใส่ชุดนอนครับ', roman: 'sài chút-nawn khráp', kana: 'サイ チュットノーン クラップ', en: 'I\'m putting on pajamas!', jp: 'パジャマをきるよ！', emoji: '👕' },
          { thai: 'ง่วงแล้วครับ', roman: 'ngûang láew khráp', kana: 'グアン レーオ クラップ', en: 'I\'m sleepy!', jp: 'ねむくなってきた！', emoji: '🥱' },
          { thai: 'เข้านอนครับ', roman: 'khâo nawn khráp', kana: 'カオ ノーン クラップ', en: 'I\'m going to bed!', jp: 'ねるよ！', emoji: '🛏️' },
          { thai: 'ฝันดีครับ', roman: 'fǎn dii khráp', kana: 'ファン ディー クラップ', en: 'Sweet dreams!', jp: 'いいゆめを！', emoji: '🌙', tip: 'A sweet thing to say to anyone going to sleep!' },
          { thai: 'ราตรีสวัสดิ์ครับ', roman: 'raa-trii sà-wàt khráp', kana: 'ラートリー サワット クラップ', en: 'Good night!', jp: 'おやすみなさい！', emoji: '😴' },
        ] },
      { id: 'homelove', num: 6, title: 'Goodnight, Grandma', emoji: '❤️', color: 'red',
        intro: 'The best part of the day: telling Yaai how much you love her. These warm words will make her heart melt!',
        phrases: [
          { thai: 'ขอบคุณยายครับ', roman: 'khàwp-khun yaai khráp', kana: 'コープクン ヤーイ クラップ', en: 'Thank you, Grandma!', jp: 'おばあちゃんありがとう！', emoji: '🙏' },
          { thai: 'ผมรักยายครับ', roman: 'phǒm rák yaai khráp', kana: 'ポム ラック ヤーイ クラップ', en: 'I love you, Grandma!', jp: 'おばあちゃんだいすき！', emoji: '❤️', tip: 'The most powerful sentence of all — Yaai will hug you forever!' },
          { thai: 'วันนี้มีความสุขมากครับ', roman: 'wan-níi mii khwaam-sùk mâak khráp', kana: 'ワンニー ミー クワームスック マーク クラップ', en: 'Today was so happy!', jp: 'きょうはすごくたのしかった！', emoji: '😊' },
          { thai: 'พรุ่งนี้ผมช่วยอีกนะครับ', roman: 'phrûng-níi phǒm chûai ìik ná khráp', kana: 'プルンニー ポム チュアイ イーク ナ クラップ', en: 'I\'ll help again tomorrow!', jp: 'あしたもてつだうね！', emoji: '🌅' },
          { thai: 'กอดหน่อยครับ', roman: 'kàwt nòi khráp', kana: 'ゴート ノイ クラップ', en: 'A hug, please!', jp: 'ぎゅっとして！', emoji: '🤗' },
          { thai: 'ยายเก่งที่สุดเลยครับ', roman: 'yaai kèng thîi-sùt loei khráp', kana: 'ヤーイ ケン ティースット ルーイ クラップ', en: 'Grandma, you\'re the best!', jp: 'おばあちゃんがいちばん！', emoji: '🏆' },
          { thai: 'ฝันดีนะครับ', roman: 'fǎn dii ná khráp', kana: 'ファン ディー ナ クラップ', en: 'Sweet dreams!', jp: 'いいゆめみてね！', emoji: '🌟' },
        ] },
    ],
    call: {
      label: 'Help Yaai Cook!', blurb: 'Grandma is making dinner — be her number-one little chef!', homeEmoji: '👵🍚',
      personaName: 'Yaai', personaThai: 'ยาย', personaRole: 'Grandma (mom\'s side)', personaEmoji: '👵', personaPlace: 'Grandma\'s kitchen 🏠',
      steps: [
        { yaa: { thai: 'หลานอยากช่วยยายทำกับข้าวไหมจ๊ะ', roman: 'lǎan yàak chûai yaai tham kàp-khâao mǎi já', en: 'Do you want to help Grandma cook?', jp: 'おばあちゃんのおりょうりてつだいたい？' },
          replies: [
            { thai: 'ครับ ผมอยากช่วยครับ', roman: 'khráp phǒm yàak chûai khráp', kana: 'クラップ ポム ヤーク チュアイ クラップ', en: 'Yes, I want to help!', emoji: '🙋' },
          ] },
        { yaa: { thai: 'ดีจังเลย หลานน่ารักมาก', roman: 'dii jang loei lǎan nâa-rák mâak', en: 'How lovely! You\'re so sweet.', jp: 'うれしいわ、いいこね' },
          replies: [
            { thai: 'ผมช่วยได้ไหมครับ', roman: 'phǒm chûai dâai mǎi khráp', kana: 'ポム チュアイ ダーイ マイ クラップ', en: 'Can I help?', emoji: '🤝' },
            { thai: 'เอาอะไรไหมครับ ผมทำได้ครับ', roman: 'ao à-rai mǎi khráp phǒm tham dâai khráp', kana: 'アオ アライ マイ クラップ ポム タム ダーイ クラップ', en: 'Need anything? I can do it!', emoji: '💪', bonus: true },
          ] },
        { yaa: { thai: 'ล้างมือก่อนนะ แล้วช่วยยายจัดโต๊ะ', roman: 'láang mue kàwn ná láew chûai yaai jàt tó', en: 'Wash your hands first, then help set the table.', jp: 'まずてをあらって、テーブルをじゅんびして' },
          replies: [
            { thai: 'ครับ ล้างมือก่อนครับ', roman: 'khráp láang mue kàwn khráp', kana: 'クラップ ラーン ムー コーン クラップ', en: 'Okay, wash hands first!', emoji: '🧼' },
            { thai: 'ผมช่วยจัดโต๊ะครับ', roman: 'phǒm chûai jàt tó khráp', kana: 'ポム チュアイ ジャット ト クラップ', en: 'I\'ll set the table!', emoji: '🍴', bonus: true },
          ] },
        { yaa: { thai: 'เก่งมากเลย จัดเสร็จแล้วเหรอ', roman: 'kèng mâak loei jàt sèt láew rǒe', en: 'So good! Is it all set?', jp: 'じょうずね、できた？' },
          replies: [
            { thai: 'เรียบร้อยแล้วครับ', roman: 'rîap-rói láew khráp', kana: 'リアップローイ レーオ クラップ', en: 'All done!', emoji: '✅' },
            { thai: 'เรียบร้อยแล้วครับ เอาอะไรอีกไหมครับ', roman: 'rîap-rói láew khráp ao à-rai ìik mǎi khráp', kana: 'リアップローイ レーオ クラップ アオ アライ イーク マイ クラップ', en: 'All done! Anything else?', emoji: '🙋', bonus: true },
          ] },
        { yaa: { thai: 'กินข้าวได้แล้ว อร่อยไหมจ๊ะ', roman: 'kin khâao dâai láew à-ròi mǎi já', en: 'Dinner\'s ready! Is it tasty?', jp: 'ごはんできたよ、おいしい？' },
          replies: [
            { thai: 'อร่อยมากครับ', roman: 'à-ròi mâak khráp', kana: 'アロイ マーク クラップ', en: 'So delicious!', emoji: '😋' },
            { thai: 'อร่อยมากครับ ฝีมือยายดีจังครับ', roman: 'à-ròi mâak khráp fǐi-mue yaai dii jang khráp', kana: 'アロイ マーク クラップ フィームー ヤーイ ディー ジャン クラップ', en: 'So delicious! Grandma, you cook so well!', emoji: '👩‍🍳', bonus: true },
          ] },
        { yaa: { thai: 'อิ่มหรือยังจ๊ะ', roman: 'ìm rǔe yang já', en: 'Are you full?', jp: 'おなかいっぱいになった？' },
          replies: [
            { thai: 'อิ่มแล้วครับ ผมช่วยเก็บจานครับ', roman: 'ìm láew khráp phǒm chûai kèp jaan khráp', kana: 'イム レーオ クラップ ポム チュアイ ケップ ジャーン クラップ', en: 'I\'m full! I\'ll help clear the plates!', emoji: '🍽️' },
          ] },
        { yaa: { thai: 'ขอบใจหลานมากนะ ฝันดีจ้ะ', roman: 'khàwp-jai lǎan mâak ná fǎn dii jâ', en: 'Thank you so much, dear. Sweet dreams!', jp: 'ほんとうにありがとう、おやすみ' },
          replies: [
            { thai: 'ผมรักยายครับ ราตรีสวัสดิ์ครับ', roman: 'phǒm rák yaai khráp raa-trii sà-wàt khráp', kana: 'ポム ラック ヤーイ クラップ ラートリー サワット クラップ', en: 'I love you, Grandma! Good night!', emoji: '❤️' },
          ] },
      ],
    },
    badges: [
      { id: 'home-helper', emoji: '🤝', name: 'Little Helper', desc: 'Learned all the magic helping words!', when: { quest: 'helpout', need: 'learn' } },
      { id: 'home-dinner', emoji: '🍚', name: 'Dinner Star', desc: 'Finished the whole Dinner Time quest!', when: { quest: 'mealtime', need: 'complete' } },
      { id: 'home-polite', emoji: '✨', name: 'Super Polite', desc: 'Mastered every polite phrase!', when: { quest: 'manners', need: 'listen2' } },
      { id: 'home-cleanup', emoji: '🧹', name: 'Clean-Up Champ', desc: 'Learned every tidy-up phrase!', when: { quest: 'chores', need: 'learn' } },
      { id: 'home-sleepy', emoji: '🌙', name: 'Sleepy Star', desc: 'Finished the whole Bath & Bedtime quest!', when: { quest: 'bedtime', need: 'complete' } },
      { id: 'home-call', emoji: '👩‍🍳', name: 'Yaai\'s Sous-Chef', desc: 'Helped Grandma cook a whole dinner!', when: { call: true } },
      { id: 'home-legend', emoji: '❤️', name: 'Grandma\'s Favorite', desc: 'Finished every single quest!', when: { allQuests: 'learn' } },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Mission: Airplane & Airport — the trip starts here! Packing,
  // boarding, flying and landing. Finale is flying with Mom (แม่).
  // ═══════════════════════════════════════════════════════════
  {
    id: 'airport', title: 'Mission: Airplane & Airport', emoji: '✈️', color: 'teal',
    blurb: 'The adventure starts at the airport — fly all the way to Thailand in Thai! 🛫',
    quests: [
      { id: 'packbag', num: 1, title: 'Pack Your Bag!', emoji: '🧳', color: 'pink',
        intro: 'Tomorrow we fly to Thailand! Grab your suitcase — a super traveler packs all by himself.',
        phrases: [
          { thai: 'ไปเมืองไทยกัน', roman: 'pai mueang-thai kan', kana: 'パイ ムアンタイ ガン', en: 'Let\'s go to Thailand!', jp: 'タイにいこう！', emoji: '🇹🇭', tip: 'mueang-thai is what Thai people call their own country! 🏡' },
          { thai: 'จัดกระเป๋ากัน', roman: 'jàt krà-pǎo kan', kana: 'ジャット クラパオ ガン', en: 'Let\'s pack the bag!', jp: 'にもつをつめよう！', emoji: '🧳' },
          { thai: 'หนังสือเดินทาง', roman: 'nǎng-sǔe doen-thaang', kana: 'ナンスー ドゥーンターン', en: 'passport', jp: 'パスポート', emoji: '📕', tip: 'nǎng-sǔe = book, doen-thaang = travel — a passport is a "travel book"! 📖' },
          { thai: 'เสื้อผ้า', roman: 'sûea-phâa', kana: 'スアパー', en: 'clothes', jp: 'ふく', emoji: '👕' },
          { thai: 'แปรงสีฟัน', roman: 'praeng-sǐi-fan', kana: 'プレーン シーファン', en: 'toothbrush', jp: 'はブラシ', emoji: '🪥' },
          { thai: 'อย่าลืมนะครับ', roman: 'yàa luem ná khráp', kana: 'ヤー ルーム ナ クラップ', en: 'Don\'t forget!', jp: 'わすれないでね！', emoji: '⚠️' },
          { thai: 'พร้อมแล้วครับ', roman: 'phráwm láew khráp', kana: 'プローム レーオ クラップ', en: 'I\'m ready!', jp: 'じゅんびできたよ！', emoji: '✅' },
        ] },
      { id: 'atairport', num: 2, title: 'At the Airport', emoji: '🛫', color: 'teal',
        intro: 'Whoa, the airport is HUGE! Planes everywhere. Stay close and find your gate like a pro.',
        phrases: [
          { thai: 'สนามบิน', roman: 'sà-nǎam-bin', kana: 'サナームビン', en: 'airport', jp: 'くうこう', emoji: '🛫' },
          { thai: 'เครื่องบิน', roman: 'khrûeang-bin', kana: 'クルアンビン', en: 'airplane', jp: 'ひこうき', emoji: '✈️', tip: 'bin means "fly" — a khrûeang-bin is a "flying machine"! 🛩️' },
          { thai: 'ตั๋วเครื่องบิน', roman: 'tǔa khrûeang-bin', kana: 'トゥア クルアンビン', en: 'plane ticket', jp: 'ひこうきのチケット', emoji: '🎫' },
          { thai: 'กระเป๋าหนักจัง', roman: 'krà-pǎo nàk jang', kana: 'クラパオ ナック ジャン', en: 'The bag is so heavy!', jp: 'にもつがおもい！', emoji: '🏋️' },
          { thai: 'ประตูขึ้นเครื่องอยู่ไหนครับ', roman: 'prà-tuu khûen khrûeang yùu nǎi khráp', kana: 'プラトゥー クン クルアン ユー ナイ クラップ', en: 'Where is our gate?', jp: 'とうじょうぐちはどこ？', emoji: '🚪' },
          { thai: 'ต่อแถวครับ', roman: 'tàw thǎew khráp', kana: 'トー テーオ クラップ', en: 'Let\'s line up', jp: 'ならぼう', emoji: '🧍', tip: 'thǎew means a queue — line up nicely and you\'re halfway to Thailand! 🚶' },
          { thai: 'เครื่องบินใหญ่จัง', roman: 'khrûeang-bin yài jang', kana: 'クルアンビン ヤイ ジャン', en: 'The plane is SO big!', jp: 'ひこうきおおきい！', emoji: '😲' },
        ] },
      { id: 'onplane', num: 3, title: 'On the Plane', emoji: '💺', color: 'purple',
        intro: 'Buckle up — we\'re taking off! Time to be a polite little passenger in the sky.',
        phrases: [
          { thai: 'ที่นั่งของผมอยู่ไหนครับ', roman: 'thîi-nâng khǎwng phǒm yùu nǎi khráp', kana: 'ティーナン コーン ポム ユー ナイ クラップ', en: 'Where is my seat?', jp: 'ぼくのせきはどこ？', emoji: '💺' },
          { thai: 'คาดเข็มขัดครับ', roman: 'khâat khěm-khàt khráp', kana: 'カート ケムカット クラップ', en: 'Seatbelt on!', jp: 'シートベルトをしめる！', emoji: '🔒' },
          { thai: 'เครื่องขึ้นแล้ว', roman: 'khrûeang khûen láew', kana: 'クルアン クン レーオ', en: 'We\'re taking off!', jp: 'りりくした！', emoji: '🛫', tip: 'Feel your tummy go whoosh — that\'s the best part! 🎢' },
          { thai: 'ดูก้อนเมฆสิ', roman: 'duu kâwn-mêek sì', kana: 'ドゥー ゴーンメーク シ', en: 'Look at the clouds!', jp: 'くもをみて！', emoji: '☁️' },
          { thai: 'ขอน้ำผลไม้หน่อยครับ', roman: 'khǎw náam phǒn-lá-máai nòi khráp', kana: 'コー ナーム ポンラマーイ ノイ クラップ', en: 'Juice, please', jp: 'ジュースください', emoji: '🧃' },
          { thai: 'ขอผ้าห่มหน่อยครับ', roman: 'khǎw phâa-hòm nòi khráp', kana: 'コー パーホム ノイ クラップ', en: 'A blanket, please', jp: 'もうふください', emoji: '🛌' },
          { thai: 'หูอื้อครับ', roman: 'hǔu ûe khráp', kana: 'フー ウー クラップ', en: 'My ears feel funny!', jp: 'みみがへんなかんじ！', emoji: '👂', tip: 'Ears pop when the plane climbs — yawn or swallow and they\'ll clear! 😮' },
        ] },
      { id: 'arewethere', num: 4, title: 'Are We There Yet?', emoji: '⏰', color: 'orange',
        intro: 'It\'s a looong flight. Movies, naps, and the most famous kid question in the world…',
        phrases: [
          { thai: 'ถึงหรือยังครับ', roman: 'thǔeng rǔe yang khráp', kana: 'トゥン ルー ヤン クラップ', en: 'Are we there yet?', jp: 'もうついた？', emoji: '⏰', tip: 'Every kid\'s favorite question — now you can ask it in Thai! 😆' },
          { thai: 'อีกนานไหมครับ', roman: 'ìik naan mǎi khráp', kana: 'イーク ナーン マイ クラップ', en: 'Is it much longer?', jp: 'あとどれくらい？', emoji: '⌛' },
          { thai: 'ผมเบื่อครับ', roman: 'phǒm bùea khráp', kana: 'ポム ブア クラップ', en: 'I\'m bored', jp: 'たいくつだよ', emoji: '😑' },
          { thai: 'ดูหนังดีกว่า', roman: 'duu nǎng dii kwàa', kana: 'ドゥー ナン ディー クワー', en: 'Let\'s watch a movie!', jp: 'えいがをみよう！', emoji: '🎬', tip: 'dii kwàa means "that\'s a better idea!" 💡' },
          { thai: 'ผมง่วงครับ', roman: 'phǒm ngûang khráp', kana: 'ポム グアン クラップ', en: 'I\'m sleepy', jp: 'ねむい', emoji: '😴' },
          { thai: 'ใกล้ถึงแล้ว', roman: 'klâi thǔeng láew', kana: 'クライ トゥン レーオ', en: 'Almost there!', jp: 'もうすぐつくよ！', emoji: '🗺️' },
          { thai: 'ถึงแล้ว!', roman: 'thǔeng láew!', kana: 'トゥン レーオ', en: 'We\'re here!', jp: 'ついた！', emoji: '🎉' },
        ] },
      { id: 'landing', num: 5, title: 'Hello, Thailand!', emoji: '🛬', color: 'gold',
        intro: 'Wheels down in Bangkok! Grab your bag, feel that warm air, and find Grandma at arrivals.',
        phrases: [
          { thai: 'ถึงเมืองไทยแล้ว', roman: 'thǔeng mueang-thai láew', kana: 'トゥン ムアンタイ レーオ', en: 'We\'re in Thailand!', jp: 'タイについた！', emoji: '🇹🇭' },
          { thai: 'อากาศร้อนจัง', roman: 'aa-kàat ráwn jang', kana: 'アーカート ローン ジャン', en: 'The air is so hot!', jp: 'あつい！', emoji: '🥵', tip: 'The warm whoosh when the doors open — that\'s Thailand saying hello! 🌴' },
          { thai: 'รับกระเป๋ากัน', roman: 'ráp krà-pǎo kan', kana: 'ラップ クラパオ ガン', en: 'Let\'s get our bags', jp: 'にもつをとろう', emoji: '🧳' },
          { thai: 'กระเป๋าของผมอยู่นั่น', roman: 'krà-pǎo khǎwng phǒm yùu nân', kana: 'クラパオ コーン ポム ユー ナン', en: 'My bag is over there!', jp: 'ぼくのにもつはあそこ！', emoji: '👉' },
          { thai: 'ยายอยู่ไหน', roman: 'yaai yùu nǎi', kana: 'ヤーイ ユー ナイ', en: 'Where\'s Grandma?', jp: 'おばあちゃんはどこ？', emoji: '🔍' },
          { thai: 'เจอแล้ว!', roman: 'joe láew!', kana: 'ジュー レーオ', en: 'Found her!', jp: 'みつけた！', emoji: '🙌' },
          { thai: 'คิดถึงมากเลยครับ', roman: 'khít-thǔeng mâak loei khráp', kana: 'キットトゥン マーク ルーイ クラップ', en: 'I missed you so much!', jp: 'すごくあいたかった！', emoji: '🤗', tip: 'Run up, wai, then a big hug — the perfect airport hello! 💛' },
        ] },
    ],
    call: {
      label: 'Fly with Mâe!', blurb: 'Fly all the way to Bangkok with Mom — from packing to the big airport hug!', homeEmoji: '✈️🧳',
      personaName: 'Mâe', personaThai: 'แม่', personaRole: 'Mom', personaEmoji: '👩', personaPlace: 'the airport ✈️',
      steps: [
        { yaa: { thai: 'วันนี้เราจะบินไปเมืองไทยกันแล้ว จัดกระเป๋าหรือยังลูก', roman: 'wan-níi rao jà bin pai mueang-thai kan láew, jàt krà-pǎo rǔe yang lûuk', en: 'Today we fly to Thailand! Have you packed your bag?', jp: 'きょうタイにとぶよ！にもつはつめた？' },
          replies: [
            { thai: 'จัดแล้วครับ พร้อมแล้วครับ', roman: 'jàt láew khráp, phráwm láew khráp', kana: 'ジャット レーオ クラップ、プローム レーオ クラップ', en: 'All packed — I\'m ready!', emoji: '✅' },
          ] },
        { yaa: { thai: 'อย่าลืมหนังสือเดินทางนะลูก', roman: 'yàa luem nǎng-sǔe doen-thaang ná lûuk', en: 'Don\'t forget your passport!', jp: 'パスポートわすれないでね！' },
          replies: [
            { thai: 'ไม่ลืมครับ อยู่ในกระเป๋าครับ', roman: 'mâi luem khráp, yùu nai krà-pǎo khráp', kana: 'マイ ルーム クラップ、ユー ナイ クラパオ クラップ', en: 'I didn\'t forget — it\'s in my bag!', emoji: '📕' },
            { thai: 'อยู่นี่ครับ แปรงสีฟันก็ไม่ลืมครับ', roman: 'yùu nîi khráp, praeng-sǐi-fan kâw mâi luem khráp', kana: 'ユー ニー クラップ、プレーン シーファン ゴー マイ ルーム クラップ', en: 'Here it is — and I didn\'t forget my toothbrush!', emoji: '🪥', bonus: true },
          ] },
        { yaa: { thai: 'ดูสิลูก เครื่องบินของเราอยู่นั่น', roman: 'duu sì lûuk, khrûeang-bin khǎwng rao yùu nân', en: 'Look — that\'s our plane over there!', jp: 'みて、あれがわたしたちのひこうきよ！' },
          replies: [
            { thai: 'เครื่องบินใหญ่จังครับ', roman: 'khrûeang-bin yài jang khráp', kana: 'クルアンビン ヤイ ジャン クラップ', en: 'The plane is SO big!', emoji: '😲' },
            { thai: 'ตื่นเต้นจังเลยครับ', roman: 'tùen-tên jang loei khráp', kana: 'トゥーンテン ジャン ルーイ クラップ', en: 'I\'m so excited!', emoji: '🤩', bonus: true },
          ] },
        { yaa: { thai: 'นั่งที่นั่งแล้วคาดเข็มขัดนะลูก', roman: 'nâng thîi-nâng láew khâat khěm-khàt ná lûuk', en: 'Sit down and put on your seatbelt.', jp: 'せきにすわってシートベルトをしめてね' },
          replies: [
            { thai: 'คาดเข็มขัดแล้วครับ', roman: 'khâat khěm-khàt láew khráp', kana: 'カート ケムカット レーオ クラップ', en: 'Seatbelt is on!', emoji: '🔒' },
            { thai: 'เครื่องขึ้นแล้ว ดูก้อนเมฆสิครับ', roman: 'khrûeang khûen láew, duu kâwn-mêek sì khráp', kana: 'クルアン クン レーオ、ドゥー ゴーンメーク シ クラップ', en: 'We\'re taking off — look at the clouds!', emoji: '☁️', bonus: true },
          ] },
        { yaa: { thai: 'พี่เขาเอาของว่างมาแล้ว เอาอะไรไหมลูก', roman: 'phîi khǎo ao khǎwng-wâang maa láew, ao à-rai mǎi lûuk', en: 'The snack cart is here — do you want anything?', jp: 'おやつがきたよ、なにかいる？' },
          replies: [
            { thai: 'ขอน้ำผลไม้หน่อยครับ', roman: 'khǎw náam phǒn-lá-máai nòi khráp', kana: 'コー ナーム ポンラマーイ ノイ クラップ', en: 'Juice, please!', emoji: '🧃' },
            { thai: 'ขอผ้าห่มด้วยครับ ผมง่วงครับ', roman: 'khǎw phâa-hòm dûai khráp, phǒm ngûang khráp', kana: 'コー パーホム ドゥアイ クラップ、ポム グアン クラップ', en: 'And a blanket please — I\'m sleepy', emoji: '🛌', bonus: true },
          ] },
        { yaa: { thai: 'ตื่นได้แล้วลูก ใกล้ถึงแล้ว', roman: 'tùen dâai láew lûuk, klâi thǔeng láew', en: 'Wake up, sweetie — we\'re almost there!', jp: 'おきて、もうすぐつくよ！' },
          replies: [
            { thai: 'ถึงหรือยังครับ', roman: 'thǔeng rǔe yang khráp', kana: 'トゥン ルー ヤン クラップ', en: 'Are we there yet?', emoji: '⏰' },
            { thai: 'ถึงเมืองไทยแล้ว! อากาศร้อนจังครับ', roman: 'thǔeng mueang-thai láew! aa-kàat ráwn jang khráp', kana: 'トゥン ムアンタイ レーオ！アーカート ローン ジャン クラップ', en: 'We\'re in Thailand! The air is so hot!', emoji: '🥵', bonus: true },
          ] },
        { yaa: { thai: 'ดูสิ ยายมารอรับเราด้วย', roman: 'duu sì, yaai maa raw ráp rao dûai', en: 'Look — Grandma came to pick us up!', jp: 'みて、おばあちゃんがむかえにきてるよ！' },
          replies: [
            { thai: 'ยายครับ! คิดถึงมากเลยครับ', roman: 'yaai khráp! khít-thǔeng mâak loei khráp', kana: 'ヤーイ クラップ！キットトゥン マーク ルーイ クラップ', en: 'Grandma! I missed you so much!', emoji: '🤗' },
          ] },
      ],
    },
    badges: [
      { id: 'air-packer', emoji: '🧳', name: 'Super Packer', desc: 'Packed your bag all in Thai!', when: { quest: 'packbag', need: 'learn' } },
      { id: 'air-boarding', emoji: '🛫', name: 'Gate Finder', desc: 'Found your way through the airport!', when: { quest: 'atairport', need: 'complete' } },
      { id: 'air-flyer', emoji: '💺', name: 'Sky Rider', desc: 'Mastered all the on-the-plane phrases!', when: { quest: 'onplane', need: 'listen2' } },
      { id: 'air-patient', emoji: '⏰', name: 'Patient Traveler', desc: 'Learned to ask "are we there yet?" politely!', when: { quest: 'arewethere', need: 'learn' } },
      { id: 'air-landed', emoji: '🛬', name: 'Sawasdee Thailand', desc: 'Landed and found Grandma at arrivals!', when: { quest: 'landing', need: 'complete' } },
      { id: 'air-call', emoji: '👩', name: 'Mâe\'s Co-Pilot', desc: 'Flew all the way to Bangkok with Mom!', when: { call: true } },
      { id: 'air-legend', emoji: '✈️', name: 'Frequent Flyer', desc: 'Finished every single quest!', when: { allQuests: 'learn' } },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Mission: Birthday Party — sing, wish, cake and presents at a
  // cousin's birthday. Finale is Phîi-Fáa's (พี่ฟ้า) party.
  // ═══════════════════════════════════════════════════════════
  {
    id: 'birthday', title: 'Mission: Birthday Party', emoji: '🎂', color: 'pink',
    blurb: 'It\'s your cousin\'s birthday — sing, make wishes and party all in Thai! 🎉',
    quests: [
      { id: 'invited', num: 1, title: 'You\'re Invited!', emoji: '💌', color: 'pink',
        intro: 'A party invitation just arrived — your cousin Phîi-Fáa\'s birthday! Get ready to celebrate.',
        phrases: [
          { thai: 'วันเกิด', roman: 'wan-kòet', kana: 'ワンクート', en: 'birthday', jp: 'たんじょうび', emoji: '🎂', tip: 'wan = day, kòet = born — the day you were born! 👶' },
          { thai: 'งานวันเกิด', roman: 'ngaan wan-kòet', kana: 'ガーン ワンクート', en: 'birthday party', jp: 'たんじょうびパーティー', emoji: '🎈' },
          { thai: 'ไปงานวันเกิดกัน', roman: 'pai ngaan wan-kòet kan', kana: 'パイ ガーン ワンクート ガン', en: 'Let\'s go to the birthday party!', jp: 'パーティーにいこう！', emoji: '💌' },
          { thai: 'วันนี้วันเกิดพี่ฟ้า', roman: 'wan-níi wan-kòet phîi-fáa', kana: 'ワンニー ワンクート ピーファー', en: 'Today is Phîi-Fáa\'s birthday', jp: 'きょうはファーちゃんのたんじょうび', emoji: '🎉' },
          { thai: 'แต่งตัวหล่อๆ', roman: 'tàeng-tua làw-làw', kana: 'テーントゥア ローロー', en: 'Dress up handsome!', jp: 'かっこよくきがえよう！', emoji: '😎', tip: 'làw = handsome for boys — for girls you\'d say sǔai (beautiful)! ✨' },
          { thai: 'ตื่นเต้นจัง', roman: 'tùen-tên jang', kana: 'トゥーンテン ジャン', en: 'I\'m so excited!', jp: 'ワクワクする！', emoji: '🤩' },
          { thai: 'ไปกันเลย', roman: 'pai kan loei', kana: 'パイ ガン ルーイ', en: 'Let\'s go!', jp: 'いこう！', emoji: '🏃' },
        ] },
      { id: 'hbd', num: 2, title: 'Happy Birthday!', emoji: '🎉', color: 'gold',
        intro: 'The big moment! Wish your cousin the happiest birthday — in Thai, with a huge smile.',
        phrases: [
          { thai: 'สุขสันต์วันเกิดครับ', roman: 'sùk-sǎn wan-kòet khráp', kana: 'スックサン ワンクート クラップ', en: 'Happy Birthday!', jp: 'おたんじょうびおめでとう！', emoji: '🎉', tip: 'THE birthday phrase — say it first and loudest! 📣' },
          { thai: 'ขอให้มีความสุขนะครับ', roman: 'khǎw hâi mii khwaam-sùk ná khráp', kana: 'コー ハイ ミー クワームスック ナ クラップ', en: 'Wishing you happiness!', jp: 'しあわせでありますように！', emoji: '💖', tip: 'khǎw hâi… means "I wish you…" — the start of every Thai blessing! 🙏' },
          { thai: 'ขอให้แข็งแรงนะครับ', roman: 'khǎw hâi khǎeng-raeng ná khráp', kana: 'コー ハイ ケーンレーン ナ クラップ', en: 'Stay strong and healthy!', jp: 'げんきでいてね！', emoji: '💪' },
          { thai: 'อายุเท่าไหร่ครับ', roman: 'aa-yú thâo-rài khráp', kana: 'アーユ タオライ クラップ', en: 'How old are you now?', jp: 'なんさいになったの？', emoji: '🎂' },
          { thai: 'ร้องเพลงกัน', roman: 'ráwng phleeng kan', kana: 'ローン プレーン ガン', en: 'Let\'s sing!', jp: 'うたおう！', emoji: '🎤' },
          { thai: 'ปรบมือ', roman: 'pròp mue', kana: 'プロップ ムー', en: 'Clap your hands!', jp: 'はくしゅ！', emoji: '👏' },
          { thai: 'แฮปปี้เบิร์ธเดย์', roman: 'háep-pîi bòet-dee', kana: 'ヘッピー ブートデー', en: 'Happy Birthday (Thai style!)', jp: 'ハッピーバースデー（タイふう）', emoji: '🥳', tip: 'Thai kids sing the English birthday song too — with a Thai accent! 😄' },
        ] },
      { id: 'cake', num: 3, title: 'Cake & Candles', emoji: '🎂', color: 'orange',
        intro: 'The lights go down, the cake comes out! Time for candles, wishes, and the sweetest bite.',
        phrases: [
          { thai: 'เค้ก', roman: 'khéek', kana: 'ケーク', en: 'cake', jp: 'ケーキ', emoji: '🍰' },
          { thai: 'เทียน', roman: 'thian', kana: 'ティアン', en: 'candle', jp: 'ろうそく', emoji: '🕯️' },
          { thai: 'เป่าเทียนเลย', roman: 'pào thian loei', kana: 'パオ ティアン ルーイ', en: 'Blow out the candles!', jp: 'ろうそくをふきけして！', emoji: '💨' },
          { thai: 'อธิษฐานก่อน', roman: 'à-thít-thǎan kàwn', kana: 'アティッターン ゴーン', en: 'Make a wish first!', jp: 'さきにおねがいごとをして！', emoji: '🌠', tip: 'Close your eyes, wish hard, THEN blow — that\'s the rule! 😌' },
          { thai: 'ตัดเค้กกัน', roman: 'tàt khéek kan', kana: 'タット ケーク ガン', en: 'Let\'s cut the cake!', jp: 'ケーキをきろう！', emoji: '🔪' },
          { thai: 'ขอเค้กชิ้นใหญ่ครับ', roman: 'khǎw khéek chín yài khráp', kana: 'コー ケーク チン ヤイ クラップ', en: 'A big slice, please!', jp: 'おおきいのください！', emoji: '😋', tip: 'chín = slice or piece — pick your chín wisely! 🍰' },
          { thai: 'หวานอร่อยจัง', roman: 'wǎan à-ròi jang', kana: 'ワーン アロイ ジャン', en: 'Sweet and yummy!', jp: 'あまくておいしい！', emoji: '🍭' },
        ] },
      { id: 'presents', num: 4, title: 'Presents!', emoji: '🎁', color: 'purple',
        intro: 'You brought the perfect present. Hand it over and watch your cousin\'s face light up!',
        phrases: [
          { thai: 'ของขวัญ', roman: 'khǎwng-khwǎn', kana: 'コーンクワン', en: 'present', jp: 'プレゼント', emoji: '🎁' },
          { thai: 'นี่ของขวัญครับ', roman: 'nîi khǎwng-khwǎn khráp', kana: 'ニー コーンクワン クラップ', en: 'This present is for you!', jp: 'はい、プレゼント！', emoji: '🤲', tip: 'Give it with both hands — extra polite, extra sweet! 🙏' },
          { thai: 'เปิดเลย', roman: 'pòet loei', kana: 'プート ルーイ', en: 'Open it!', jp: 'あけてあけて！', emoji: '👀' },
          { thai: 'ชอบไหมครับ', roman: 'châwp mǎi khráp', kana: 'チョープ マイ クラップ', en: 'Do you like it?', jp: 'きにいった？', emoji: '😊' },
          { thai: 'ผมชอบมากเลยครับ', roman: 'phǒm châwp mâak loei khráp', kana: 'ポム チョープ マーク ルーイ クラップ', en: 'I love it!', jp: 'すごくきにいった！', emoji: '🤩' },
          { thai: 'ขอบคุณสำหรับของขวัญครับ', roman: 'khàwp-khun sǎm-ràp khǎwng-khwǎn khráp', kana: 'コープクン サムラップ コーンクワン クラップ', en: 'Thank you for the present!', jp: 'プレゼントありがとう！', emoji: '🙏' },
          { thai: 'เซอร์ไพรส์!', roman: 'soe-phrái!', kana: 'ソープライ！', en: 'Surprise!', jp: 'サプライズ！', emoji: '🎊' },
        ] },
      { id: 'partygames', num: 5, title: 'Party Games', emoji: '🎈', color: 'teal',
        intro: 'Balloons, games, and giggles everywhere! Win or lose, a good sport has the most fun.',
        phrases: [
          { thai: 'ลูกโป่ง', roman: 'lûuk-pòong', kana: 'ルークポーン', en: 'balloon', jp: 'ふうせん', emoji: '🎈' },
          { thai: 'เล่นเกมกันไหม', roman: 'lên keem kan mǎi', kana: 'レン ゲーム ガン マイ', en: 'Want to play a game?', jp: 'ゲームしない？', emoji: '🎮' },
          { thai: 'ตาผมครับ', roman: 'taa phǒm khráp', kana: 'ター ポム クラップ', en: 'My turn!', jp: 'ぼくのばん！', emoji: '🙋' },
          { thai: 'ผมชนะแล้ว', roman: 'phǒm chá-ná láew', kana: 'ポム チャナ レーオ', en: 'I won!', jp: 'かった！', emoji: '🏆' },
          { thai: 'ไม่เป็นไร แพ้ก็สนุก', roman: 'mâi pen rai, pháe kâw sà-nùk', kana: 'マイ ペン ライ、ペー ゴー サヌック', en: 'It\'s okay — losing is fun too!', jp: 'まけてもたのしいよ！', emoji: '😄', tip: 'pháe = lose. A good sport is everyone\'s favorite party guest! 🌟' },
          { thai: 'เก่งมาก', roman: 'kèng mâak', kana: 'ゲン マーク', en: 'Great job!', jp: 'じょうず！', emoji: '👏' },
          { thai: 'สนุกจังเลย', roman: 'sà-nùk jang loei', kana: 'サヌック ジャン ルーイ', en: 'This is SO fun!', jp: 'めっちゃたのしい！', emoji: '🥳' },
        ] },
      { id: 'partybye', num: 6, title: 'Thanks for Coming', emoji: '👋', color: 'green',
        intro: 'The party\'s winding down. Time to say thank you like the sweetest guest ever.',
        phrases: [
          { thai: 'ขอบคุณที่ชวนนะครับ', roman: 'khàwp-khun thîi chuan ná khráp', kana: 'コープクン ティー チュアン ナ クラップ', en: 'Thanks for inviting me!', jp: 'さそってくれてありがとう！', emoji: '💌', tip: 'chuan = invite. This phrase makes any host melt! 🥰' },
          { thai: 'วันนี้สนุกมากเลยครับ', roman: 'wan-níi sà-nùk mâak loei khráp', kana: 'ワンニー サヌック マーク ルーイ クラップ', en: 'Today was so much fun!', jp: 'きょうすごくたのしかった！', emoji: '🎉' },
          { thai: 'เค้กอร่อยมากครับ', roman: 'khéek à-ròi mâak khráp', kana: 'ケーク アロイ マーク クラップ', en: 'The cake was delicious!', jp: 'ケーキおいしかった！', emoji: '🍰' },
          { thai: 'กลับบ้านแล้วนะครับ', roman: 'klàp bâan láew ná khráp', kana: 'グラップ バーン レーオ ナ クラップ', en: 'I\'m heading home now', jp: 'もうかえるね', emoji: '🏠' },
          { thai: 'เจอกันใหม่นะ', roman: 'joe kan mài ná', kana: 'ジュー ガン マイ ナ', en: 'See you again!', jp: 'またね！', emoji: '🤙' },
          { thai: 'ฝันดีนะครับ', roman: 'fǎn dii ná khráp', kana: 'ファン ディー ナ クラップ', en: 'Sweet dreams!', jp: 'おやすみ！', emoji: '🌙' },
          { thai: 'สุขสันต์วันเกิดอีกครั้งครับ', roman: 'sùk-sǎn wan-kòet ìik khráng khráp', kana: 'スックサン ワンクート イーク クラン クラップ', en: 'Happy birthday once more!', jp: 'もういちど、おめでとう！', emoji: '🎂' },
        ] },
    ],
    call: {
      label: 'Phîi-Fáa\'s Party!', blurb: 'It\'s your big cousin Phîi-Fáa\'s birthday — be the star guest!', homeEmoji: '🎂🎈',
      personaName: 'Phîi-Fáa', personaThai: 'พี่ฟ้า', personaRole: 'your big cousin', personaEmoji: '👧', personaPlace: 'the birthday party 🎂',
      steps: [
        { yaa: { thai: 'มาแล้วเหรอ! ดีใจจังเลยที่มา', roman: 'maa láew rǒe! dii-jai jang loei thîi maa', en: 'You came! I\'m so happy you\'re here!', jp: 'きたんだ！きてくれてうれしい！' },
          replies: [
            { thai: 'สุขสันต์วันเกิดครับพี่ฟ้า', roman: 'sùk-sǎn wan-kòet khráp phîi-fáa', kana: 'スックサン ワンクート クラップ ピーファー', en: 'Happy birthday, Phîi-Fáa!', emoji: '🎉' },
          ] },
        { yaa: { thai: 'ขอบใจจ้ะ! วันนี้พี่อายุสิบขวบแล้วนะ', roman: 'khàwp-jai jâ! wan-níi phîi aa-yú sìp khùap láew ná', en: 'Thank you! I\'m ten years old today!', jp: 'ありがとう！きょうで10さいだよ！' },
          replies: [
            { thai: 'ขอให้มีความสุขนะครับ', roman: 'khǎw hâi mii khwaam-sùk ná khráp', kana: 'コー ハイ ミー クワームスック ナ クラップ', en: 'Wishing you happiness!', emoji: '💖' },
            { thai: 'ขอให้มีความสุข ขอให้แข็งแรงนะครับ', roman: 'khǎw hâi mii khwaam-sùk, khǎw hâi khǎeng-raeng ná khráp', kana: 'コー ハイ ミー クワームスック、コー ハイ ケーンレーン ナ クラップ', en: 'Be happy AND healthy!', emoji: '💪', bonus: true },
          ] },
        { yaa: { thai: 'มาร้องเพลงวันเกิดกัน!', roman: 'maa ráwng phleeng wan-kòet kan!', en: 'Let\'s sing the birthday song!', jp: 'バースデーソングをうたおう！' },
          replies: [
            { thai: 'ร้องเพลงกันครับ แฮปปี้เบิร์ธเดย์!', roman: 'ráwng phleeng kan khráp, háep-pîi bòet-dee!', kana: 'ローン プレーン ガン クラップ、ヘッピー ブートデー！', en: 'Let\'s sing — happy birthday!', emoji: '🎤' },
            { thai: 'ปรบมือกันครับ!', roman: 'pròp mue kan khráp!', kana: 'プロップ ムー ガン クラップ！', en: 'Everybody clap!', emoji: '👏', bonus: true },
          ] },
        { yaa: { thai: 'พี่จะเป่าเทียนแล้วนะ', roman: 'phîi jà pào thian láew ná', en: 'I\'m going to blow out the candles!', jp: 'ろうそくをふきけすよ！' },
          replies: [
            { thai: 'เป่าเทียนเลยครับ', roman: 'pào thian loei khráp', kana: 'パオ ティアン ルーイ クラップ', en: 'Blow them out!', emoji: '💨' },
            { thai: 'อธิษฐานก่อนครับ!', roman: 'à-thít-thǎan kàwn khráp!', kana: 'アティッターン ゴーン クラップ！', en: 'Make a wish first!', emoji: '🌠', bonus: true },
          ] },
        { yaa: { thai: 'มากินเค้กกัน อยากได้ชิ้นไหนจ๊ะ', roman: 'maa kin khéek kan, yàak dâai chín nǎi já', en: 'Cake time! Which piece do you want?', jp: 'ケーキたべよう！どれがいい？' },
          replies: [
            { thai: 'ขอเค้กชิ้นใหญ่ครับ', roman: 'khǎw khéek chín yài khráp', kana: 'コー ケーク チン ヤイ クラップ', en: 'A big slice, please!', emoji: '😋' },
            { thai: 'ขอบคุณครับ หวานอร่อยจังครับ', roman: 'khàwp-khun khráp, wǎan à-ròi jang khráp', kana: 'コープクン クラップ、ワーン アロイ ジャン クラップ', en: 'Thank you — sweet and yummy!', emoji: '🍭', bonus: true },
          ] },
        { yaa: { thai: 'เอ๊ะ นี่อะไรเอ่ย ของขวัญเหรอ', roman: 'é, nîi à-rai òei, khǎwng-khwǎn rǒe', en: 'Ooh, what\'s this? A present?', jp: 'あれ、これなに？プレゼント？' },
          replies: [
            { thai: 'นี่ของขวัญครับ เปิดเลยครับ', roman: 'nîi khǎwng-khwǎn khráp, pòet loei khráp', kana: 'ニー コーンクワン クラップ、プート ルーイ クラップ', en: 'It\'s a present — open it!', emoji: '🎁' },
            { thai: 'เซอร์ไพรส์! ชอบไหมครับ', roman: 'soe-phrái! châwp mǎi khráp', kana: 'ソープライ！チョープ マイ クラップ', en: 'Surprise! Do you like it?', emoji: '🎊', bonus: true },
          ] },
        { yaa: { thai: 'ชอบมากเลย ขอบใจนะ วันนี้สนุกที่สุดเลย', roman: 'châwp mâak loei, khàwp-jai ná, wan-níi sà-nùk thîi-sùt loei', en: 'I love it, thank you! Today was the best!', jp: 'すごくきにいった、ありがとう！きょうはさいこう！' },
          replies: [
            { thai: 'ขอบคุณที่ชวนนะครับ เจอกันใหม่ครับ', roman: 'khàwp-khun thîi chuan ná khráp, joe kan mài khráp', kana: 'コープクン ティー チュアン ナ クラップ、ジュー ガン マイ クラップ', en: 'Thanks for inviting me — see you again!', emoji: '👋' },
          ] },
      ],
    },
    badges: [
      { id: 'bd-invite', emoji: '💌', name: 'Party Ready', desc: 'Got dressed and ready for the party!', when: { quest: 'invited', need: 'learn' } },
      { id: 'bd-singer', emoji: '🎤', name: 'Birthday Singer', desc: 'Mastered every birthday blessing!', when: { quest: 'hbd', need: 'complete' } },
      { id: 'bd-cake', emoji: '🍰', name: 'Cake Captain', desc: 'Mastered the cake & candles phrases!', when: { quest: 'cake', need: 'listen2' } },
      { id: 'bd-gift', emoji: '🎁', name: 'Gift Giver', desc: 'Learned to give a present the Thai way!', when: { quest: 'presents', need: 'learn' } },
      { id: 'bd-sport', emoji: '🎈', name: 'Good Sport', desc: 'Finished all the party games!', when: { quest: 'partygames', need: 'complete' } },
      { id: 'bd-call', emoji: '👧', name: 'Star Guest', desc: 'Celebrated Phîi-Fáa\'s whole birthday in Thai!', when: { call: true } },
      { id: 'bd-legend', emoji: '🎂', name: 'Birthday Legend', desc: 'Finished every single quest!', when: { allQuests: 'learn' } },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Mission: Getting Around — tuk-tuks, taxis, the sky train and
  // river boats. Finale is a city adventure with Uncle (ลุง).
  // ═══════════════════════════════════════════════════════════
  {
    id: 'transport', title: 'Mission: Getting Around', emoji: '🚕', color: 'orange',
    blurb: 'Tuk-tuks, taxis, sky trains and boats — zoom around Bangkok like a local! 💨',
    quests: [
      { id: 'rides', num: 1, title: 'What Should We Ride?', emoji: '🚦', color: 'teal',
        intro: 'Bangkok has the coolest rides in the world! Pick your favorite way to zoom around town.',
        phrases: [
          { thai: 'รถตุ๊กตุ๊ก', roman: 'rót túk-túk', kana: 'ロット トゥックトゥック', en: 'tuk-tuk', jp: 'トゥクトゥク', emoji: '🛺', tip: 'Thailand\'s most famous ride — three wheels, no doors, all fun! 🌟' },
          { thai: 'แท็กซี่', roman: 'tháek-sîi', kana: 'テックシー', en: 'taxi', jp: 'タクシー', emoji: '🚕' },
          { thai: 'รถไฟฟ้า', roman: 'rót-fai-fáa', kana: 'ロットファイファー', en: 'sky train (BTS)', jp: 'でんしゃ（BTS）', emoji: '🚝', tip: 'fai-fáa means electric — a train that flies above the streets! ⚡' },
          { thai: 'เรือ', roman: 'ruea', kana: 'ルア', en: 'boat', jp: 'ふね', emoji: '🚤' },
          { thai: 'รถเมล์', roman: 'rót-mee', kana: 'ロットメー', en: 'bus', jp: 'バス', emoji: '🚌' },
          { thai: 'นั่งอะไรดีครับ', roman: 'nâng à-rai dii khráp', kana: 'ナン アライ ディー クラップ', en: 'What should we ride?', jp: 'なにでいく？', emoji: '🤔' },
          { thai: 'ผมอยากนั่งตุ๊กตุ๊กครับ', roman: 'phǒm yàak nâng túk-túk khráp', kana: 'ポム ヤーク ナン トゥックトゥック クラップ', en: 'I want to ride a tuk-tuk!', jp: 'トゥクトゥクにのりたい！', emoji: '🙋' },
        ] },
      { id: 'taxi', num: 2, title: 'Tuk-Tuk & Taxi', emoji: '🛺', color: 'orange',
        intro: 'Hop in! Tell the driver where to go — left, right, straight, stop. YOU are the navigator now.',
        phrases: [
          { thai: 'ไปตลาดครับ', roman: 'pai tà-làat khráp', kana: 'パイ タラート クラップ', en: 'To the market, please!', jp: 'いちばまでおねがいします', emoji: '🏪', tip: 'Just say pai + the place — that\'s how you tell any driver where to go! 🗣️' },
          { thai: 'เลี้ยวซ้าย', roman: 'líao sáai', kana: 'リアオ サーイ', en: 'turn left', jp: 'ひだりにまがる', emoji: '⬅️' },
          { thai: 'เลี้ยวขวา', roman: 'líao khwǎa', kana: 'リアオ クワー', en: 'turn right', jp: 'みぎにまがる', emoji: '➡️' },
          { thai: 'ตรงไป', roman: 'trong pai', kana: 'トロン パイ', en: 'go straight', jp: 'まっすぐ', emoji: '⬆️' },
          { thai: 'จอดตรงนี้ครับ', roman: 'jàwt trong-níi khráp', kana: 'ジョート トロンニー クラップ', en: 'Stop here, please!', jp: 'ここでとめてください', emoji: '🛑', tip: 'The magic words to hop out exactly where you want! 📍' },
          { thai: 'ถึงแล้วครับ', roman: 'thǔeng láew khráp', kana: 'トゥン レーオ クラップ', en: 'We\'re here!', jp: 'つきました', emoji: '📍' },
          { thai: 'เร็วจังเลย', roman: 'reo jang loei', kana: 'レオ ジャン ルーイ', en: 'So fast!', jp: 'はやい！', emoji: '💨' },
        ] },
      { id: 'bts', num: 3, title: 'Sky Train Ride', emoji: '🚝', color: 'green',
        intro: 'Whoosh above the traffic on the BTS! Buy a ticket, mind the doors, and count the stations.',
        phrases: [
          { thai: 'สถานี', roman: 'sà-thǎa-nii', kana: 'サターニー', en: 'station', jp: 'えき', emoji: '🚉' },
          { thai: 'ซื้อตั๋วกัน', roman: 'súe tǔa kan', kana: 'スー トゥア ガン', en: 'Let\'s buy tickets', jp: 'きっぷをかおう', emoji: '🎫' },
          { thai: 'กี่สถานีครับ', roman: 'kìi sà-thǎa-nii khráp', kana: 'ギー サターニー クラップ', en: 'How many stations?', jp: 'いくつめのえき？', emoji: '🔢' },
          { thai: 'ระวังประตูนะครับ', roman: 'rá-wang prà-tuu ná khráp', kana: 'ラワン プラトゥー ナ クラップ', en: 'Watch the doors!', jp: 'ドアにきをつけて！', emoji: '⚠️' },
          { thai: 'คนเยอะจัง', roman: 'khon yóe jang', kana: 'コン ユ ジャン', en: 'So many people!', jp: 'ひとがいっぱい！', emoji: '👥' },
          { thai: 'ลงป้ายหน้าครับ', roman: 'long pâai nâa khráp', kana: 'ロン パーイ ナー クラップ', en: 'We get off at the next stop', jp: 'つぎでおりるよ', emoji: '🔔', tip: 'long = get off, khûen = get on — don\'t mix them up! 🔄' },
          { thai: 'ขอโทษครับ ขอทางหน่อยครับ', roman: 'khǎw-thôht khráp, khǎw thaang nòi khráp', kana: 'コートート クラップ、コー ターン ノイ クラップ', en: 'Excuse me, coming through!', jp: 'すみません、とおります', emoji: '🙇', tip: 'khǎw thaang = "may I have the way" — the polite squeeze-past! 🚶' },
        ] },
      { id: 'howfar', num: 4, title: 'Near or Far?', emoji: '🧭', color: 'purple',
        intro: 'Bangkok is big! Learn to ask how far, how long — and the famous Bangkok traffic jam word.',
        phrases: [
          { thai: 'ใกล้ไหมครับ', roman: 'klâi mǎi khráp', kana: 'クライ マイ クラップ', en: 'Is it near?', jp: 'ちかい？', emoji: '📏' },
          { thai: 'ไกลไหมครับ', roman: 'klai mǎi khráp', kana: 'クライ マイ クラップ', en: 'Is it far?', jp: 'とおい？', emoji: '🗺️', tip: 'klâi (falling) = near, klai (flat) = far — almost the same sound! Listen super closely! 👂' },
          { thai: 'อีกห้านาที', roman: 'ìik hâa naa-thii', kana: 'イーク ハー ナーティー', en: 'five more minutes', jp: 'あとごふん', emoji: '⏱️' },
          { thai: 'อีกนานไหมครับ', roman: 'ìik naan mǎi khráp', kana: 'イーク ナーン マイ クラップ', en: 'Is it much longer?', jp: 'まだかかる？', emoji: '⌛' },
          { thai: 'ใกล้ถึงแล้ว', roman: 'klâi thǔeng láew', kana: 'クライ トゥン レーオ', en: 'Almost there!', jp: 'もうすぐつく！', emoji: '🚩' },
          { thai: 'รถติดจัง', roman: 'rót tìt jang', kana: 'ロット ティット ジャン', en: 'Such a traffic jam!', jp: 'じゅうたいだ！', emoji: '🚗', tip: 'Bangkok is world-famous for rót tìt — everyone says this! 😅' },
          { thai: 'ไปทางไหนครับ', roman: 'pai thaang nǎi khráp', kana: 'パイ ターン ナイ クラップ', en: 'Which way do we go?', jp: 'どっちにいくの？', emoji: '🧭' },
        ] },
      { id: 'boat', num: 5, title: 'River Boat!', emoji: '🚤', color: 'gold',
        intro: 'The coolest ride of all — a boat on the Chao Phraya river! Feel the wind and watch the water.',
        phrases: [
          { thai: 'แม่น้ำ', roman: 'mâe-náam', kana: 'メーナーム', en: 'river', jp: 'かわ', emoji: '🏞️', tip: 'mâe-náam = "mother of water" — what a beautiful name for a river! 💙' },
          { thai: 'ขึ้นเรือกัน', roman: 'khûen ruea kan', kana: 'クン ルア ガン', en: 'Let\'s get on the boat', jp: 'ふねにのろう', emoji: '🛳️' },
          { thai: 'นั่งดีๆ นะครับ', roman: 'nâng dii-dii ná khráp', kana: 'ナン ディーディー ナ クラップ', en: 'Sit nice and safe!', jp: 'ちゃんとすわってね', emoji: '🪑' },
          { thai: 'เรือออกแล้ว', roman: 'ruea àwk láew', kana: 'ルア オーク レーオ', en: 'The boat is leaving!', jp: 'ふねがでるよ！', emoji: '🌊' },
          { thai: 'ลมเย็นจัง', roman: 'lom yen jang', kana: 'ロム イェン ジャン', en: 'The wind feels so cool!', jp: 'かぜがきもちいい！', emoji: '🍃' },
          { thai: 'ดูปลาสิครับ', roman: 'duu plaa sì khráp', kana: 'ドゥー プラー シ クラップ', en: 'Look at the fish!', jp: 'さかなをみて！', emoji: '🐟' },
          { thai: 'สนุกที่สุดเลย', roman: 'sà-nùk thîi-sùt loei', kana: 'サヌック ティースット ルーイ', en: 'The most fun ever!', jp: 'さいこうにたのしい！', emoji: '🥳' },
        ] },
    ],
    call: {
      label: 'Ride with Lung!', blurb: 'Uncle is taking you all around Bangkok — tuk-tuk, sky train and river boat!', homeEmoji: '🛺🚝',
      personaName: 'Lung', personaThai: 'ลุง', personaRole: 'Uncle', personaEmoji: '🧔', personaPlace: 'around Bangkok 🛺',
      steps: [
        { yaa: { thai: 'วันนี้ลุงจะพาเที่ยวรอบกรุงเทพฯ อยากนั่งอะไรจ๊ะ', roman: 'wan-níi lung jà phaa thîao râwp krung-thêep, yàak nâng à-rai já', en: 'Today Uncle\'s taking you around Bangkok! What do you want to ride?', jp: 'きょうはバンコクをまわるよ！なににのりたい？' },
          replies: [
            { thai: 'ผมอยากนั่งตุ๊กตุ๊กครับ', roman: 'phǒm yàak nâng túk-túk khráp', kana: 'ポム ヤーク ナン トゥックトゥック クラップ', en: 'I want to ride a tuk-tuk!', emoji: '🛺' },
          ] },
        { yaa: { thai: 'ตุ๊กตุ๊กมาแล้ว ขึ้นเลยหลาน', roman: 'túk-túk maa láew, khûen loei lǎan', en: 'The tuk-tuk\'s here — hop on!', jp: 'トゥクトゥクがきたよ、のって！' },
          replies: [
            { thai: 'ตื่นเต้นจังเลยครับ', roman: 'tùen-tên jang loei khráp', kana: 'トゥーンテン ジャン ルーイ クラップ', en: 'I\'m so excited!', emoji: '🤩' },
            { thai: 'เร็วจังเลยครับ สนุกจัง', roman: 'reo jang loei khráp, sà-nùk jang', kana: 'レオ ジャン ルーイ クラップ、サヌック ジャン', en: 'It\'s so fast — so fun!', emoji: '💨', bonus: true },
          ] },
        { yaa: { thai: 'เราจะไปตลาดกัน ลองบอกคนขับสิ', roman: 'rao jà pai tà-làat kan, lawng bàwk khon-khàp sì', en: 'We\'re going to the market — you tell the driver!', jp: 'いちばにいくよ。うんてんしゅさんにいってみて！' },
          replies: [
            { thai: 'ไปตลาดครับ', roman: 'pai tà-làat khráp', kana: 'パイ タラート クラップ', en: 'To the market, please!', emoji: '🏪' },
            { thai: 'ตรงไป แล้วเลี้ยวซ้ายครับ', roman: 'trong pai, láew líao sáai khráp', kana: 'トロン パイ、レーオ リアオ サーイ クラップ', en: 'Go straight, then turn left!', emoji: '⬅️', bonus: true },
          ] },
        { yaa: { thai: 'รถติดจังเลย นั่งรถไฟฟ้าดีกว่า', roman: 'rót tìt jang loei, nâng rót-fai-fáa dii kwàa', en: 'Such a traffic jam! Let\'s take the sky train instead.', jp: 'じゅうたいだね。でんしゃにしよう！' },
          replies: [
            { thai: 'ซื้อตั๋วกันครับ', roman: 'súe tǔa kan khráp', kana: 'スー トゥア ガン クラップ', en: 'Let\'s buy tickets!', emoji: '🎫' },
            { thai: 'ดีครับ กี่สถานีครับ', roman: 'dii khráp, kìi sà-thǎa-nii khráp', kana: 'ディー クラップ、ギー サターニー クラップ', en: 'Great! How many stations?', emoji: '🔢', bonus: true },
          ] },
        { yaa: { thai: 'คนเยอะหน่อยนะ เดี๋ยวลงป้ายหน้าจ้ะ', roman: 'khon yóe nòi ná, dǐao long pâai nâa jâ', en: 'It\'s a bit crowded — we get off at the next stop.', jp: 'ちょっとこんでるね。つぎでおりるよ。' },
          replies: [
            { thai: 'ขอโทษครับ ขอทางหน่อยครับ', roman: 'khǎw-thôht khráp, khǎw thaang nòi khráp', kana: 'コートート クラップ、コー ターン ノイ クラップ', en: 'Excuse me, coming through!', emoji: '🙇' },
            { thai: 'ครับ ระวังประตูนะครับลุง', roman: 'khráp, rá-wang prà-tuu ná khráp lung', kana: 'クラップ、ラワン プラトゥー ナ クラップ ルン', en: 'Okay — watch the doors, Uncle!', emoji: '⚠️', bonus: true },
          ] },
        { yaa: { thai: 'สุดท้าย นั่งเรือข้ามแม่น้ำกัน', roman: 'sùt-tháai, nâng ruea khâam mâe-náam kan', en: 'Last one — a boat across the river!', jp: 'さいごは、ふねでかわをわたろう！' },
          replies: [
            { thai: 'ขึ้นเรือกันครับ', roman: 'khûen ruea kan khráp', kana: 'クン ルア ガン クラップ', en: 'Let\'s get on the boat!', emoji: '🛳️' },
            { thai: 'ลมเย็นจังครับ ดูปลาสิครับ', roman: 'lom yen jang khráp, duu plaa sì khráp', kana: 'ロム イェン ジャン クラップ、ドゥー プラー シ クラップ', en: 'The wind is so cool — look at the fish!', emoji: '🐟', bonus: true },
          ] },
        { yaa: { thai: 'ถึงบ้านแล้ว วันนี้เป็นยังไงบ้างหลาน', roman: 'thǔeng bâan láew, wan-níi pen yang-ngai bâang lǎan', en: 'We\'re home! How was today?', jp: 'おうちについたよ。きょうはどうだった？' },
          replies: [
            { thai: 'สนุกที่สุดเลยครับ ขอบคุณครับลุง', roman: 'sà-nùk thîi-sùt loei khráp, khàwp-khun khráp lung', kana: 'サヌック ティースット ルーイ クラップ、コープクン クラップ ルン', en: 'The most fun ever — thank you, Uncle!', emoji: '🥳' },
          ] },
      ],
    },
    badges: [
      { id: 'go-picker', emoji: '🚦', name: 'Ride Picker', desc: 'Learned every Bangkok ride!', when: { quest: 'rides', need: 'learn' } },
      { id: 'go-tuktuk', emoji: '🛺', name: 'Tuk-Tuk Navigator', desc: 'Told the driver exactly where to go!', when: { quest: 'taxi', need: 'complete' } },
      { id: 'go-bts', emoji: '🚝', name: 'Sky Train Rider', desc: 'Mastered the sky train phrases!', when: { quest: 'bts', need: 'listen2' } },
      { id: 'go-nearfar', emoji: '🧭', name: 'Near-or-Far Pro', desc: 'Learned to ask how far and how long!', when: { quest: 'howfar', need: 'learn' } },
      { id: 'go-boat', emoji: '🚤', name: 'River Explorer', desc: 'Finished the whole river boat ride!', when: { quest: 'boat', need: 'complete' } },
      { id: 'go-call', emoji: '🧔', name: 'Lung\'s Navigator', desc: 'Rode all around Bangkok with Uncle!', when: { call: true } },
      { id: 'go-legend', emoji: '🚕', name: 'City Zoomer', desc: 'Finished every single quest!', when: { allQuests: 'learn' } },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Mission: Cooking with Grandma — ingredients, chef moves and
  // taste-testing. Finale is making fried rice with Yâa (ย่า,
  // dad's side — the other grandma from the Bangkok call).
  // ═══════════════════════════════════════════════════════════
  {
    id: 'cook', title: 'Mission: Cooking with Grandma', emoji: '🍳', color: 'green',
    blurb: 'Put on your apron — you\'re Yâa\'s little chef today! 👨‍🍳',
    quests: [
      { id: 'kitchen', num: 1, title: 'In the Kitchen', emoji: '🍳', color: 'teal',
        intro: 'Yâa is cooking something amazing and YOU get to help. Wash up, apron on — chef mode: ON!',
        phrases: [
          { thai: 'ครัว', roman: 'khrua', kana: 'クルア', en: 'kitchen', jp: 'キッチン', emoji: '🍳' },
          { thai: 'ทำกับข้าวกัน', roman: 'tham kàp-khâao kan', kana: 'タム カップカーオ ガン', en: 'Let\'s cook!', jp: 'りょうりしよう！', emoji: '👨‍🍳', tip: 'kàp-khâao means the yummy dishes you eat WITH rice! 🍚' },
          { thai: 'ผมเป็นผู้ช่วยครับ', roman: 'phǒm pen phûu-chûai khráp', kana: 'ポム ペン プーチュアイ クラップ', en: 'I\'m the helper!', jp: 'ぼくはおてつだいさん！', emoji: '🙋' },
          { thai: 'ล้างมือก่อนครับ', roman: 'láang mue kàwn khráp', kana: 'ラーン ムー ゴーン クラップ', en: 'Wash hands first!', jp: 'まずてをあらう！', emoji: '🧼' },
          { thai: 'ใส่ผ้ากันเปื้อน', roman: 'sài phâa-kan-pûean', kana: 'サイ パーガンプアン', en: 'put on an apron', jp: 'エプロンをつける', emoji: '🥼', tip: 'kan-pûean means "blocks the mess" — an apron is mess armor! 🛡️' },
          { thai: 'ทำอะไรดีครับ', roman: 'tham à-rai dii khráp', kana: 'タム アライ ディー クラップ', en: 'What should we make?', jp: 'なにをつくる？', emoji: '🤔' },
          { thai: 'ให้ผมทำอะไรครับ', roman: 'hâi phǒm tham à-rai khráp', kana: 'ハイ ポム タム アライ クラップ', en: 'What can I do?', jp: 'なにをすればいい？', emoji: '💪' },
        ] },
      { id: 'ingredients', num: 2, title: 'Yummy Ingredients', emoji: '🥚', color: 'orange',
        intro: 'A great chef knows every ingredient! These are the stars of Thai cooking.',
        phrases: [
          { thai: 'ข้าว', roman: 'khâao', kana: 'カーオ', en: 'rice', jp: 'ごはん・おこめ', emoji: '🍚' },
          { thai: 'ไข่', roman: 'khài', kana: 'カイ', en: 'egg', jp: 'たまご', emoji: '🥚' },
          { thai: 'ไก่', roman: 'kài', kana: 'ガイ', en: 'chicken', jp: 'とりにく', emoji: '🍗', tip: 'khài (egg) and kài (chicken) sound almost the same — which came first?! 😄' },
          { thai: 'หมู', roman: 'mǔu', kana: 'ムー', en: 'pork', jp: 'ぶたにく', emoji: '🥓' },
          { thai: 'กุ้ง', roman: 'kûng', kana: 'グン', en: 'shrimp', jp: 'えび', emoji: '🦐' },
          { thai: 'ผัก', roman: 'phàk', kana: 'パック', en: 'vegetables', jp: 'やさい', emoji: '🥬' },
          { thai: 'น้ำปลา', roman: 'náam-plaa', kana: 'ナームプラー', en: 'fish sauce', jp: 'ナンプラー', emoji: '🧂', tip: 'The magic Thai flavor — a few drops make everything delicious! ✨' },
          { thai: 'พริก', roman: 'phrík', kana: 'プリック', en: 'chili', jp: 'とうがらし', emoji: '🌶️' },
        ] },
      { id: 'chefmoves', num: 3, title: 'Little Chef Moves', emoji: '🥄', color: 'purple',
        intro: 'Crack, stir, fry! These are the action words every chef shouts in the kitchen.',
        phrases: [
          { thai: 'ตอกไข่', roman: 'tàwk khài', kana: 'トーク カイ', en: 'crack the egg', jp: 'たまごをわる', emoji: '🥚' },
          { thai: 'คนให้เข้ากัน', roman: 'khon hâi khâo kan', kana: 'コン ハイ カオ ガン', en: 'stir it all together', jp: 'まぜまぜする', emoji: '🥄', tip: 'khon here means "stir" — same sound as "person"! Thai loves twin words. 😲' },
          { thai: 'ผัดเลย', roman: 'phàt loei', kana: 'パット ルーイ', en: 'stir-fry it!', jp: 'いためる！', emoji: '🍳', tip: 'phàt = stir-fry — that\'s the phàt in khâao phàt (fried rice)! 🍛' },
          { thai: 'ใส่ข้าว', roman: 'sài khâao', kana: 'サイ カーオ', en: 'add the rice', jp: 'ごはんをいれる', emoji: '🍚' },
          { thai: 'ระวังร้อนนะ', roman: 'rá-wang ráwn ná', kana: 'ラワン ローン ナ', en: 'Careful, it\'s hot!', jp: 'あついからきをつけて！', emoji: '🔥' },
          { thai: 'หอมจัง', roman: 'hǎwm jang', kana: 'ホーム ジャン', en: 'Smells SO good!', jp: 'いいにおい！', emoji: '👃', tip: 'Say this while sniffing the air — the cook will beam with pride! 😊' },
          { thai: 'เสร็จแล้ว', roman: 'sèt láew', kana: 'セット レーオ', en: 'It\'s done!', jp: 'できた！', emoji: '✅' },
        ] },
      { id: 'taste', num: 4, title: 'Taste Test', emoji: '😋', color: 'gold',
        intro: 'The chef\'s most important job: the taste test! Too salty? Too spicy? Or juuust right?',
        phrases: [
          { thai: 'ชิมหน่อย', roman: 'chim nòi', kana: 'チム ノイ', en: 'have a little taste', jp: 'あじみして', emoji: '👅', tip: 'chim = taste-test — the chef\'s favorite job in the whole kitchen! 🥄' },
          { thai: 'อร่อยไหมครับ', roman: 'à-ròi mǎi khráp', kana: 'アロイ マイ クラップ', en: 'Is it yummy?', jp: 'おいしい？', emoji: '😊' },
          { thai: 'อร่อยมาก', roman: 'à-ròi mâak', kana: 'アロイ マーク', en: 'SO delicious!', jp: 'すごくおいしい！', emoji: '😋' },
          { thai: 'เค็มไปนิด', roman: 'khem pai nít', kana: 'ケム パイ ニット', en: 'a little too salty', jp: 'ちょっとしょっぱい', emoji: '🧂' },
          { thai: 'เผ็ดไปหน่อย', roman: 'phèt pai nòi', kana: 'ペット パイ ノイ', en: 'a bit too spicy', jp: 'ちょっとからい', emoji: '🌶️' },
          { thai: 'กำลังดีเลย', roman: 'kam-lang dii loei', kana: 'ガムラン ディー ルーイ', en: 'Just right!', jp: 'ちょうどいい！', emoji: '👌', tip: 'kam-lang dii = "exactly perfect" — the best thing a taste-tester can say! 🌟' },
          { thai: 'ขออีกหน่อยครับ', roman: 'khǎw ìik nòi khráp', kana: 'コー イーク ノイ クラップ', en: 'A little more, please!', jp: 'もうちょっとちょうだい！', emoji: '🍴' },
        ] },
      { id: 'serve', num: 5, title: 'Dinner Is Served!', emoji: '🍽️', color: 'red',
        intro: 'Ding! Your dish is ready. Call everyone to the table and serve it like a proud chef.',
        phrases: [
          { thai: 'อาหารเสร็จแล้วครับ', roman: 'aa-hǎan sèt láew khráp', kana: 'アーハーン セット レーオ クラップ', en: 'The food is ready!', jp: 'ごはんできたよ！', emoji: '🔔' },
          { thai: 'มากินกันเถอะ', roman: 'maa kin kan thòe', kana: 'マー キン ガン トゥ', en: 'Come and eat!', jp: 'たべにきて！', emoji: '🍽️' },
          { thai: 'ผมทำเองครับ', roman: 'phǒm tham eeng khráp', kana: 'ポム タム エーン クラップ', en: 'I made it myself!', jp: 'じぶんでつくったよ！', emoji: '😏', tip: 'The proudest sentence a little chef can say! 🏆' },
          { thai: 'อันนี้ของย่าครับ', roman: 'an-níi khǎwng yâa khráp', kana: 'アンニー コーン ヤー クラップ', en: 'This one is for you, Yâa!', jp: 'これはおばあちゃんの！', emoji: '🤲' },
          { thai: 'กินข้าวกันครับ', roman: 'kin khâao kan khráp', kana: 'キン カーオ ガン クラップ', en: 'Let\'s eat!', jp: 'いただきます！', emoji: '🙏' },
          { thai: 'อร่อยที่สุดในโลก', roman: 'à-ròi thîi-sùt nai lôok', kana: 'アロイ ティースット ナイ ローク', en: 'The most delicious in the world!', jp: 'せかいいちおいしい！', emoji: '🌍', tip: 'nai lôok = "in the world" — for when something is THE champion! 🥇' },
          { thai: 'ผมจะทำอีกครับ', roman: 'phǒm jà tham ìik khráp', kana: 'ポム ジャ タム イーク クラップ', en: 'I\'ll cook again!', jp: 'またつくるね！', emoji: '👨‍🍳' },
        ] },
    ],
    call: {
      label: 'Cook with Yâa!', blurb: 'Make real Thai fried rice with Grandma Yâa — you\'re the little chef!', homeEmoji: '🍳👵🏽',
      personaName: 'Yâa', personaThai: 'ย่า', personaRole: 'Grandma (dad\'s side)', personaEmoji: '👵🏽', personaPlace: 'Yâa\'s kitchen 🍳',
      steps: [
        { yaa: { thai: 'วันนี้ย่าจะสอนทำข้าวผัด อยากช่วยไหมจ๊ะ', roman: 'wan-níi yâa jà sǎwn tham khâao phàt, yàak chûai mǎi já', en: 'Today I\'ll teach you fried rice — want to help?', jp: 'きょうはチャーハンをおしえるよ。てつだいたい？' },
          replies: [
            { thai: 'อยากช่วยครับ ผมเป็นผู้ช่วยครับ', roman: 'yàak chûai khráp, phǒm pen phûu-chûai khráp', kana: 'ヤーク チュアイ クラップ、ポム ペン プーチュアイ クラップ', en: 'Yes! I\'m the helper!', emoji: '🙋' },
          ] },
        { yaa: { thai: 'ดีมาก ไปล้างมือแล้วใส่ผ้ากันเปื้อนนะ', roman: 'dii mâak, pai láang mue láew sài phâa-kan-pûean ná', en: 'Great — wash your hands and put on an apron.', jp: 'いいね。てをあらってエプロンをつけてね。' },
          replies: [
            { thai: 'ครับ ล้างมือก่อนครับ', roman: 'khráp, láang mue kàwn khráp', kana: 'クラップ、ラーン ムー ゴーン クラップ', en: 'Okay, washing hands first!', emoji: '🧼' },
            { thai: 'เรียบร้อยครับ ให้ผมทำอะไรครับ', roman: 'rîap-rói khráp, hâi phǒm tham à-rai khráp', kana: 'リアップローイ クラップ、ハイ ポム タム アライ クラップ', en: 'All done — what can I do?', emoji: '💪', bonus: true },
          ] },
        { yaa: { thai: 'ตอกไข่ใส่ชามหน่อยจ้ะ', roman: 'tàwk khài sài chaam nòi jâ', en: 'Crack an egg into the bowl, please.', jp: 'たまごをわってボウルにいれてね。' },
          replies: [
            { thai: 'ตอกไข่แล้วครับ', roman: 'tàwk khài láew khráp', kana: 'トーク カイ レーオ クラップ', en: 'Egg cracked!', emoji: '🥚' },
            { thai: 'เสร็จแล้วครับ คนให้เข้ากันไหมครับ', roman: 'sèt láew khráp, khon hâi khâo kan mǎi khráp', kana: 'セット レーオ クラップ、コン ハイ カオ ガン マイ クラップ', en: 'Done — shall I stir it together?', emoji: '🥄', bonus: true },
          ] },
        { yaa: { thai: 'เก่งมาก ทีนี้ใส่ข้าวแล้วผัดเลยจ้ะ', roman: 'kèng mâak, thii-níi sài khâao láew phàt loei jâ', en: 'Well done! Now add the rice and stir-fry!', jp: 'じょうず！つぎはごはんをいれていためて！' },
          replies: [
            { thai: 'ใส่ข้าวแล้วผัดเลยครับ', roman: 'sài khâao láew phàt loei khráp', kana: 'サイ カーオ レーオ パット ルーイ クラップ', en: 'Rice in — stir-frying!', emoji: '🍳' },
            { thai: 'หอมจังเลยครับ', roman: 'hǎwm jang loei khráp', kana: 'ホーム ジャン ルーイ クラップ', en: 'It smells SO good!', emoji: '👃', bonus: true },
          ] },
        { yaa: { thai: 'ระวังกระทะร้อนนะจ๊ะ', roman: 'rá-wang krà-thá ráwn ná já', en: 'Careful — the pan is hot!', jp: 'フライパンがあついから、きをつけてね！' },
          replies: [
            { thai: 'ครับ ผมระวังครับ', roman: 'khráp, phǒm rá-wang khráp', kana: 'クラップ、ポム ラワン クラップ', en: 'Okay, I\'m being careful!', emoji: '🔥' },
          ] },
        { yaa: { thai: 'ชิมหน่อยสิจ๊ะ เป็นยังไง', roman: 'chim nòi sì já, pen yang-ngai', en: 'Have a taste — how is it?', jp: 'あじみしてみて。どう？' },
          replies: [
            { thai: 'อร่อยมากครับ กำลังดีเลยครับ', roman: 'à-ròi mâak khráp, kam-lang dii loei khráp', kana: 'アロイ マーク クラップ、ガムラン ディー ルーイ クラップ', en: 'Delicious — just right!', emoji: '👌' },
            { thai: 'อร่อยครับ ขออีกหน่อยครับ', roman: 'à-ròi khráp, khǎw ìik nòi khráp', kana: 'アロイ クラップ、コー イーク ノイ クラップ', en: 'Yummy — a little more, please!', emoji: '😋', bonus: true },
          ] },
        { yaa: { thai: 'เสร็จแล้วจ้ะ ข้าวผัดฝีมือหลานย่าเอง', roman: 'sèt láew jâ, khâao phàt fǐi-mue lǎan yâa eeng', en: 'All done — fried rice made by my own grandchild!', jp: 'かんせい！まごがつくったチャーハンよ！' },
          replies: [
            { thai: 'ผมทำเองครับ อร่อยที่สุดในโลกครับ', roman: 'phǒm tham eeng khráp, à-ròi thîi-sùt nai lôok khráp', kana: 'ポム タム エーン クラップ、アロイ ティースット ナイ ローク クラップ', en: 'I made it myself — most delicious in the world!', emoji: '🌍' },
          ] },
      ],
    },
    badges: [
      { id: 'cook-apron', emoji: '🥼', name: 'Apron On', desc: 'Suited up and ready to cook!', when: { quest: 'kitchen', need: 'learn' } },
      { id: 'cook-market', emoji: '🥚', name: 'Ingredient Expert', desc: 'Mastered every ingredient name!', when: { quest: 'ingredients', need: 'listen2' } },
      { id: 'cook-chef', emoji: '🥄', name: 'Little Chef', desc: 'Cracked, stirred and fried like a pro!', when: { quest: 'chefmoves', need: 'complete' } },
      { id: 'cook-taster', emoji: '😋', name: 'Taste Tester', desc: 'Learned all the taste-test words!', when: { quest: 'taste', need: 'learn' } },
      { id: 'cook-server', emoji: '🍽️', name: 'Proud Server', desc: 'Served dinner like a real chef!', when: { quest: 'serve', need: 'complete' } },
      { id: 'cook-call', emoji: '👵🏽', name: 'Yâa\'s Little Chef', desc: 'Cooked a whole dish with Grandma Yâa!', when: { call: true } },
      { id: 'cook-legend', emoji: '🍳', name: 'Kitchen Superstar', desc: 'Finished every single quest!', when: { allQuests: 'learn' } },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // Mission: Loy Krathong — the November festival of floating
  // lights (pairs with Songkran). Finale is floating a krathong
  // by the river with Grandpa Taa (ตา, mom's side).
  // ═══════════════════════════════════════════════════════════
  {
    id: 'loy', title: 'Mission: Loy Krathong', emoji: '🪔', color: 'purple',
    blurb: 'A magical night of floating lights — celebrate Loy Krathong by the river! 🌕',
    quests: [
      { id: 'fullmoon', num: 1, title: 'Full Moon Night', emoji: '🌕', color: 'purple',
        intro: 'Tonight is special — the full moon of Loy Krathong! The whole town is heading to the river.',
        phrases: [
          { thai: 'วันลอยกระทง', roman: 'wan loi krà-thong', kana: 'ワン ローイ クラトン', en: 'Loy Krathong Day', jp: 'ロイクラトンのひ', emoji: '🪔', tip: 'Thailand\'s festival of floating lights — on the full moon of November! 🌕' },
          { thai: 'คืนนี้พระจันทร์เต็มดวง', roman: 'khuen-níi phrá-jan tem duang', kana: 'クーンニー プラジャン テム ドゥアン', en: 'Tonight is a full moon', jp: 'こんやはまんげつ', emoji: '🌕' },
          { thai: 'พระจันทร์สวยจัง', roman: 'phrá-jan sǔai jang', kana: 'プラジャン スワイ ジャン', en: 'The moon is so pretty!', jp: 'つきがきれい！', emoji: '🌝' },
          { thai: 'ไปลอยกระทงกัน', roman: 'pai loi krà-thong kan', kana: 'パイ ローイ クラトン ガン', en: 'Let\'s go float krathongs!', jp: 'ロイクラトンにいこう！', emoji: '🏮' },
          { thai: 'ริมน้ำ', roman: 'rim-náam', kana: 'リムナーム', en: 'riverside', jp: 'かわべ', emoji: '🌊' },
          { thai: 'คนเยอะจัง', roman: 'khon yóe jang', kana: 'コン ユ ジャン', en: 'So many people!', jp: 'ひとがいっぱい！', emoji: '👥' },
          { thai: 'คืนนี้สนุกแน่เลย', roman: 'khuen-níi sà-nùk nâe loei', kana: 'クーンニー サヌック ネー ルーイ', en: 'Tonight will be so fun!', jp: 'こんやはぜったいたのしい！', emoji: '🎉' },
        ] },
      { id: 'makekrathong', num: 2, title: 'Make a Krathong', emoji: '🌸', color: 'pink',
        intro: 'Time to build your own little float — banana leaves, flowers, a candle. Make it beautiful!',
        phrases: [
          { thai: 'กระทง', roman: 'krà-thong', kana: 'クラトン', en: 'krathong (little float)', jp: 'クラトン（うきかご）', emoji: '🪷', tip: 'A little floating basket of banana leaves and flowers — you set it on the river! 🌊' },
          { thai: 'ใบตอง', roman: 'bai-tawng', kana: 'バイトーン', en: 'banana leaf', jp: 'バナナのは', emoji: '🍃' },
          { thai: 'ดอกไม้', roman: 'dàwk-máai', kana: 'ドークマーイ', en: 'flower', jp: 'はな', emoji: '🌸' },
          { thai: 'เทียน', roman: 'thian', kana: 'ティアン', en: 'candle', jp: 'ろうそく', emoji: '🕯️' },
          { thai: 'ธูป', roman: 'thûup', kana: 'トゥープ', en: 'incense sticks', jp: 'おせんこう', emoji: '🎋' },
          { thai: 'ช่วยทำกระทงหน่อยครับ', roman: 'chûai tham krà-thong nòi khráp', kana: 'チュアイ タム クラトン ノイ クラップ', en: 'Help me make a krathong, please!', jp: 'クラトンづくりをてつだって！', emoji: '🤲' },
          { thai: 'เสร็จแล้ว สวยมาก', roman: 'sèt láew, sǔai mâak', kana: 'セット レーオ、スワイ マーク', en: 'Done — it\'s so pretty!', jp: 'できた、すごくきれい！', emoji: '✨' },
        ] },
      { id: 'floatit', num: 3, title: 'Float It!', emoji: '🪔', color: 'teal',
        intro: 'Down at the water\'s edge, light your candle, make a wish, and let your krathong sail away.',
        phrases: [
          { thai: 'ลอยกระทงกันเลย', roman: 'loi krà-thong kan loei', kana: 'ローイ クラトン ガン ルーイ', en: 'Let\'s float our krathongs!', jp: 'クラトンをながそう！', emoji: '🪔' },
          { thai: 'จุดเทียนก่อน', roman: 'jùt thian kàwn', kana: 'ジュット ティアン ゴーン', en: 'Light the candle first', jp: 'さきにろうそくにひをつけて', emoji: '🔥' },
          { thai: 'ค่อยๆ นะครับ', roman: 'khôi-khôi ná khráp', kana: 'コイコイ ナ クラップ', en: 'Gently, gently!', jp: 'そーっとね！', emoji: '🤲', tip: 'khôi-khôi means slowly and softly — don\'t tip your krathong! 🪷' },
          { thai: 'อธิษฐานนะ', roman: 'à-thít-thǎan ná', kana: 'アティッターン ナ', en: 'Make a wish', jp: 'おねがいごとをしてね', emoji: '🌠' },
          { thai: 'ขอให้ครอบครัวมีความสุข', roman: 'khǎw hâi khrâwp-khrua mii khwaam-sùk', kana: 'コー ハイ クロープクルア ミー クワームスック', en: 'May my family be happy', jp: 'かぞくがしあわせでありますように', emoji: '💖', tip: 'khrâwp-khrua = family — the sweetest wish of all! 👨‍👩‍👧‍👦' },
          { thai: 'ลอยไปแล้ว', roman: 'loi pai láew', kana: 'ローイ パイ レーオ', en: 'It\'s floating away!', jp: 'ながれていった！', emoji: '🌊' },
          { thai: 'ดูสิ ไฟเต็มแม่น้ำเลย', roman: 'duu sì, fai tem mâe-náam loei', kana: 'ドゥー シ、ファイ テム メーナーム ルーイ', en: 'Look — the river is full of lights!', jp: 'みて、かわがひかりでいっぱい！', emoji: '✨' },
        ] },
      { id: 'lanterns', num: 4, title: 'Lights & Lanterns', emoji: '🏮', color: 'gold',
        intro: 'Look up! Sky lanterns and fireworks are filling the night. It\'s the most magical sky of the year.',
        phrases: [
          { thai: 'โคมลอย', roman: 'khoom-loi', kana: 'コームローイ', en: 'sky lantern', jp: 'スカイランタン', emoji: '🏮', tip: 'In Chiang Mai, thousands of lanterns float into the sky at once! 🌌' },
          { thai: 'ปล่อยโคมกัน', roman: 'plòi khoom kan', kana: 'プロイ コーム ガン', en: 'Let\'s release the lantern', jp: 'ランタンをとばそう', emoji: '🎈' },
          { thai: 'ไฟสวยจัง', roman: 'fai sǔai jang', kana: 'ファイ スワイ ジャン', en: 'The lights are so pretty!', jp: 'ひかりがきれい！', emoji: '✨' },
          { thai: 'เต็มท้องฟ้าเลย', roman: 'tem tháwng-fáa loei', kana: 'テム トーンファー ルーイ', en: 'They fill the whole sky!', jp: 'そらいっぱい！', emoji: '🌌' },
          { thai: 'ดอกไม้ไฟ', roman: 'dàwk-máai-fai', kana: 'ドークマーイファイ', en: 'fireworks', jp: 'はなび', emoji: '🎆', tip: 'dàwk-máai-fai = "fire flowers" — what a perfect name for fireworks! 🌸' },
          { thai: 'ถ่ายรูปกันครับ', roman: 'thàai rûup kan khráp', kana: 'ターイ ループ ガン クラップ', en: 'Let\'s take a photo!', jp: 'しゃしんをとろう！', emoji: '📸' },
          { thai: 'ว้าว สวยที่สุดเลย', roman: 'wáao, sǔai thîi-sùt loei', kana: 'ワーオ、スワイ ティースット ルーイ', en: 'Wow — the most beautiful ever!', jp: 'わあ、さいこうにきれい！', emoji: '🤩' },
        ] },
      { id: 'festfood', num: 5, title: 'Festival Treats', emoji: '🍢', color: 'orange',
        intro: 'Festival food stalls everywhere! Follow your nose to the yummiest night snacks in Thailand.',
        phrases: [
          { thai: 'ขนม', roman: 'khà-nǒm', kana: 'カノム', en: 'sweets / snacks', jp: 'おかし', emoji: '🍬' },
          { thai: 'กล้วยทอด', roman: 'klûai thâwt', kana: 'クルアイ トート', en: 'fried banana', jp: 'あげバナナ', emoji: '🍌', tip: 'Crunchy outside, sweet inside — a Thai street-food superstar! ⭐' },
          { thai: 'สายไหม', roman: 'sǎai-mǎi', kana: 'サーイマイ', en: 'cotton candy', jp: 'わたあめ', emoji: '🍭' },
          { thai: 'ลูกชิ้นปิ้ง', roman: 'lûuk-chín pîng', kana: 'ルークチン ピン', en: 'grilled meatballs', jp: 'やきだんご', emoji: '🍢' },
          { thai: 'ขอลองอันนี้ครับ', roman: 'khǎw lawng an-níi khráp', kana: 'コー ローン アンニー クラップ', en: 'Can I try this one?', jp: 'これためしていい？', emoji: '👉', tip: 'lawng = try — the best word at a night market! 🌙' },
          { thai: 'หอมน่ากินจัง', roman: 'hǎwm nâa-kin jang', kana: 'ホーム ナーギン ジャン', en: 'It smells delicious!', jp: 'おいしそうなにおい！', emoji: '👃' },
          { thai: 'อิ่มแล้ว อร่อยมาก', roman: 'ìm láew, à-ròi mâak', kana: 'イム レーオ、アロイ マーク', en: 'I\'m full — that was delicious!', jp: 'おなかいっぱい、おいしかった！', emoji: '😋' },
        ] },
    ],
    call: {
      label: 'Loy Krathong with Taa!', blurb: 'Float a krathong under the full moon with Grandpa Taa!', homeEmoji: '🪔🌕',
      personaName: 'Taa', personaThai: 'ตา', personaRole: 'Grandpa (mom\'s side)', personaEmoji: '👴', personaPlace: 'the riverside 🌕',
      steps: [
        { yaa: { thai: 'คืนนี้วันลอยกระทง ไปลอยกระทงกับตาไหมจ๊ะ', roman: 'khuen-níi wan loi krà-thong, pai loi krà-thong kàp taa mǎi já', en: 'Tonight is Loy Krathong — want to go float krathongs with Grandpa?', jp: 'こんやはロイクラトンだよ。いっしょにいく？' },
          replies: [
            { thai: 'ไปครับ! ตื่นเต้นจังครับ', roman: 'pai khráp! tùen-tên jang khráp', kana: 'パイ クラップ！トゥーンテン ジャン クラップ', en: 'Yes! I\'m so excited!', emoji: '🤩' },
          ] },
        { yaa: { thai: 'ก่อนอื่นมาทำกระทงกัน ช่วยตาหน่อยนะ', roman: 'kàwn ùen maa tham krà-thong kan, chûai taa nòi ná', en: 'First let\'s make our krathongs — help me out!', jp: 'まずクラトンをつくろう。てつだってね！' },
          replies: [
            { thai: 'ครับ ขอใบตองกับดอกไม้ครับ', roman: 'khráp, khǎw bai-tawng kàp dàwk-máai khráp', kana: 'クラップ、コー バイトーン カップ ドークマーイ クラップ', en: 'Okay — banana leaves and flowers, please!', emoji: '🌸' },
            { thai: 'เสร็จแล้วครับ กระทงผมสวยไหมครับ', roman: 'sèt láew khráp, krà-thong phǒm sǔai mǎi khráp', kana: 'セット レーオ クラップ、クラトン ポム スワイ マイ クラップ', en: 'Done! Is my krathong pretty?', emoji: '✨', bonus: true },
          ] },
        { yaa: { thai: 'สวยมากจ้ะ ทีนี้จุดเทียนกับธูป ระวังร้อนนะ', roman: 'sǔai mâak jâ, thii-níi jùt thian kàp thûup, rá-wang ráwn ná', en: 'Beautiful! Now light the candle and incense — careful, it\'s hot.', jp: 'きれいね！ろうそくとおせんこうにひをつけて。あついからきをつけて。' },
          replies: [
            { thai: 'ครับ ค่อยๆ ครับ', roman: 'khráp, khôi-khôi khráp', kana: 'クラップ、コイコイ クラップ', en: 'Okay — gently, gently!', emoji: '🕯️' },
            { thai: 'จุดเทียนแล้วครับ ไฟสวยจังครับ', roman: 'jùt thian láew khráp, fai sǔai jang khráp', kana: 'ジュット ティアン レーオ クラップ、ファイ スワイ ジャン クラップ', en: 'Candle lit — the flame is so pretty!', emoji: '🔥', bonus: true },
          ] },
        { yaa: { thai: 'ก่อนลอย อธิษฐานก่อนนะหลาน', roman: 'kàwn loi, à-thít-thǎan kàwn ná lǎan', en: 'Before we float them, make a wish.', jp: 'ながすまえに、おねがいごとをしてね。' },
          replies: [
            { thai: 'อธิษฐานแล้วครับ', roman: 'à-thít-thǎan láew khráp', kana: 'アティッターン レーオ クラップ', en: 'I made my wish!', emoji: '🌠' },
            { thai: 'ขอให้ครอบครัวมีความสุขครับ', roman: 'khǎw hâi khrâwp-khrua mii khwaam-sùk khráp', kana: 'コー ハイ クロープクルア ミー クワームスック クラップ', en: 'May our family be happy!', emoji: '💖', bonus: true },
          ] },
        { yaa: { thai: 'ลอยเลยจ้ะ ค่อยๆ วางนะ', roman: 'loi loei jâ, khôi-khôi waang ná', en: 'Float it now — set it down gently.', jp: 'さあながして。そーっとおいてね。' },
          replies: [
            { thai: 'ลอยไปแล้วครับ สวยจังครับ', roman: 'loi pai láew khráp, sǔai jang khráp', kana: 'ローイ パイ レーオ クラップ、スワイ ジャン クラップ', en: 'It\'s floating away — so pretty!', emoji: '🌊' },
            { thai: 'ดูสิครับ ไฟเต็มแม่น้ำเลยครับ', roman: 'duu sì khráp, fai tem mâe-náam loei khráp', kana: 'ドゥー シ クラップ、ファイ テム メーナーム ルーイ クラップ', en: 'Look — the river is full of lights!', emoji: '✨', bonus: true },
          ] },
        { yaa: { thai: 'ดูบนฟ้าสิ โคมลอยเต็มเลย', roman: 'duu bon fáa sì, khoom-loi tem loei', en: 'Look up — the sky is full of lanterns!', jp: 'そらをみて。ランタンでいっぱいだよ！' },
          replies: [
            { thai: 'ว้าว เต็มท้องฟ้าเลยครับ', roman: 'wáao, tem tháwng-fáa loei khráp', kana: 'ワーオ、テム トーンファー ルーイ クラップ', en: 'Wow — they fill the whole sky!', emoji: '🌌' },
            { thai: 'สวยที่สุดเลยครับ ถ่ายรูปกันครับ', roman: 'sǔai thîi-sùt loei khráp, thàai rûup kan khráp', kana: 'スワイ ティースット ルーイ クラップ、ターイ ループ ガン クラップ', en: 'The most beautiful ever — let\'s take a photo!', emoji: '📸', bonus: true },
          ] },
        { yaa: { thai: 'ดึกแล้ว กลับบ้านกันนะ คืนนี้สนุกไหมหลาน', roman: 'dùek láew, klàp bâan kan ná, khuen-níi sà-nùk mǎi lǎan', en: 'It\'s late — time to head home. Did you have fun tonight?', jp: 'もうおそいから、かえろうね。こんやはたのしかった？' },
          replies: [
            { thai: 'สนุกที่สุดเลยครับ ขอบคุณครับตา', roman: 'sà-nùk thîi-sùt loei khráp, khàwp-khun khráp taa', kana: 'サヌック ティースット ルーイ クラップ、コープクン クラップ ター', en: 'The most fun ever — thank you, Grandpa!', emoji: '🙏' },
          ] },
      ],
    },
    badges: [
      { id: 'loy-moon', emoji: '🌕', name: 'Moon Watcher', desc: 'Learned all the full-moon night phrases!', when: { quest: 'fullmoon', need: 'learn' } },
      { id: 'loy-maker', emoji: '🪷', name: 'Krathong Crafter', desc: 'Built a beautiful krathong in Thai!', when: { quest: 'makekrathong', need: 'complete' } },
      { id: 'loy-float', emoji: '🪔', name: 'Wish Floater', desc: 'Floated your krathong and made a wish!', when: { quest: 'floatit', need: 'learn' } },
      { id: 'loy-lantern', emoji: '🏮', name: 'Lantern Gazer', desc: 'Mastered the lights & lanterns phrases!', when: { quest: 'lanterns', need: 'listen2' } },
      { id: 'loy-snack', emoji: '🍭', name: 'Festival Foodie', desc: 'Tried every festival treat!', when: { quest: 'festfood', need: 'complete' } },
      { id: 'loy-call', emoji: '👴', name: 'Taa\'s Festival Buddy', desc: 'Spent the whole festival night with Grandpa!', when: { call: true } },
      { id: 'loy-legend', emoji: '✨', name: 'Loy Krathong Legend', desc: 'Finished every single quest!', when: { allQuests: 'learn' } },
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
  { id: 'exam-ace',    emoji: '🎓', name: 'Exam Ace',    desc: 'Passed the Big Challenge final exam' },
];

// Kid-friendly avatars for profile picking.
const AVATARS = ['🦊','🐯','🐼','🐸','🦄','🐲','🦉','🐙','🦖','🐬','🐱','🐶','🐵','🦁','🐧','🐨','🐰','🐳'];
