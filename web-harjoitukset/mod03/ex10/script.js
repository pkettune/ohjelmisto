"use strict"

const numberOfParticipants = parseInt(prompt("How many participants?"));

let names = [];

for (let i = 0; i < numberOfParticipants; i++){
    let name = prompt("name of the part. " + (i+1));
    names.push(name);
}

const candidates = names.map(name => ({name, votes: 0,}));
console.log(candidates);