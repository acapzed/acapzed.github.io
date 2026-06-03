const slides = Array.from(document.querySelectorAll(".slide"));
const prevButton = document.querySelector("#prevSlide");
const nextButton = document.querySelector("#nextSlide");
const slideNumber = document.querySelector("#slideNumber");
const slideTotal = document.querySelector("#slideTotal");
const currentTitle = document.querySelector("#currentTitle");
const progressBar = document.querySelector("#progressBar");

let activeIndex = 0;
let isProgrammaticScroll = false;

function formatNumber(value) {
  return String(value).padStart(2, "0");
}

function showSlide(index) {
  activeIndex = Math.max(0, Math.min(index, slides.length - 1));

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeIndex);
  });

  slideNumber.textContent = formatNumber(activeIndex + 1);
  slideTotal.textContent = formatNumber(slides.length);
  currentTitle.textContent = slides[activeIndex].dataset.title || "Portfolio";
  progressBar.style.width = `${((activeIndex + 1) / slides.length) * 100}%`;
  prevButton.disabled = activeIndex === 0;
  nextButton.disabled = activeIndex === slides.length - 1;
}

function goToSlide(index) {
  showSlide(index);
  isProgrammaticScroll = true;
  slides[activeIndex].scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => {
    isProgrammaticScroll = false;
  }, 450);
}

function syncActiveSlideFromScroll() {
  if (isProgrammaticScroll) {
    return;
  }

  const viewportAnchor = window.scrollY + window.innerHeight * 0.38;
  const closestIndex = slides.reduce((bestIndex, slide, slideIndex) => {
    const bestDistance = Math.abs(slides[bestIndex].offsetTop - viewportAnchor);
    const slideDistance = Math.abs(slide.offsetTop - viewportAnchor);
    return slideDistance < bestDistance ? slideIndex : bestIndex;
  }, 0);

  showSlide(closestIndex);
}

prevButton.addEventListener("click", () => goToSlide(activeIndex - 1));
nextButton.addEventListener("click", () => goToSlide(activeIndex + 1));

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    goToSlide(activeIndex + 1);
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    goToSlide(activeIndex - 1);
  }

  if (event.key === "Home") {
    event.preventDefault();
    goToSlide(0);
  }

  if (event.key === "End") {
    event.preventDefault();
    goToSlide(slides.length - 1);
  }
});

window.addEventListener("scroll", syncActiveSlideFromScroll, { passive: true });

showSlide(0);
