"use strict";

function askName()
{
const name = prompt("What is your name?");
document.querySelector("#target").innerHTML = "Hello " + name + "!";
}