document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const inner = carousel.querySelector(".carousel-inner");
  const items = carousel.querySelectorAll(".carousel-item");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");
  const indicators = carousel.querySelector(".carousel-indicators");

  let currentIndex = 0;
  let startX = 0;
  let swipeThreshold = carousel.offsetWidth / 4; // Adjust this value as needed

  // Create indicators
  items.forEach((item, index) => {
    const indicator = document.createElement("span");
    indicator.classList.add("indicator");
    indicator.addEventListener("click", () => {
      goTo(index);
    });
    indicators.appendChild(indicator);
  });

  const indicatorsArray = Array.from(indicators.children);

  // Initialize active indicator
  indicatorsArray[currentIndex].classList.add("active");

  function goTo(index) {
    if (index === currentIndex) return;
    currentIndex = index;
    updateCarouselPosition();
    updateIndicators();
  }

  function updateCarouselPosition() {
    const currentItem = items[currentIndex];
    const offset =
      currentItem.offsetLeft -
      (carousel.offsetWidth - currentItem.offsetWidth) / 2;
    inner.style.transform = `translateX(-${offset}px)`;
  }

  function updateIndicators() {
    indicatorsArray.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      goTo(currentIndex - 1);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < items.length - 1) {
      goTo(currentIndex + 1);
    }
  });

  // Touch swipe functionality
  carousel.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
  });

  carousel.addEventListener("touchmove", (event) => {
    event.preventDefault();
    const moveX = event.touches[0].clientX;
    const diffX = moveX - startX;

    if (diffX > swipeThreshold && currentIndex > 0) {
      goTo(currentIndex - 1);
    } else if (diffX < -swipeThreshold && currentIndex < items.length - 1) {
      goTo(currentIndex + 1);
    }
  });

  // Initialize carousel position
  updateCarouselPosition();
});
