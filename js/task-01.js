const ul = document.querySelector("#categories").children;
console.log(`Number of categories: ${ul.length}`);
[...ul].forEach((element) => {
  console.log("Category:", element.firstElementChild.outerText);
  console.log("Elements:", element.children[1].childElementCount);
});
