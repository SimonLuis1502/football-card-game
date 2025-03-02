import {addButtonListener, getRandomInt}  from './common.js';

class Card {
    constructor(id, name, club, trophies, games, goals) {
        this.id = id;
        this.name = name;
        this.club = club;
        this.trophies = trophies;
        this.games = games;
        this.goals = goals;
    }
}
const CristianoRonaldo = new Card(1, "Cristiano Ronaldo", "Al-Nassr", 20, 1000, 1000);
const LionelMessi = new Card(2, "Lionel Messi", "Inter Miami", 50, 900, 1010);
const Neymar = new Card(3, "Neymar", "Al-Hilal", 25, 500, 300);
const KylianMbappe = new Card(4, "Kylian Mbappe", "PSG", 15, 300, 200);
const RobertLewandowski = new Card(5, "Robert Lewandowski", "FC Barcelona", 30, 600, 450);
const KarimBenzema = new Card(6, "Karim Benzema", "Al-Ittihad", 25, 700, 400);
const LukaModric = new Card(7, "Luka Modric", "Real Madrid", 20, 800, 100);
const ErlingHaaland = new Card(8, "Erling Haaland", "Manchester City", 5, 150, 130);
const MohamedSalah = new Card(9, "Mohamed Salah", "Liverpool", 15, 350, 250);
const KevinDeBruyne = new Card(10, "Kevin De Bruyne", "Manchester City", 20, 400, 100);
const SadioMane = new Card(11, "Sadio Mane", "Al-Nassr", 18, 500, 200);
const PaulPogba = new Card(12, "Paul Pogba", "Juventus", 15, 400, 50);
const AntoineGriezmann = new Card(13, "Antoine Griezmann", "Atletico Madrid", 20, 550, 220);
const EdenHazard = new Card(14, "Eden Hazard", "Real Madrid", 17, 450, 110);
const SergioRamos = new Card(15, "Sergio Ramos", "Sevilla", 25, 700, 100);
const GerardPique = new Card(16, "Gerard Pique", "FC Barcelona", 23, 600, 50);
const ManuelNeuer = new Card(17, "Manuel Neuer", "FC Bayern München", 30, 750, 0);
const JanOblak = new Card(18, "Jan Oblak", "Atletico Madrid", 18, 400, 0);
const MarcAndreTerStegen = new Card(19, "Marc-Andre ter Stegen", "FC Barcelona", 20, 500, 0);
const ThibautCourtois = new Card(20, "Thibaut Courtois", "Real Madrid", 22, 550, 0);
const AlissonBecker = new Card(21, "Alisson Becker", "Liverpool", 19, 480, 0);
const EdersonMoraes = new Card(22, "Ederson Moraes", "Manchester City", 20, 500, 0);
const VirgilVanDijk = new Card(23, "Virgil van Dijk", "Liverpool", 18, 450, 45);
const KalidouKoulibaly = new Card(24, "Kalidou Koulibaly", "Al-Hilal", 15, 400, 35);
const RaphaelVarane = new Card(25, "Raphael Varane", "Manchester United", 20, 500, 25);
const AymericLaporte = new Card(26, "Aymeric Laporte", "Manchester City", 17, 420, 20);
const LeonardoBonucci = new Card(27, "Leonardo Bonucci", "Union Berlin", 25, 600, 35);
const GiorgioChiellini = new Card(28, "Giorgio Chiellini", "Los Angeles FC", 28, 650, 25);
const MatsHummels = new Card(29, "Mats Hummels", "Borussia Dortmund", 22, 550, 30);
const JeromeBoateng = new Card(30, "Jerome Boateng", "Olympique Lyon", 20, 500, 15);
const ThiagoSilva = new Card(31, "Thiago Silva", "Chelsea", 24, 580, 25);
const JoshuaKimmich = new Card(32, "Joshua Kimmich", "FC Bayern München", 18, 400, 40);
const NGoloKante = new Card(33, "N'Golo Kante", "Al-Ittihad", 15, 350, 20);
const Casemiro = new Card(34, "Casemiro", "Manchester United", 22, 450, 30);
const Rodri = new Card(35, "Rodri", "Manchester City", 15, 350, 25);
const ViniciusJunior = new Card(36, "Vinicius Junior", "Real Madrid", 10, 300, 50);
const JudeBellingham = new Card(37, "Jude Bellingham", "Real Madrid", 8, 180, 30);
const HarryKane = new Card(38, "Harry Kane", "FC Bayern München", 20, 400, 250);
const OusmaneDembele = new Card(39, "Ousmane Dembele", "PSG", 9, 220, 45);
const MateoRetegui = new Card(40, "Mateo Retegui", "Genoa", 3, 80, 25);
const FlorianWirtz = new Card(41, "Florian Wirtz", "Bayer Leverkusen", 5, 150, 35);
const LautaroMartinez = new Card(42, "Lautaro Martinez", "Inter Mailand", 10, 250, 100);
const JamalMusiala = new Card(43, "Jamal Musiala", "FC Bayern München", 7, 140, 40);
const MichaelOlise = new Card(44, "Michael Olise", "Crystal Palace", 2, 60, 15);
const KarimAdeyemi = new Card(45, "Karim Adeyemi", "Borussia Dortmund", 4, 100, 30);
const DaniCarvajal = new Card(46, "Dani Carvajal", "Real Madrid", 20, 400, 5);
const ToniKroos = new Card(47, "Toni Kroos", "Real Madrid", 25, 500, 50);
const ChristianPulisic = new Card(48, "Christian Pulisic", "AC Milan", 7, 250, 35);
const WestonMcKennie = new Card(49, "Weston McKennie", "Juventus", 5, 150, 20);
const SerginoDest = new Card(50, "Sergino Dest", "PSV Eindhoven", 3, 90, 10);


const shuffleCards = (cardsCount) => {
    let player1Cards = [];
    let player2Cards = [];
    let remainingCards = [...allCards];
    for (let i = 0; i < cardsCount; i++) {
        player1Cards.push(remainingCards.splice(getRandomInt(0, remainingCards.length), 1)[0]);
        player2Cards.push(remainingCards.splice(getRandomInt(0, remainingCards.length), 1)[0]);
    }
    return [player1Cards, player2Cards];
}


const allCards = [
    CristianoRonaldo,
    LionelMessi,
    Neymar,
    KylianMbappe,
    RobertLewandowski,
    KarimBenzema,
    LukaModric,
    ErlingHaaland,
    MohamedSalah,
    KevinDeBruyne,
    SadioMane,
    PaulPogba,
    AntoineGriezmann,
    EdenHazard,
    SergioRamos,
    GerardPique,
    ManuelNeuer,
    JanOblak,
    MarcAndreTerStegen,
    ThibautCourtois,
    AlissonBecker,
    EdersonMoraes,
    VirgilVanDijk,
    KalidouKoulibaly,
    RaphaelVarane,
    AymericLaporte,
    LeonardoBonucci,
    GiorgioChiellini,
    MatsHummels,
    JeromeBoateng,
    ThiagoSilva,
    JoshuaKimmich,
    NGoloKante,
    Casemiro,
    Rodri,
    ViniciusJunior,
    JudeBellingham,
    HarryKane,
    OusmaneDembele,
    MateoRetegui,
    FlorianWirtz,
    LautaroMartinez,
    JamalMusiala,
    MichaelOlise,
    KarimAdeyemi,
    DaniCarvajal,
    ToniKroos,
    ChristianPulisic,
    WestonMcKennie,
    SerginoDest
];

const formatACard = (card) =>{
    const formattedCard = `ID: ${(card.id)}<br>
    Name: ${card.name}<br>
    Club: ${(card.club)}<br>
    Trophies: ${(card.trophies)}<br>
    Games: ${(card.games)}<br>
    Goals: ${(card.goals)}`
return formattedCard;
}

const getCardValues = (card1,card2, value) => {
    const card1Value = card1[value];
    const card2Value = card2[value];
    return [card1Value, card2Value];
}

const compareTwoValues = (value1, value2) => {
    let player1Win = null;
    if (value1 === value2) { //no player wins
        player1Win = null;
    } else if (value1 > value2) { //player1 wins
        player1Win = true;
    } else { //player2 wins
        player1Win = false;
    }
    return player1Win;
}



export{allCards, shuffleCards, formatACard, getCardValues, compareTwoValues};