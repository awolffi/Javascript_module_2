'use strict';

const listOfNames = ['Jeke', 'Paul', 'Lucy', 'Mark'];

let allNames = "";

function concat(arr) {
    for (let i = 0; i < arr.length; i++) {
        allNames += arr[i];
    }
    return allNames;
}


document.getElementById("target").innerHTML = concat(listOfNames);