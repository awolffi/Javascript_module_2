'use strict';

const count = prompt("how many names will you be entering today? ");
let participants = [];
let participant;

for (let i = 1; i <= count; i++) {
    participant = prompt(`enter name of participant number ${i}`);
    participants.push(participant);
}

participants.sort();

const container = document.getElementById("target");
let listToPrint = "<ol>";

for (let i = 0; i < participants.length; i++) {
    listToPrint += `<li>${participants[i]}</li>`;
}

listToPrint += '</ol>';

container.innerHTML = listToPrint;