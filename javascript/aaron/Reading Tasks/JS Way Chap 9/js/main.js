class Dog{
    constructor(name, species, size){
        this.name = name;
        this.species = species;
        this.size = size;
    }
    describe() {
        console.log(`${this.name} is a ${this.species} dog measuring ${this.size}`);
    }
    cat() {
        console.log(`Look, a cat! ${this.name} barks: ${this.bark()}`);
    }
}

const fang = new Dog("Fang", "boarhound", 75);

const snowy = new Dog("Snowy", "terrier", 22);