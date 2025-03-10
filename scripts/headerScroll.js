const header = document.getElementById("header");
isScrolled = false;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= 2 && !isScrolled) {
    header.classList.add("header-scrolled");
    isScrolled = true;
  } else if (scrollTop < 2 && isScrolled) {
    header.classList.remove("header-scrolled");
    isScrolled = false;
  }
});
