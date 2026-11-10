"use strict";

let arrayOfNames = ["Johnny", "DeeDee", "Joey", "Marky"];
let stringOfNames = "";

function concat(array) {
    for (let i = 0; i < array.length; i++) {
        stringOfNames += array[i];
    }
    return stringOfNames;
}

const paragraph = document.querySelector("#target p");
paragraph.textContent = concat(arrayOfNames);