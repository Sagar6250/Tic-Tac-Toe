function resetGame() {
  activePlayer = 0;
  currentRound = 1;
  console.log(gameOver.firstElementChild.innerHTML);
  gameOver.firstElementChild.innerHTML =
    'You won, <span id="winner-name">PLAYER NAME</span>';
  gameOver.style.display = "none";
  backdrop.style.display = "none";

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItem = gameBoard.children[gameBoardIndex];
      gameBoardItem.textContent = "";
      gameBoardItem.classList.remove("chosen");
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (!player[0].name || !player[0].name) {
    alert("Please Enter Valid Names");
    return;
  }
  gameArea.style.display = "block";
  activePlayerName.textContent = player[activePlayer].name;
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    //Checking for Rows
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] == gameData[i][1] &&
      gameData[i][1] == gameData[i][2]
    ) {
      return gameData[i][0];
    }
    //Checking for Columns
    if (
      gameData[0][i] > i &&
      gameData[0][i] == gameData[1][i] &&
      gameData[1][i] == gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] == gameData[1][1] &&
    gameData[1][1] == gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[0][2] > 0 &&
    gameData[0][2] == gameData[1][1] &&
    gameData[1][1] == gameData[2][0]
  ) {
    return gameData[0][2];
  }

  if (currentRound == 9) {
    return -1;
  }
  return 0;
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
  const selectedField = event.target;

  const selectedColumn = +selectedField.dataset.col - 1;
  const selectedRow = +selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] == 0) {
    selectedField.textContent = player[activePlayer].symbol;
    selectedField.classList.add("chosen");

    // console.log(event.target.dataset.col, event.target.dataset.row);
    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    const winnerId = checkForGameOver();
    if (winnerId != 0) {
      endGame(winnerId);
    }
    currentRound++;
    switchPlayer();
  }
}

function endGame(winnerId) {
  gameOver.style.display = "block";
  backdrop.style.display = "block";
  if (winnerId > 0) {
    const winnerName = player[winnerId - 1].name;
    gameOver.firstElementChild.firstElementChild.textContent = winnerName;
  } else if (winnerId) {
    gameOver.firstElementChild.textContent = "Draw!";
  }
}
