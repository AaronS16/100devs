//Create an espresso machine constructor that makes machines with 4 properties and 3 methods


class EspressoMachine {
    constructor(manufacturer, brand, model, color) {
        this.manufacturer = manufacturer
        this.brand = brand
        this.model = model
        this.color = color
    }
    brewCoffee() {
        console.log('Make a cup of coffee')
    }
    boilWater(){
        console.log('Boil the water')
    }
    powerOn(){
        console.log('Turn on machine')
    }
}