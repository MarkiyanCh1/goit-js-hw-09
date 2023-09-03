const bodyEl = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const startEl = document.querySelector('button[data-start]');
const stopEl = document.querySelector('button[data-stop]');
let intervalID = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', () =>{
  stopEl.disabled = true;
  stopEl.style.backgroundColor = 'gray';
  stopEl.style.color = 'red';
})

const startTimer = () => {
  intervalID = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    stopEl.disabled = false;
    stopEl.style.backgroundColor = buttonStyles.backgroundColor;
    stopEl.style.color = buttonStyles.color;
    startEl.disabled = true;
    startEl.style.backgroundColor = 'gray';
    startEl.style.color = 'red';
  }, 1000);
};

startEl.addEventListener('click', startTimer);

const stopTimer = () => {
  clearInterval(intervalID);
  startEl.style.pointerEvents = '';
  startEl.disabled = false;
  startEl.style.backgroundColor = buttonStyles.backgroundColor;
  startEl.style.color = buttonStyles.color;
  stopEl.disabled = true;
  stopEl.style.backgroundColor = 'gray';
  stopEl.style.color = 'red';
};

stopEl.addEventListener('click', stopTimer);

const buttonStyles = {
  border: "none",
  borderRadius: "20px",
  backgroundColor: 'rgb(25 223 20)',
  color: 'rgb(16 83 229)',
  padding: '10px 40px',
  fontSize: '18px',
};

const buttonFocusStyles = `
  background-color: rgb(170, 85, 250);
  box-shadow: 2px 2px 2px 1px rgba(106, 106, 109, 0.2);
`;

buttons.forEach((button) => {
  for (const style in buttonStyles) {
    button.style[style] = buttonStyles[style];
  }

  button.addEventListener('focus', () => {
    button.style.cssText += buttonFocusStyles;
  });

  button.addEventListener('blur', () => {
    for (const style in buttonStyles) {
      button.style[style] = buttonStyles[style];
    }
  });
});