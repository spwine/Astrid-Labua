window.addEventListener("scroll", function () {
  console.log("Scrolling");
  var windowHeight = window.innerHeight;
  var maxScroll = document.body.scrollHeight - windowHeight;
  var scrollPosition = window.scrollY;
  var footerPosition = footer.offsetTop;

  console.log("Window Height:", windowHeight);
  console.log("Max Scroll:", maxScroll);
  console.log("Scroll Position:", scrollPosition);
  console.log("Footer Position:", footerPosition);

  // Smooth scroll when reaching the footer
  if (scrollPosition >= maxScroll && scrollPosition < footerPosition) {
    console.log("Smooth scrolling to footer");
    var distanceToFooter = footerPosition - scrollPosition;
    var smoothScrollAmount = distanceToFooter / 10; // Adjust the divisor for scrolling speed

    // Decelerate the scrolling speed
    window.scrollTo({
      top: window.scrollY + smoothScrollAmount,
      behavior: "smooth",
    });
  }
});

// copyright year

document.addEventListener("DOMContentLoaded", function () {
  var yearSpan = document.getElementById("copyright-year");
  var currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});
