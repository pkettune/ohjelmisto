"use strict";

function askNumbersAndReverse()
{
    const numbers = [];

    for (let i = 0; i < 5; i++)
    {
        numbers[i] = (prompt("Give me a number"));
    }

    for (let i = numbers.length - 1; i >= 0; i--)
    {
        console.log(numbers[i]);
    }
}
