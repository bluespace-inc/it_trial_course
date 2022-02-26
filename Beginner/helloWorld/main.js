const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!!!!!';

const value = 1 + 1 + 1;

if (value === 2) {
  alert('数字の2でした');
} else if (value === '11') {
  alert('文字列の11でした');
} else {
  alert('どれにも当てはまりませんでした');
}

for (let i = 0; value > i; i++) {
  alert(i + '回目ですよ');
}
