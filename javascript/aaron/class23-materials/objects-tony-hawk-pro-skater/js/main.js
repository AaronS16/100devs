//Create a Tony Hawk Pro Skater constructor that makes skating game character with 4 properties and 3 methods

function Skater(name, handedness, height, weight) {
    this.name = name;
    this.handedness = handedness;
    this.height = height;
    this.weight = weight;

    this.grind = function() {
        console.log('grinding on the rails');
    } 
    this.taunt = function() {
        console.log('Do you even skate bro?');
    }
    this.cheer = function() {
        console.log("I'm the Michael Jordan of skating");
    }
}
