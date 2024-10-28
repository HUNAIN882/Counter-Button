const maintitle = document.querySelector('#title');
let curValue = 0;

const btnIncrement = document.querySelector('#increment');
const btnReset = document.querySelector('#reset');
const btnDecrement = document.querySelector('#decrement');


btnIncrement.addEventListener('click', () => {
    curValue++;
    maintitle.textContent = curValue;
});


btnDecrement.addEventListener('click', () => {
    curValue--;
    maintitle.textContent = curValue;
});


btnReset.addEventListener('click', () => {
    curValue = 0;
    maintitle.textContent = curValue;
});