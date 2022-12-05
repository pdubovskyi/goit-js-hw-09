const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

let timerId = null;

function onStartBtn(e) {
  btnDisabled();
  timerId = setInterval(() => {
    const getRandomColor = getRandomHexColor();
    document.body.style.backgroundColor = getRandomColor;
    console.log(getRandomColor);
  }, 1000);
}

function onStopBtn(e) {
  clearInterval(timerId);
  btnDisabled();
}

function btnDisabled() {
  if (!startBtn.disabled) {
    startBtn.disabled = true;
    stopBtn.disabled = false;
  } else {
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
}
