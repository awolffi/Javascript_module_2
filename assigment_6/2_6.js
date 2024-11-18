'use strict';

function dice() {
    return Math.floor(Math.random() * 6) + 1;

}

let rolled;
let allRolls = [];

while (true) {
    rolled = dice();
    allRolls.push(rolled);
    if (rolled == 6) {
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