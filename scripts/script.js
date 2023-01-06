const playerConfigOverlay = document.getElementById("config");
const backdrop = document.getElementById("backdrop");

const editPlayer1Btn = document.getElementById("edit-player-1");
const editPlayer2Btn = document.getElementById("edit-player-2");
const cancelConfigBtn = document.getElementById("cancel");

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

cancelConfigBtn.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);
