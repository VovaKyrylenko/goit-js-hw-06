function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  const color = getRandomHexColor();
  body.style.background = color;
  document.querySelector(".color").innerHTML = color;
});
