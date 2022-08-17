//Create a Tony Hawk Pro Skater constructor that makes skating game character with 4 properties and 3 methods

function Skater(name, handedness, height, weight) {
    this.name = name
    this.handedness = handedness
    this.height = height
    this.weight = weight

    this.flip = function() {
        console.log('Kickflip');
    } 
    this.taunt = function() {
        console.log('Do you even skate bro?');
    }
    this.cheer = function() {
        console.log("I'm the Michael Jordan of skating");
    }
}

let darthMaul = new Skater('Darth Maul', 'Right', '6', 200)