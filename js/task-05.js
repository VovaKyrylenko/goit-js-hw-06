let input = document.querySelector("#name-input");
input.addEventListener("input", () => {
  document.querySelector("#name-output").textContent =
    input.value.trim(" ") === "" ? "Anonymous" : input.value;
});
