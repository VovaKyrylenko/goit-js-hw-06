const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const parent = document.querySelector("#ingredients");
let list = "";
ingredients.forEach((ingredient) => {
  let li = document.createElement("li");
  li.className = "item";
  li.innerHTML = ingredient;
  parent.appendChild(li);
});
