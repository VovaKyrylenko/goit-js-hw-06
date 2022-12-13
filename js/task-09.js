function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const widget = document.querySelector(".widget");
button.addEventListener("click", () => {
  widget.style.background = getRandomHexColor();
  document.querySelector(".color").innerHTML = getRandomHexColor();
});
