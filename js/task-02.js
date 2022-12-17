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
  list += `<li class="item">${ingredient}</li>`;
});
parent.innerHTML = list;
