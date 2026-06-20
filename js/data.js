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
