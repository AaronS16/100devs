//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this.name = name
  
    
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
    
}
class Dog extends Animal {
    constructor(name, breed){
        super(name)
        this.breed = breed
       
    }
}

let oakley = new Dog('Oakley','husky','4')
let cali = new Dog('cali', 'sheperd')

class cat extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    }
    speak(){
        console.log('MEOW')
    }
}