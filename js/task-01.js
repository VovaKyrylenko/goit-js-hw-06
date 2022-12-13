const element = document.querySelector("#categories");
console.log("Number of categories:", element.childElementCount);
for (let index = 0; index < element.children.length; index++) {
  const li = element.children[index];
  console.log("Category:", li.firstElementChild.outerText);
  console.log("Elements:", li.childElementCount);
}
