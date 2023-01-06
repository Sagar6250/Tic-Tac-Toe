function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorInput.textContent = "";
  document.getElementById("playername").value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const playerName = formData.get("playername").trim();
  // console.log(playerName);
  if (!playerName) {
    event.target.firstElementChild.classList.add("error");
    errorInput.textContent = "Please Enter a Valid Name!";
    return;
  }

  const updatedPlayerData = document.getElementById(
    "player-" + editedPlayer + "-id"
  );
  updatedPlayerData.children[1].textContent = playerName;

  player[editedPlayer - 1].name = playerName;

  closePlayerConfig();
}
