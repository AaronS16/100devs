//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(name,health,speed,specialMove){
    this.name = name
    this.health = health
    this.speed = speed
    this.specialMove = specialMove
    this.kick = function(){
        console.log('kick..kick')
    }
    this.powerup = function(){
        console.log('powerrrr uppp')
    }
    this.throw = function(){
        console.log('Get out the way..')
    }
}

let aaron = new StreetFighter('taco',1000,'super fast','Face kick')
let emilie = new StreetFighter('da bestest', 1000000, 'faster than Aaron', 'all powers')

