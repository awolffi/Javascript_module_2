'use strict';

let userInput;
let numbers = [];



while (true) {
    userInput = prompt("give a number or press enter: ");

    if (userInput === "") {
        break;
    }
    numbers.push(Number(userInput));
}

numbers.sort((a, b) => b - a);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}