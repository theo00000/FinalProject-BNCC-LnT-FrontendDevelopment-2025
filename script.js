const slider = document.getElementById("slider");
let scrollAmount = 0;
const slideWidth = slider.offsetWidth;

setInterval(() => {
  scrollAmount += slideWidth;
  if (scrollAmount >= slider.scrollWidth) {
    scrollAmount = 0;
  }
  slider.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
}, 3000);
