"use strict";

const ulTarget = document.querySelector("#target");
let text;
for (let i = 0; i < 3; i++) {
  const listItem = document.createElement("li");
  if (i == 0) {
    text = "first item";
  } else if (i == 1) {
    text = "second item";
    listItem.setAttribute("class", "my-item");
  } else {
    text = "third item";
  }

  listItem.innerHTML = text;
  ulTarget.appendChild(listItem);
}
