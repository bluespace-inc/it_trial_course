function OnButtonClick() {
  // 年月日を取得
  year = document.getElementById('year');
  year = parseInt(year.value);
  month = document.getElementById('month');
  month = parseInt(month.value);
  date = document.getElementById('date');
  date = parseInt(date.value);
  total = year + month + date;

  // 文字列の最後尾を切り取るため、数値を文字列へ変換した後、切り取り、そして新たな変数に格納
  total = total.toString();
  let value = total.substr(-1, 1);
  value = parseInt(value);

  // 占いロジック
  let fortune = '';
  if (value == 1) {
    fortune = '大吉';
  } else if (value >= 2 && value <= 3) {
    fortune = '吉';
  } else if (value >= 4 && value <= 5) {
    fortune = '中吉';
  } else if (value >= 6 && value <= 7) {
    fortune = '小吉';
  } else if (value == 8) {
    fortune = '末吉';
  } else if (value == 9) {
    fortune = '凶';
  } else if (value == 0) {
    fortune = '大凶';
  }

  // html上の結果(id="result")を特定、innerHTMLで占い結果を差し込む
  target = document.getElementById('result');
  target.innerHTML = fortune;
}
