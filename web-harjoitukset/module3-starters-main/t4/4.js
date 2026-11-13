"use strict";
const students = [
  {
    name: "John",
    id: "2345768",
  },
  {
    name: "Paul",
    id: "2134657",
  },
  {
    name: "Jones",
    id: "5423679",
  },
];

for (const item of students) {
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.name;
  document.getElementById("target").appendChild(option);
}
