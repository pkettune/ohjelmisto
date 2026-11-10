"use strict"

const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenArray = [];

even(arrayOfNumbers);

function even(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 == 0)
            evenArray.push(array[i])
    }
    console.log(array + "\n" + evenArray);
}