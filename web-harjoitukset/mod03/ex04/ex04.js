"use strict";

function askNumbersUntilZero() {
  const numbers = [];
  const list = document.querySelector("#target ol");

  let number = parseInt(prompt("Give a number, 0 stops the program"));

  while (number !== 0) {
    numbers.push(number);
    number = parseInt(prompt("Give a number, 0 stops the program"));
  }
//https://stackoverflow.com/questions/1063007/how-can-i-sort-an-array-of-integers
//numArray = numArray.sort((a, b) => a - b);
  numbers.sort((a, b) => b - a);

  for (const item of numbers) {
    console.log(item);

    const newLi = document.createElement("li");
    newLi.textContent = item;
    list.append(newLi);
  }
}
