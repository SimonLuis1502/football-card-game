import {addButtonListener, getRandomInt}  from './common.js';
import {allCards, shuffleCards, formatACard, getCardValues, compareTwoValues} from "./cards.js";
const playerName1 = localStorage.getItem('player1');
const playerName2 = localStorage.getItem('player2');
let playerCards = []
let compareValue = 0;
let player1Win = 0;
let currentPlayer;
let cardsCount = [];


let cardCount = "";

addButtonListener(`#cardButton1`, () =>{
    cardCount = 1;
})
addButtonListener(`#cardsButton3`, () =>{
    cardCount = 3;
})
addButtonListener(`#cardsButton5`, () =>{
    cardCount = 5;
})
addButtonListener(`#cardsButton10`, () =>{
    cardCount = 10;
})
addButtonListener(`#cardsButton15`, () =>{
    cardCount = 15;
})
addButtonListener(`.cardCountButton`, () =>{
    document.querySelector('.cardCount').style.display = "none";
    document.querySelector('.cardShuffle').style.display = "block";
})




addButtonListener(`#shuffleButton1`, () =>{
    document.querySelector('.gameSettings').style.display = "none";
    const [player1Cards, player2Cards] = shuffleCards(cardCount);
    playerCards =  [player1Cards, player2Cards];
    document.querySelector('.gamePlay').style.display = "block";
    document.querySelector('#player1Cards').insertAdjacentHTML('afterbegin', `<h2>Cards of ${playerName1}</h2>`);
    document.querySelector('#player2Cards').insertAdjacentHTML('afterbegin', `<h2>Cards of ${playerName2}</h2>`);
    builtDecks(player1Cards, player2Cards)
})



addButtonListener(`#showFirstCard1`, () =>{
    if (document.querySelector('#firstCard1').style.display === "block"){
        document.querySelector('#firstCard1').style.display = "none";
        document.querySelector('#showFirstCard1').innerText = "show first card";
    }else {
        document.querySelector('#firstCard1').style.display = "block";
        document.querySelector('#showFirstCard1').innerText = "hide first card";
    }
})

addButtonListener(`#showFirstCard2`, () =>{
    if (document.querySelector('#firstCard2').style.display === "block"){
        document.querySelector('#firstCard2').style.display = "none";
        document.querySelector('#showFirstCard2').innerText = "show first card";
    }else{
    document.querySelector('#firstCard2').style.display = "block";
    document.querySelector('#showFirstCard2').innerText = "hide first card";
    }
})

addButtonListener(`#rollDice`, () =>{
    let startingPlayer = "";
    const diceRoll = getRandomInt(1, 2);
    if (diceRoll === 1) {
        startingPlayer = playerName1;
    } else {
        startingPlayer = playerName2;
    }
    currentPlayer = startingPlayer;
    document.querySelector('#startingPlayer2').style.display = "block";
    document.querySelector('.currentPlayer').style.display = "block";
    document.querySelector('#startingPlayer2').insertAdjacentHTML('afterbegin', `<h3>The starting player is ${startingPlayer}!</h3>`);
    document.querySelector('#startingPlayer1').style.display = "none";
})

addButtonListener(`.selectValue`, () =>{
    document.querySelector('.startingPlayer').style.display = "none";
    document.querySelector('.currentPlayer').style.display = "none";
    document.querySelectorAll('.firstCard').forEach(card => {
        card.style.display = "block";
    });
    document.querySelectorAll('.showFirstCard').forEach(card => {
        card.style.display = "none";
    });
})



addButtonListener(`#pickTrophies`, () =>{
    setCompareValue('trophies');
})

addButtonListener(`#pickGames`, () =>{
    setCompareValue('games');
})

addButtonListener(`#pickGoals`, () =>{
    setCompareValue('goals');
})



// Event Listener für compareValue Änderungen
document.addEventListener('compareValueChanged', (event) => {
    document.querySelector('#continueGame').style.display = "block";
    document.querySelector('#compareCards').style.display = "block";
    const newCompareValue = event.detail.newValue;
    const [Value1, Value2] = getCardValues(playerCards[0][0], playerCards[1][0], newCompareValue); // Lokale Definition
    document.querySelector('#compareCards').insertAdjacentHTML('afterbegin', `<h4>${playerName1} has ${newCompareValue}: ${Value1}</h4> <br> <h4>${playerName2} has ${newCompareValue}: ${Value2}</h4>`);
    player1Win = compareTwoValues(Value1, Value2); // Werte werden direkt übergeben

    if (player1Win === null) {
        document.querySelector('#compareCards').insertAdjacentHTML('afterbegin', `<h3>It's a draw!</h3>`);
    } else if (player1Win) {
        document.querySelector('#compareCards').insertAdjacentHTML('afterbegin', `<h3>${playerName1} won this round!</h3>`);
    } else {
        document.querySelector('#compareCards').insertAdjacentHTML('afterbegin', `<h3>${playerName2} won this round!</h3>`);
    }
});


// Funktion, um compareValue zu ändern und Event auszulösen
const setCompareValue = (newValue) => {
    compareValue = newValue;
    const event = new CustomEvent('compareValueChanged', {
        detail: {
            newValue: compareValue
        }
    });
    document.dispatchEvent(event);
}

const exchangeCards = (winnerCards, looserCards)=>{
    winnerCards.push(winnerCards.splice(0,1)[0]);
    winnerCards.push(looserCards.splice(0,1)[0]);
    return [winnerCards,looserCards]
}

const draw = (player1Cards, player2Cards) => {
    player1Cards.push(player1Cards.splice(0,1)[0]);
    player2Cards.push(player2Cards.splice(0,1)[0]);
    return [player1Cards, player2Cards];
}

const builtDecks = (player1Cards,player2Cards)=>{
    document.querySelectorAll('.cardDeckSize').forEach(card => {
        card.innerHTML = "";
    });
    document.querySelector('#cardDeckSize1').insertAdjacentHTML(`beforeend`, `<h4>Cards: ${player1Cards.length}</h4>`);
    document.querySelector('#cardDeckSize2').insertAdjacentHTML(`beforeend`, `<h4>Cards: ${player2Cards.length}</h4>`);
    document.querySelectorAll('.showFirstCard').forEach(card => {
        card.style.display = "block";
    });
    document.querySelectorAll('.firstCard').forEach(card => {
        card.style.display = "none";
    });
    document.querySelector('#firstCard1').innerHTML = `<h4>${formatACard(player1Cards[0])}</h4>`;
    document.querySelector('#firstCard2').innerHTML = `<h4>${formatACard(player2Cards[0])}</h4>`;
    document.querySelector(`#compareCards`).innerHTML = ``
}

addButtonListener(`#continueGame`, () =>{
    document.querySelector('#compareCards').style.display = "none";
    document.querySelector('#continueGame').style.display = "none";
    if(player1Win === null) {
        playerCards = draw(playerCards[0],playerCards[1])
    }else if (player1Win) {
        playerCards = exchangeCards(playerCards[0],playerCards[1])
        currentPlayer = playerName1
    }else{
        let [player2Cards, player1Cards] = exchangeCards(playerCards[1],playerCards[0])
        playerCards = [player1Cards, player2Cards];
        currentPlayer = playerName2
    }
    setCardsCount(playerCards);
    builtDecks(playerCards[0],playerCards[1])
    document.querySelector('.currentPlayer').style.display = "block";
    document.querySelector('#currentPlayer').innerHTML = `<h3>The current player is ${currentPlayer}!</h3>`;
})

document.addEventListener('cardsCountChanged', (event2) => {
    if (cardsCount[0] === 0 || cardsCount[1] === 0) {
        document.querySelector('.gamePlay').style.display = "none";
        document.querySelector('.gameOver').style.display = "block";
        document.querySelector('.gameOver').insertAdjacentHTML('beforeend', `<h3>${playerName1} conquered all ${cardCount*2} cards and won the game!</h3>`);
    }
});

const setCardsCount = (playerCards) => {
    cardsCount = [playerCards[0].length, playerCards[1].length];
    const event2 = new CustomEvent('cardsCountChanged', {
        detail: {
           newCount: cardsCount
        }
    });
    document.dispatchEvent(event2);
}