const element = document.querySelector("#categories");
console.log("element:", element);
console.log("Number of categories:", element.childElementCount);
for (const iterator of element.innerHTML) {
  console.log("iterator", iterator);
}
