const keyEL = document.querySelector("#key");
const stateEL = document.querySelector(".state");
const btnEl = document.querySelector(".js-start-game");

const keys = ["k", "u", "f", "h", "j", "d", "x", "q", "e", "y"];

let currentKeyIndex = 0;
let gameStarted = false;

// ФУНКЦІЇ

function startNewGame() {
  currentKeyIndex = 0;
  gameStarted = true;

  keyEL.textContent = `Натисни клавішу: ${keys[currentKeyIndex]}`;
  stateEL.textContent = 'Гра почалася!';
  btnEl.disabled = true;
}

function onKeydownPress(event) {
  if (!gameStarted) return;

  const pressedKey = event.key.toLowerCase();
  const currentKey = keys[currentKeyIndex];

  if (pressedKey === currentKey) {
    currentKeyIndex++;

    if (currentKeyIndex === keys.length) {
      stateEL.textContent = `Молодець! ${currentKeyIndex}/10
      Ти пройшов гру!`;
      btnEl.disabled = false;
      gameStarted = false;
      return;
    }

    keyEL.textContent = `Натисни клавішу: ${keys[currentKeyIndex]}`;
    stateEL.textContent = `Правильно! ${currentKeyIndex}/10`;
  } else {
    stateEL.textContent = `Неправильно! Натисни клавішу ${keys[currentKeyIndex]}`;
  }
}

// ЛІСЕНЕРИ

btnEl.addEventListener("click", startNewGame);
document.addEventListener("keydown", onKeydownPress);