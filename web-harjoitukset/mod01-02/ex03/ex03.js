"use strict";

function askNumbers()
{
    const n1 = prompt("1st number");
    const n2 = prompt("2nd number");
    const n3 = prompt("3rd number");

    const r1 = +n1 + +n2 + +n3;
    const r2 = +n1 * +n2 * +n3;
    const r3 = (+n1 + +n2 + +n3)/3;

    document.querySelector("#target").innerHTML = "sum = " + r1 +" product = " + r2 + " average = " + r3;
}

// + eteen on parseInt()