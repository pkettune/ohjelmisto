"use strict";

function askNumbersUntilSame() {
  const numbers = [];
  const list = document.querySelector("#target ol");

  let number = parseInt(prompt("Give a number"));

  //https://stackoverflow.com/questions/62204860/check-if-an-array-contains-a-given-number
  // [1,2,3,4].includes(3) // return true
  // [1,2,3,4].includes(8) // return false

  while (!numbers.includes(number)) {
    numbers.push(number);
    number = parseInt(prompt("Give a number"));
  }

  alert("This number has already been given");

  numbers.sort((a, b) => a - b);

  for (const item of numbers) {
    console.log(item);

    const newLi = document.createElement("li");
    newLi.textContent = item;
    list.append(newLi);
  }
}