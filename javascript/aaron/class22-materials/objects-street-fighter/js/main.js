//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeCharacter (name, fightStyle, height, age) {
    this.name = name;
    this.fightStyle = fightStyle;
    this.height = height;
    this.age = age;
    
    this.victoryCheer = function() {
        coneole.log('Whoo hoo');
    }
    this.losingCheer = function() {
        console.log('Aww man');
    }
    this.drawCheer = function() {
        console.log('Good fight');
    }
}

let fighterAaron = new MakeCharacter('Aaron', 'Boxing', "5'11", 30 )