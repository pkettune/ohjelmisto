"use strict";

function rollTheDice()
{
    const askedDice = prompt("How many dices you want to roll? ");

    let sum = 0;
    for(let i = 0; i < +askedDice; i++)
    {
        sum = sum + getRandomInt(1, 6)
    }
    document.querySelector("#target").innerHTML = sum;

}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}