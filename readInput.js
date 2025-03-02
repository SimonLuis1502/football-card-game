import {addButtonListener}  from './common.js';

let playerName1 = "";
let playerName2 = "";

const userName1 = document.querySelector( '#UserName1');
addButtonListener('#submitName1', () => {
    playerName1 = userName1.value;
    document.querySelector('.player1Name').style.display = "none";
    document.querySelector('.player2Name').style.display = "block";
});

const userName2 = document.querySelector( '#UserName2');
addButtonListener('#submitName2', () => {
    playerName2 = userName2.value;
    document.querySelector('.player2Name').style.display = "none";
    document.querySelector('.greetStart').style.display = "none";
    document.querySelector('.greetEnd1').innerHTML += `<h2>Hello ${playerName1} and ${playerName2}, Welcome to the game!</h2>`;
    document.querySelector('.greetEnd1').style.display = "block";
    document.querySelector('.greetEnd2').style.display = "block";
});

addButtonListener('#startGame', () => {
    localStorage.setItem('player1', playerName1);
    localStorage.setItem('player2', playerName2);
    window.location.href = "/gameon";
});










