const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
const indicatorsContainer = document.querySelector(".carousel-indicators");

let currentIndex = 0;
let touchStartX = 0;
let touchMoveX = 0;

// Update carousel indicators
function updateIndicators() {
  indicatorsContainer.innerHTML = "";
  carouselItems.forEach((item, index) => {
    const indicator = document.createElement("div");
    indicator.classList.add("carousel-indicator");
    if (index === currentIndex) {
      indicator.classList.add("active");
    }
    indicator.addEventListener("click", () => {
      goTo(index);
    });
    indicatorsContainer.appendChild(indicator);
  });
}

// Update carousel position
function updateCarousel() {
  const itemWidth = carouselItems[0].offsetWidth;
  const offset = -currentIndex * itemWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

// Go to specific index
function goTo(index) {
  currentIndex = index;
  updateCarousel();
  updateIndicators();
}

// Touch event handlers
carousel.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
});

carousel.addEventListener("touchmove", (event) => {
  touchMoveX = event.touches[0].clientX;
});

carousel.addEventListener("touchend", () => {
  const diff = touchStartX - touchMoveX;
  if (diff > 50 && currentIndex < carouselItems.length - 1) {
    goTo(currentIndex + 1);
  } else if (diff < -50 && currentIndex > 0) {
    goTo(currentIndex - 1);
  }
});

// Initialize carousel
updateIndicators();
updateCarousel();
