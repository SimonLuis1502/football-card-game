import {createNewCard} from "./cards.js";
import * as readline from 'node:readline';
import {allCards} from "./cards.js";
import MyGame from "./gameplay.js";
import http from "http";
import fs from "fs";





const askUsersName = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question('Please enter the name of Player1: ', (name1) => {
            rl.question('Please enter the name of Player2:', (name2) => {
                resolve([name1,name2]);
                rl.close();
            })
        });
    });

};
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randInt = Math.floor(Math.random() * (max - min + 1)) + min;
    return randInt
}

const getTwoRandomCardIds = () => {
    const min = 1;
    const max = allCards.length
    const card1Id = getRandomInt(min,max);
    let card2IdCandidate = Math.floor(Math.random() * (max - min + 1)) + min;
    while(card1Id === card2IdCandidate) {
        card2IdCandidate = Math.floor(Math.random() * (max -
            min + 1)) + min;
    }
    const card2Id = card2IdCandidate;
    return [card1Id, card2Id];
}

const shuffleTwoRandomCards = () =>{
    const [card1Id, card2Id] = getTwoRandomCardIds();
    const card1 = allCards[card1Id-1];
    const card2 = allCards[card2Id-1];
    return [card1, card2];
}

const showOneCard = (playerName,card) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log(`${playerName} gets shown his card now.`);
    return new Promise((resolve) => {rl.question('Please press enter when ready: ', () => {
    resolve();
    console.log(card);
    rl.close();
    })
    })

}

const moveOn = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {rl.question('Please press enter to continue: ', () => {
        resolve()
        rl.close();
    })
    })

}

const showTwoCards = async([playerName1, playername2],[card1, card2]) => {

    await showOneCard(playerName1,card1);
    await showOneCard(playername2,card2);

}

const chooseCompareValue = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question('Please enter:\n`1` for `trophies`\n`2` for `games`\n`3` for `goals`', (valueNum) => {
            resolve(valueNum);
            rl.close();
        });

    });
};


const gameFlow = async() =>{
    console.log("Welcome to the game!")
    const playerNames = await askUsersName();
    console.log(`Hello ${playerNames[0]} and ${playerNames[1]}!`);
    console.log(`You will now both receie a random card`);
    const playerCards= shuffleTwoRandomCards();
    const [card1, card2] = playerCards
    const cardsShow = await showTwoCards(playerNames, playerCards);
    const moveOn1 = await moveOn();
    console.log("I will now pick a random player.\n This player will start with choosing any value of his card.\nThis value will be compared to the same value of the other players card.\nWhoever has the better stat wins.");
    const startingPlayerNum = getRandomInt(1,2);
        console.log(`I choose ${playerNames[startingPlayerNum-1]}!`)
    console.log(`You will start the game.`);
    const valueNum = await chooseCompareValue()
    if (valueNum == 1){
        var compareValue = "trophies";
        var [cardValue1, cardValue2] = [card1.trophies,card2.trophies]
    }else if (valueNum == 2){
        var compareValue = "games";
        var [cardValue1, cardValue2] = [card1.games,card2.games]
    }else if (valueNum == 3){
        var compareValue = "goals"
        var [cardValue1, cardValue2] = [card1.goals,card2.goals]
    }
    console.log(`${playerNames[startingPlayerNum-1]} choose ${compareValue}!`);
    console.log(`${playerNames[0]}s card is ${card1.name} and his ${compareValue} is ${cardValue1}`)
    console.log(`${playerNames[1]}s card is ${card2.name} and his ${compareValue} is ${cardValue2}`)
    if (MyGame.card1Win()===null){
        console.log("Its a putt!")
    }else if(MyGame.card1Win()){
        console.log(`${playerNames[0]} wins!`);
    }else if(!MyGame.card1Win())
    {
        console.log(`${playerNames[1]} wins!`);
    }
}

const gameStart = async()=>{

}

gameFlow();
