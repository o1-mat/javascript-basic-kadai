const btn = document.querySelector('#btn');
const text = document.querySelector('#text');

btn.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});

