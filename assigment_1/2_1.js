'use strict';

let allNumbers = [];
let input;


for(let i = 0; i < 5; i++) {
    input = prompt("enter number: ");
    allNumbers.unshift(input);
}

for(let i = 0; i < allNumbers.length; i++) {
    console.log(allNumbers[i]);
}