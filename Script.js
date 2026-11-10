
const quotes = [
  { text: "想像力は知識より重要である。", author: "アルベルト・アインシュタイン" },
  { text: "千里の道も一歩から。", author: "老子" },
  { text: "継続は力なり。", author: "日本のことわざ" },
  { text: "未来を予測する最良の方法は、未来を創ることだ。", author: "アラン・ケイ" },
  { text: "天才とは1％のひらめきと99％の努力である。", author: "トーマス・エジソン" },
  { text: "あなたが見たいと思う世界の変化に、あなた自身がなりなさい。", author: "マハトマ・ガンディー" },
  { text: "できると思えばできる。できないと思えばできない。", author: "ヘンリー・フォード" },
  { text: "成功とは、熱意を失わずに失敗から失敗へと進む能力である。", author: "ウィンストン・チャーチル" },
  { text: "人生は自転車に乗るようなもの。バランスを保つには走り続けなければならない。", author: "アルベルト・アインシュタイン" },
  { text: "人生は大胆な冒険か、何もないかのどちらかだ。", author: "ヘレン・ケラー" },
  { text: "未来は今日始まる。明日始まるのではない。", author: "ヨハネ・パウロ2世" },
  { text: "成功は最終目的ではなく、失敗は致命的ではない。大切なのは進み続ける勇気だ。", author: "ウィンストン・チャーチル" },
  { text: "できると信じなさい。そうすればもう半分は達成したようなものだ。", author: "セオドア・ルーズベルト" },
  { text: "夢を見ることができれば、それは実現できる。", author: "ウォルト・ディズニー" },
  { text: "始める方法は、話すのをやめて行動を始めることだ。", author: "ウォルト・ディズニー" },
  { text: "何事も成功するまでは不可能に思えるものだ。", author: "ネルソン・マンデラ" },
  { text: "暗闇は暗闇を追い払えない。光だけがそれをできる。", author: "マーティン・ルーサー・キング・ジュニア" },
  { text: "人生で大切なのは、何を経験するかではなく、どう受け止めるかだ。", author: "エレノア・ルーズベルト" },
  { text: "幸運とは、準備が機会に出会うことだ。", author: "セネカ" },
  { text: "今日できることを明日に延ばすな。", author: "ベンジャミン・フランクリン" },
  { text: "失敗したことがない人は、新しいことに挑戦したことがない人だ。", author: "アルベルト・アインシュタイン" },
  { text: "努力する人は希望を語り、怠ける人は不満を語る。", author: "井上靖" },
  { text: "初心忘るべからず。", author: "世阿弥" },
  { text: "人間万事塞翁が馬。", author: "中国の故事" },
  { text: "七転び八起き。", author: "日本のことわざ" },
  { text: "石の上にも三年。", author: "日本のことわざ" },
  { text: "学びて時にこれを習う、また説ばしからずや。", author: "孔子" },
  { text: "過ちて改めざる、これを過ちという。", author: "孔子" },
  { text: "人生に失敗がないと、人生を失敗する。", author: "斎藤茂太" },
  { text: "置かれた場所で咲きなさい。", author: "渡辺和子" },
  { text: "努力は必ず報われる。もし報われない努力があるのならば、それはまだ努力と呼べない。", author: "王貞治" },
  { text: "夢は逃げない。逃げるのはいつも自分だ。", author: "高橋歩" },
  { text: "大きなことを成し遂げるには、小さなことを積み重ねるしかない。", author: "イチロー" },
  { text: "壁というのは、できる人にしかやってこない。", author: "イチロー" },
  { text: "限界を決めるのは自分自身だ。", author: "マイケル・ジョーダン" },
  { text: "私は失敗したことがない。ただ、うまくいかない方法を一万通り見つけただけだ。", author: "トーマス・エジソン" },
  { text: "人生の目的は、目的のある人生を送ることだ。", author: "ロバート・バーン" },
  { text: "幸せは自分の心が決める。", author: "相田みつを" },
  { text: "一生勉強、一生青春。", author: "相田みつを" },
  { text: "雨の日には雨の中を、風の日には風の中を。", author: "相田みつを" },
  { text: "行動は必ずしも幸福をもたらさないが、行動なしに幸福はない。", author: "ウィリアム・ジェームズ" },
  { text: "人は何度でもやり直すことができる。", author: "ネルソン・マンデラ" },
  { text: "他人と比較するのではなく、昨日の自分と比較しなさい。", author: "ジョーダン・ピーターソン" },
  { text: "夢なき者に成功なし。", author: "吉田松陰" },
  { text: "志を立てて、もって万事の源となす。", author: "吉田松陰" },
  { text: "為せば成る、為さねば成らぬ何事も。", author: "上杉鷹山" },
  { text: "学ぶことをやめたら、教えることをやめなければならない。", author: "ロジェ・ルメール" },
  { text: "人を動かすことができる人は、自ら動く人である。", author: "アンドリュー・カーネギー" },
  { text: "大切なのは、何を持っているかではなく、何を与えられるかだ。", author: "アルベルト・シュバイツァー" },
  { text: "今日という日は、残りの人生の最初の日である。", author: "チャールズ・ディードリッヒ" }
];

// 前回表示した名言の番号を取得
const previousIndex = sessionStorage.getItem("previousQuote");

// 50個の番号を用意
let availableIndexes = quotes.map((_, index) => index);

// 前回と同じ番号を除外
if (previousIndex !== null && quotes.length > 1) {
  availableIndexes = availableIndexes.filter(
    index => index !== Number(previousIndex)
  );
}

// ランダムに1つ選択
const randomIndex = availableIndexes[
  Math.floor(Math.random() * availableIndexes.length)
];

// 今回の番号を保存
sessionStorage.setItem("previousQuote", randomIndex);

// 選ばれた名言を表示
const selectedQuote = quotes[randomIndex];

document.getElementById("quoteText").textContent =
  "「" + selectedQuote.text + "」";

document.getElementById("quoteAuthor").textContent =
  "— " + selectedQuote.author;
