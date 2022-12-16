const ul = document.querySelector("#categories").children;
[...ul].forEach((element) => {
  console.log("Category:", element.firstElementChild.outerText);
  console.log("Elements:", element.children[1].childElementCount);
});
