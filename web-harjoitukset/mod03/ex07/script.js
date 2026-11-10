"use strict";

const list = document.querySelector("#target ul");

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

let result = 0;
const sides = parseInt(prompt("How many sides on your dice?"));

while (result !== sides) {
    result = rollDice(sides);
    const newLi = document.createElement("li");
    newLi.textContent = result;
    list.append(newLi);
    console.log(result);
}