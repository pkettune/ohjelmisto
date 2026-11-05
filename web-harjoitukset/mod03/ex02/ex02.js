"use strict";

function askParticipants()
{
    const userCount = parseInt(prompt("Number of participants?"));
    const names = [];

    for (let i = 0; i < userCount; i++)
        {
        names.push(prompt("Name of the participant"));
        }

    names.sort();

    const list = document.querySelector("#target ol");
    list.innerHTML = names.map(name => `<li>${name}</li>`).join("");
}