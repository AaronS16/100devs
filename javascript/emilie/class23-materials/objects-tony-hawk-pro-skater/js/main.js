//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function TonyHakkCharacter(chName, chStance,chSponsor,chMove){
    this.characterName = chName 
    this.stance = chStance
    this.sponsor = chSponsor
    this.specialMove = chMove
    this.flip = function (){
        console.log('Kickflip!!')
    }
    this.taunt = function (){
        console.log(`don't make me use my ${this.specialMove}`)
    }
    this.grab = function () {
        console.log('Melon Grabb')
    }
}
let kareemCampbell = new TonyHakkCharacter('kareem', 'goofy','element','hello')