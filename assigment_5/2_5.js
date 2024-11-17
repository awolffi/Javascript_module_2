'use strict';
let userInput;
let allNumbers = [];

while (true) {
    userInput = +prompt("enter a number: ");
    if (allNumbers.includes(userInput)) {
        alert('this number has been given already. close this alert for the imputted numbers to appear in the console.');
        break;
    }
    allNumbers.push(userInput);
}
for (let i = 0; i < allNumbers.length; i++) {
    console.log(allNumbers[i]);
}