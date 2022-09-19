//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name, breed) {
        super(name)
        this.breed = breed
    }
}
class Zebra extends Animal {
    constructor(name, weight) {
        super(name)
        this.weight = weight
    }
}

let oakley = new Dog('Oakley', 'Husky')
let zegasus = new Zebra('zegasus', 150)