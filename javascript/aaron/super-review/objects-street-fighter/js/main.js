//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods


function Fighter(name, fightStyle, health, specialMove){
    this.name = name,
    this.fightStyle = fightStyle,
    this.health = health,
    this.specialMove = specialMove

    this.attackck = function(){
        console.log('Super punch')
    }

    this.victoryCheer = function() {
        console.log('I\'m the best')
    }

    this.loser = function(){
        console.log('I need to train harder')
    }
}

let emilie = new Fighter('Emilie', 'Kung Fu', '50', 'Flaming Dragon')