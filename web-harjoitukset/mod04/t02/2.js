"use strict";

const target = document.getElementById("target");

const listItem1 = document.createElement("li");
listItem1.textContent = "First item";
target.appendChild(listItem1);

const listItem2 = document.createElement("li");
listItem2.textContent = "Second item";
listItem2.classList.add("my-item");
target.appendChild(listItem2);

const listItem3 = document.createElement("li");
listItem3.textContent = "Third item";
target.appendChild(listItem3);
