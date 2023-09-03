import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputEl = document.getElementById('datetime-picker');
const buttonEl = document.querySelector('button');
const spanEls = document.querySelectorAll('span');
const timerEl = document.querySelector('.timer');
const fieldEls = document.querySelectorAll('.field');

const startBtn = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
let timerId = null;
let currentTime;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    startBtn.disabled = false;
    currentTime = selectedDates[0];
  },
};

flatpickr(inputEl, options);

startBtn.disabled = true;

const onClick = () => {
  if (timerId) {
    clearInterval(timerId);
  }
  showTimer();
  timerId = setInterval(showTimer, 1000);
};

startBtn.addEventListener('click', onClick);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = value => String(value).padStart(2, 0);

const showTimer = () => {
  const now = new Date();

  if (!currentTime) return;

  const diff = currentTime - now;
  const { days, hours, minutes, seconds } = convertMs(diff);
  daysRef.textContent = addLeadingZero(days);
  hoursRef.textContent = addLeadingZero(hours);
  minutesRef.textContent = addLeadingZero(minutes);
  secondsRef.textContent = addLeadingZero(seconds);

  if (
    daysRef.textContent === '00' &&
    hoursRef.textContent === '00' &&
    minutesRef.textContent === '00' &&
    secondsRef.textContent === '00'
  ) {
    clearInterval(timerId);
  }
};

const buttonStyles = `
  border: none;
  border-radius: 20px;
  background-color: rgb(25 223 20);
  color: rgb(16 83 229);
  padding: 10px 40px;
  font-size: 18px;
`;

const buttonFocusStyles = `
  background-color: rgb(170, 85, 250);
  box-shadow: 2px 2px 2px 1px rgba(106, 106, 109, 0.2);
`;

const inputStyles = `
  padding-top: 5px;
  padding-bottom: 5px;
  margin-right: 5px;
  font-size: 20px;
`;

const spanStyles = `
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
`;

buttonEl.style.cssText = buttonStyles;

buttonEl.addEventListener('focus', () => {
  buttonEl.style.cssText += buttonFocusStyles;
});

buttonEl.addEventListener('blur', () => {
  buttonEl.style.cssText = buttonStyles;
});

inputEl.style.cssText = inputStyles;

spanEls.forEach(span => {
  span.style.cssText = spanStyles;
});

timerEl.style.display = 'flex';

fieldEls.forEach(field => {
  field.style.paddingRight = '10px';
});
