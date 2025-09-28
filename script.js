const button = document.getElementById("show-text-btn");
const hiddenText = document.getElementById("hidden-text");

button.addEventListener("click", () => {
  hiddenText.style.display = "block";
});