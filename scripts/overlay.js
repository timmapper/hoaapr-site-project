const actionBtn = document.getElementById("header-btn");
const actionOverlay = document.getElementById("action-overlay");

actionBtn.addEventListener("click", () => {
  actionOverlay.style.display = "flex";
});

actionOverlay.addEventListener("click", () => {
  actionOverlay.style.display = "none";
});
