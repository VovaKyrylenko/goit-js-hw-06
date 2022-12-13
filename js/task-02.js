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
for (const iterator of ingredients) {
  let li = document.createElement("li");
  li.className = "item";
  li.innerHTML = iterator;
  list += li.outerHTML;
}

parent.innerHTML = list;
