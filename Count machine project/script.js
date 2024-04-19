let countValue = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

function increment() {
  countValue++;
  updateDisplay();
}

function decrement() {
  countValue--;
  updateDisplay();
}

function reset() {
  countValue = 0;
  updateDisplay();
}

function updateDisplay() {
  countDisplay.innerText = countValue;
}
