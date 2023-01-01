const tableItems = document.querySelectorAll("li span");
// console.log(tableItems);

let count = 0;
tableItems.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.setAttribute("class", null);
    element.setAttribute("class", "startBlack");
  });
  element.addEventListener("mouseout", () => {
    element.setAttribute("class", null);
    element.setAttribute("class", "table-topics");
  });
});
