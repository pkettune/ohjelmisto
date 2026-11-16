'use strict';

async function getNumber(number) {
   const response = await fetch(`http://127.0.0.1:3000/prime_number/${number}`);
   const result = await response.json();
   return result;
}
