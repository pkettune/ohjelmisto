"use strict";

function askParticipants() {
  const userCount = parseInt(prompt("Number of participants?"));
  const names = [];
  const list = document.querySelector("#target ol");

  for (let i = 0; i < userCount; i++) {
    names.push(prompt("Name of the participant"));
  }
  names.sort();

  for (const item of names) {
    const newLi = document.createElement("li");
    newLi.textContent = item;
    list.append(newLi);
  }
}
