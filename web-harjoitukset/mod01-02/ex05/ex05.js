"use strict";

function checkLeapYear()
{
    const year = prompt("Check if year is a leap year, so give me a number you little");

    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
    document.querySelector("#target").innerHTML = ("It's a leap year!")
    else
    document.querySelector("#target").innerHTML = ("It's not a leap year :(")
}