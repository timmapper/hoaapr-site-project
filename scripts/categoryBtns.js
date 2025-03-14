const banyaBtn = document.getElementById("banyaBtn");
const accessoiresBtn = document.getElementById("accessoiresBtn");
const banyas = document.getElementsByClassName("product-banya");
const accessoires = document.getElementsByClassName("product-accessoire");

banyaBtn.addEventListener("click", () => {
  if (banyaBtn.classList.contains("-active-")) {
    banyaBtn.classList.remove("-active-");
    for (let i = 0; i < banyas.length; i++) {
      banyas[i].style.display = "none";
    }
  } else if (!banyaBtn.classList.contains("-active-")) {
    banyaBtn.classList.add("-active-");
    for (let i = 0; i < banyas.length; i++) {
      banyas[i].style.display = "block";
    }
  }
});

accessoiresBtn.addEventListener("click", () => {
  if (accessoiresBtn.classList.contains("-active-")) {
    accessoiresBtn.classList.remove("-active-");
    for (let i = 0; i < accessoires.length; i++) {
      accessoires[i].style.display = "none";
    }
  } else if (!accessoiresBtn.classList.contains("-active-")) {
    accessoiresBtn.classList.add("-active-");
    for (let i = 0; i < accessoires.length; i++) {
      accessoires[i].style.display = "block";
    }
  }
});
