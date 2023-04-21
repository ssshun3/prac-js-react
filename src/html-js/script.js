const buttons = document.querySelectorAll(".button-container button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".screen").textContent = button.textContent;
  });
});
