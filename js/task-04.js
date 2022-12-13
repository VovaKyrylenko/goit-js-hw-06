let counterValue = 0;
document.querySelector("#value").innerHTML = counterValue;
const buttonUp = document.querySelector('[data-action="decrement"]');
const buttonDown = document.querySelector('[data-action="increment"]');
buttonUp.addEventListener("click", () => {
  counterValue -= 1;
  document.querySelector("#value").innerHTML = counterValue;
});
buttonDown.addEventListener("click", () => {
  counterValue += 1;
  document.querySelector("#value").innerHTML = counterValue;
});
