const inputs = document.querySelectorAll(".form-group input");

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.parentElement.querySelector("label").classList.add("active");
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      input.parentElement.querySelector("label").classList.remove("active");
    }
  });
});
