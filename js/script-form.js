document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(
    ".input-container input, .input-container textarea"
  );

  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      input.parentElement.querySelector("label").classList.add("active");
    });

    input.addEventListener("blur", function () {
      if (input.value === "") {
        input.parentElement.querySelector("label").classList.remove("active");
      }
    });

    // Check if input has value on page load
    if (input.value !== "") {
      input.parentElement.querySelector("label").classList.add("active");
    }
  });
});
