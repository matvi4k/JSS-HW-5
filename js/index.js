const keyEL = document.querySelector("#key");
const stateEL = document.querySelector(".state");
const btnEl = document.querySelector(".js-start-game");

const keys = ["k", "u", "f", "h", "j", "d", "x", "q", "e", "y"];

let currentKeyIndex = -1;

// ФУНКЦІЇ

function startNewGame() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  keyEL.textContent = `Натисни клавішу: ${keys[currentKeyIndex]}`;
  alert("Розпочалася нова гра");
  keyEL.style.marginLeft = '550px'

  btnEl.disabled = true;
}

function onKeydownPress(event) {
  const pressedKey = event.key.toLowerCase();
  const currentKey = keys[currentKeyIndex];

  if(pressedKey === currentKey){
    currentKeyIndex += 1

    if(currentKeyIndex === keys.length){
        stateEL.textContent = 'Гру завершино'
        btnEl.disabled = false;
        currentKeyIndex = -1;
        return
    }

    keyEL.textContent = `Натисни клавішу: ${keys[currentKeyIndex]}`;

    stateEL.textContent = "Правильно!";  
  } else{
    stateEL.textContent = `Неправельно! Натисни клавішу ${keys[currentKeyIndex]}`;  
  }
}
// ЛІСЕНЕРИ

btnEl.addEventListener("click", startNewGame);
document.addEventListener('keydown', onKeydownPress)