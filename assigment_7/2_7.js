'use strict';

const maxNum = +prompt("giv number of dice faces: ");

function dice(maxf) {
    return Math.floor(Math.random() * maxf) + 1;

}

let rolled;
let allRolls = [];

while (true) {
    rolled = dice(maxNum);
    allRolls.push(rolled);
    if (rolled == maxNum) {
        break;
    }
}

const container = document.getElementById('target');

let listToPrint = "<ul>";

for (let i = 0; i < allRolls.length; i++) {
    listToPrint += `<li>${allRolls[i]}</li>`;
}

listToPrint += `</ul>`;

container.innerHTML = listToPrint;