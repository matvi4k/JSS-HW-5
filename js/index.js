const keyEL = document.querySelector("#key");
const stateEL = document.querySelector(".state");
const btnEl = document.querySelector(".js-start-game");

const keys = ["k", "u", "f", "h", "j", "d", "x", "q", "e", "y"];
const { alert, notice, success, error } = PNotify;

let currentKeyIndex = 0;
let gameStarted = false;

// ФУНКЦІЇ

function startNewGame() {
  currentKeyIndex = 0;
  gameStarted = true;

  keyEL.textContent = `Натисни клавішу: ${keys[currentKeyIndex]}`;
  stateEL.textContent = "Гра почалася!";
  btnEl.disabled = true;

  notice({
    text: "🎮 Нова гра почалася!",
    delay: 1500,
  });
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
      alert({
        text: "🏆 Вітаю! Ти пройшов гру!",
        delay: 2000,
      });

      return;
    }

    keyEL.textContent = `Натисни клавішу: ${keys[currentKeyIndex]}`;
    stateEL.textContent = `Правильно! ${currentKeyIndex}/10`;
    success({
      text: "✅ Правильно!",
      delay: 800,
    });
  } else {
    stateEL.textContent = `Неправильно! Натисни клавішу ${keys[currentKeyIndex]}`;
    error({
      text: `❌ Неправильно! Натисни "${currentKey}"`,
      delay: 1000,
      
    });
  }
}

// ЛІСЕНЕРИ

btnEl.addEventListener("click", startNewGame);
document.addEventListener("keydown", onKeydownPress);
