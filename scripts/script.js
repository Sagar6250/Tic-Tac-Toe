let editedPlayer = 0;
let activePlayer = 0;

const player = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlay = document.getElementById("config");
const backdrop = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorInput = document.getElementById("error-input");

const editPlayer1Btn = document.getElementById("edit-player-1");
const editPlayer2Btn = document.getElementById("edit-player-2");
const cancelConfigBtn = document.getElementById("cancel");

const startGameBtn = document.getElementById("start-game");
const gameArea = document.getElementById("active-game");
const gameField = document.querySelectorAll("#game-board li");
const activePlayerName = document.getElementById("player-turn");


editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

cancelConfigBtn.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startGameBtn.addEventListener("click", startNewGame);

for (const gEle of gameField) {
  gEle.addEventListener("click", selectBean);
}
