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
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }    
}
class Cat extends Animal{
    constructor(name,breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} meows`)
    }    
}
class Elephant extends Animal{
    constructor(name, color) {
        super(name)
        this._color = color
    }
    get color() {
        console.log(`Dumbo is ${this._color}`)
    }
}


let simba = new Dog('Simba','Shepard')
let machi = new Dog('The Machine','Pitbull')
let salem = new Cat('Salem', 'American Shorthair')
let dumbo = new Elephant('Dumbo', 'Brown')

let farm = [simba,machi,salem, dumbo]

for( a of farm ){
    console.log(a.name)
    a.speak()
    a.color
}