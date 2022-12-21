const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const parent = document.querySelector("#ingredients");
const list = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.innerHTML = ingredient;
  return element;
});

parent.append(...list);
