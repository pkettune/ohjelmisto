"use strict";

const names = ["John", "Paul", "Jones"];

for (const item of names) {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  document.getElementById("target").appendChild(listItem);
}
