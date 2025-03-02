const MyGame = {
    card1Win(card1, card2, compareValue){
        if (compareValue === "trophies") {
            if (card1.trophies > card2.trophies) {
                return true
            } else if (card1.trophies < card2.trophies) {
                return false
            } else if (card1.trophies === card2.trophies) {
                return null
            }
        } else if (compareValue === "games") {
            if (card1.games > card2.games) {
                return true
            } else if (card1.games < card2.games) {
                return false
            } else if (card1.games === card2.games) {
                return null
            }
        } else if (compareValue === "goals") {
            if (card1.goals > card2.goals) {
                return true
            } else if (card1.goals < card2.goals) {
                return false
            } else if (card1.goals === card2.goals) {
                return null
            }
        }
    }
}

export default MyGame;