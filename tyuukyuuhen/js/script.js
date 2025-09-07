// 要素を取得
const toggleBtn = document.querySelector('.toggle_btn');
const nav = document.getElementById('nav');
const mask = document.getElementById('mask');

// ハンバーガーボタンクリック
toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('open');  // ハンバーガー→×
  nav.classList.toggle('open');        // メニュー開閉
  mask.classList.toggle('show');       // 背景マスク表示
});

// マスクをクリックしたらメニューを閉じる
mask.addEventListener('click', () => {
  toggleBtn.classList.remove('open');
  nav.classList.remove('open');
  mask.classList.remove('show');
});





