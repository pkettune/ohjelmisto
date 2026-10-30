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


// Write a program that rolls user defined number of dice and displays the sum 
// of the results of the dice rolls.(2p)
// First, program asks the user for the number of dice rolls.
// Then the program throws a die as many times as the user defined.
// Print the sum of the results in the console or in the HTML document.