import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
const buttonEl = document.querySelector('button');
const inputEls = document.querySelectorAll('input');

let delayEl = null;
let stepEl = null;
let amountEl = null;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const submitHandler = event => {
  event.preventDefault();
  if (!event.target.tagName === 'BUTTON') return;

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  delayEl = Number(delay.value);
  stepEl = Number(step.value);
  amountEl = Number(amount.value);

  for (let i = 1; i <= amountEl; i += 1) {
    createPromise(i, delayEl)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delayEl += stepEl;
  }

  event.currentTarget.reset();
};
formEl.addEventListener('submit', submitHandler);

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

buttonEl.style.cssText = buttonStyles;

buttonEl.addEventListener('focus', () => {
  buttonEl.style.cssText += buttonFocusStyles;
});

buttonEl.addEventListener('blur', () => {
  buttonEl.style.cssText = buttonStyles;
});

inputEls.forEach(input => {
  input.style.cssText = inputStyles;
});
