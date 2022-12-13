const buttonCreate = document.querySelector("[data-create]");
const input = document.querySelector("div#controls > input");
const buttonDestroy = document.querySelector("[data-destroy]");
const wrap = document.querySelector("#boxes");
let width = 30;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
buttonCreate.addEventListener("click", () => {
  for (let index = 0; index < Number(input.value); index++) {
    wrap.insertAdjacentHTML(
      "beforeend",
      `<div style="background:${getRandomHexColor()}; width:${width}px; height:${width}px;"></div>`
    );
    width += 10;
  }
});

buttonDestroy.addEventListener("click", () => {
  wrap.innerHTML = "";
  width = 30;
});
