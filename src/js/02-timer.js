import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/dark.css');
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const data = document.querySelector('#datetime-picker');
let days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

console.log(seconds.textContent);

function pad(value) {
  return String(value).padStart(2, '0');
}

const convertMs = ms => {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      // window.alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');

      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      Notiflix.Notify.success('Thank you for your choice!');

      startBtn.addEventListener('click', onBtn);

      function onBtn(e) {
        timerId = setInterval(() => {
          startBtn.disabled = true;
          const deltaTime = selectedDates[0] - Date.now();
          const timeComponent = convertMs(deltaTime);
          days.textContent = timeComponent.days;
          hours.textContent = timeComponent.hours;
          minutes.textContent = timeComponent.minutes;
          seconds.textContent = timeComponent.seconds;
        }, 1000);
      }
    }
  },
};

const instance = flatpickr('#datetime-picker', options);
