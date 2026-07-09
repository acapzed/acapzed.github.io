const slides = Array.from(document.querySelectorAll(".slide"));
const slideNumber = document.querySelector("#slideNumber");
const slideTotal = document.querySelector("#slideTotal");
const progressBar = document.querySelector("#progressBar");
const downloadPdfButton = document.querySelector("#downloadPdf");

let activeIndex = 0;
let isWheelLocked = false;

function getSlideTopOffset() {
  return slides[0] ? slides[0].offsetTop : 0;
}

function scrollToSlide(index) {
  const targetIndex = Math.max(0, Math.min(index, slides.length - 1));
  const targetTop = Math.max(0, slides[targetIndex].offsetTop - getSlideTopOffset());

  window.scrollTo({
    top: targetTop,
    behavior: "smooth",
  });

  window.setTimeout(() => {
    window.scrollTo({ top: targetTop, behavior: "auto" });
    setActiveSlide(targetIndex);
  }, 560);
}

function formatNumber(value) {
  return String(value).padStart(2, "0");
}

function setActiveSlide(index) {
  activeIndex = Math.max(0, Math.min(index, slides.length - 1));

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === activeIndex);
  });

  slideNumber.textContent = formatNumber(activeIndex + 1);
  slideTotal.textContent = formatNumber(slides.length);
  progressBar.style.width = `${((activeIndex + 1) / slides.length) * 100}%`;
}

function syncActiveSlideFromScroll() {
  const anchor = window.scrollY + getSlideTopOffset();
  const closestIndex = slides.reduce((bestIndex, slide, slideIndex) => {
    const bestDistance = Math.abs(slides[bestIndex].offsetTop - anchor);
    const slideDistance = Math.abs(slide.offsetTop - anchor);
    return slideDistance < bestDistance ? slideIndex : bestIndex;
  }, 0);

  setActiveSlide(closestIndex);
}

window.addEventListener("scroll", syncActiveSlideFromScroll, { passive: true });

window.addEventListener("wheel", (event) => {
  if (isWheelLocked) {
    event.preventDefault();
    return;
  }

  if (Math.abs(event.deltaY) < 8) {
    return;
  }

  event.preventDefault();
  isWheelLocked = true;

  const direction = event.deltaY > 0 ? 1 : -1;
  const targetIndex = Math.max(0, Math.min(activeIndex + direction, slides.length - 1));
  scrollToSlide(targetIndex);

  window.setTimeout(() => {
    isWheelLocked = false;
  }, 620);
}, { passive: false });

window.addEventListener("keydown", (event) => {
  if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "PageDown" && event.key !== "PageUp") {
    return;
  }

  event.preventDefault();
  const direction = event.key === "ArrowUp" || event.key === "PageUp" ? -1 : 1;
  const targetIndex = Math.max(0, Math.min(activeIndex + direction, slides.length - 1));
  scrollToSlide(targetIndex);
});

if (downloadPdfButton) {
  downloadPdfButton.addEventListener("click", () => window.print());
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    const targetIndex = slides.indexOf(target);

    if (targetIndex === -1) {
      return;
    }

    event.preventDefault();
    scrollToSlide(targetIndex);
  });
});

setActiveSlide(0);
