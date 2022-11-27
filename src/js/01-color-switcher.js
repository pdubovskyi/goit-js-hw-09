const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

function onStartBtn(e) {
  timerId = setInterval(() => {
    const getRandomColor = getRandomHexColor();
    document.body.style.backgroundColor = getRandomColor;
    console.log(getRandomColor);
  }, 1000);
  startBtn.disabled = true;
}

function onStopBtn(e) {
  clearInterval(timerId);
  startBtn.disabled = false;
}

console.log(startBtn);
console.log(stopBtn);
