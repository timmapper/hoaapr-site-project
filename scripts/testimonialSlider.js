sliderbl = document.getElementById("slider-blya");
prevBtn = document.getElementById("prevBtn");
nextBtn = document.getElementById("nextBtn");
const slides = Array.from(sliderbl.querySelectorAll("article"));
const slideCount = slides.length;
let slideIndex = 0;

prevBtn.addEventListener("click", showPrevSlide);
nextBtn.addEventListener("click", showNextSlide);

function showPrevSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
  console.log("zzz");
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add("testi-animation--backwards");
      slide.classList.remove("testi-animation--forwards");
      slide.style.display = "flex";
    } else {
      slide.classList.remove("testi-animation--backwards");
      slide.classList.add("testi-animation--forwards");
      slide.style.display = "none";
    }
  });
}

updateSlider();
