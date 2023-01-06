function startNewGame() {
  if (!player[0].name || !player[0].name) {
    alert("Please Enter Valid Names");
    return;
  }
  gameArea.style.display = "block";
  activePlayerName.textContent = player[activePlayer].name;
}

function switchPlayer() {
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = player[activePlayer].name;
}

function selectBean(event) {
  event.target.textContent = player[activePlayer].symbol;
  event.target.classList.add("chosen");
  switchPlayer();
}
