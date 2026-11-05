"use strict";

function askDogsAndReverse() {
  const userCount = 6;
  const names = [];
  const list = document.querySelector("#target ol");

  for (let i = 0; i < userCount; i++) {
    names.push(prompt("Name of the dog"));
  }

  names.sort().reverse();

  for (const item of names) {
    const newLi = document.createElement("li");
    newLi.textContent = item;
    list.append(newLi);
  }
}
