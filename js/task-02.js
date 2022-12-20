const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const parent = document.querySelector("#ingredients");
let list = [];
ingredients.forEach((ingredient) => {
  const element = document.createElement("li");
  element.innerHTML = ingredient;
  list.push(element);
});
parent.append(...list);
