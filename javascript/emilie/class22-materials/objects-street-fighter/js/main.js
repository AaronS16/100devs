//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function MakeSFCharacter(punch, kick, catchPhrase,specialMove){
    this.punch = punch
    this.kick = kick
    this.catchPhrase = catchPhrase
    this.specialMove = specialMove
    this.taunt = function(){
        console.log(`you can't handle my ${specialMove}`)   
    }
    this.winning = function(){
        console.log(`Hahah! ${this.catchPhrase}`)
    }
    this.dash = function(){
        console.log(`Whoop, missed me!`)
    }
}
