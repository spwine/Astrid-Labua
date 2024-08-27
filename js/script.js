// window.addEventListener("scroll", function () {
//   console.log("Scrolling");
//   var windowHeight = window.innerHeight;
//   var maxScroll = document.body.scrollHeight - windowHeight;
//   var scrollPosition = window.scrollY;
//   var footerPosition = footer.offsetTop;

//   console.log("Window Height:", windowHeight);
//   console.log("Max Scroll:", maxScroll);
//   console.log("Scroll Position:", scrollPosition);
//   console.log("Footer Position:", footerPosition);

//   // Smooth scroll when reaching the footer
//   if (scrollPosition >= maxScroll && scrollPosition < footerPosition) {
//     console.log("Smooth scrolling to footer");
//     var distanceToFooter = footerPosition - scrollPosition;
//     var smoothScrollAmount = distanceToFooter / 10; // Adjust the divisor for scrolling speed

//     // Decelerate the scrolling speed
//     window.scrollTo({
//       top: window.scrollY + smoothScrollAmount,
//       behavior: "smooth",
//     });
//   }
// });

// copyright year

document.addEventListener("DOMContentLoaded", function () {
  var yearSpan = document.getElementById("copyright-year");
  var currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});

// Nav bar
document.addEventListener("DOMContentLoaded", function () {
  const triggerButton = document.querySelector(".trigger");
  const containerNav = document.querySelector(".container-nav");
  const nav = document.querySelector("nav");

  triggerButton.addEventListener("click", function () {
    this.classList.toggle("active");
    containerNav.classList.toggle("nav-active");
    nav.classList.toggle("nav-menu-active");
  });
});

// Fade-in-up

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in-up");

  function checkPosition() {
    const windowHeight = window.innerHeight;

    elements.forEach((element, index) => {
      const positionFromTop = element.getBoundingClientRect().top;

      if (positionFromTop <= windowHeight - 100) {
        // Adjust the offset if needed
        const delay = index * 0.2; // Delay each element by 0.2s
        element.style.transitionDelay = `${delay}s`;
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", checkPosition);

  // Initial check to see if any element is already in view
  checkPosition();
});
