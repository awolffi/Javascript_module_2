'use strict';

let names = [];
let nameTemp;
for (let i = 1; i < 7; i++) {
    nameTemp = prompt(`giv name of dog numero ${i}`);
    names.push(nameTemp);
}

names.sort();


names.reverse();

const container = document.getElementById('target');

let listToPrint = "<ul>";

for (let i = 0; i < names.length; i++) {
    listToPrint += `<li>${names[i]}</li>`;
}

listToPrint += `</ul>`;

container.innerHTML = listToPrint;