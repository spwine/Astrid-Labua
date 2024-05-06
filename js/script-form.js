document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".input-container input");
  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentNode.querySelector("label").classList.add("active");
    });
    input.addEventListener("blur", function () {
      if (!this.value) {
        this.parentNode.querySelector("label").classList.remove("active");
      }
    });
  });
});
