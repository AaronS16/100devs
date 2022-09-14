//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine{
    constructor(color,make,model,price){
        this.color = color
        this.make = make
        this.model = model
        this.price = price 
    }
    turnOn(){
        console.log('Good day, I am now on!')
    }
    steam(){
        console.log('ITTSSS SUMMER SALLEEE 50%%')
    }
    brew(){
        console.log('Good STUFF coming your way')
    }
}

let gaggia = new EspressoMachine('red','Gaggia','classic Pro',)