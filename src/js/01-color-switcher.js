const bodyEl = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const startEl = document.querySelector('button[data-start]');
const stopEl = document.querySelector('button[data-stop]');
stopEl.disabled = true;
let intervalID = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startTimer = () => {
  intervalID = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    stopEl.disabled = false;
    startEl.disabled = true;
  }, 1000);
};

startEl.addEventListener('click', startTimer);

const stopTimer = () => {
  clearInterval(intervalID);
  startEl.style.pointerEvents = '';
  startEl.disabled = false;
  stopEl.disabled = true;
};

stopEl.addEventListener('click', stopTimer);


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

buttons.forEach((button) => {
  button.style.cssText = buttonStyles;

  button.addEventListener('focus', () => {
    button.style.cssText += buttonFocusStyles;
  });

  button.addEventListener('blur', () => {
    button.style.cssText = buttonStyles;
  });
});