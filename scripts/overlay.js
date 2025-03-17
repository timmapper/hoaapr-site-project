const actionBtn = document.getElementById("header-btn");
const actionOverlay = document.getElementById("action-overlay");

actionBtn.addEventListener("click", () => {
  actionOverlay.classList.add("action-btn-overlay-anim");
  actionOverlay.style.display = "flex";
});

actionOverlay.addEventListener("click", () => {
  actionOverlay.classList.remove("action-btn-overlay-anim");
  actionOverlay.style.display = "none";
});
