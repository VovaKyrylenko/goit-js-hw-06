const input = document.querySelector("#font-size-control");
const abracadabra = document.querySelector("#text");
input.addEventListener(
  "input",
  () => (abracadabra.style = `font-size: ${input.value}px`)
);
