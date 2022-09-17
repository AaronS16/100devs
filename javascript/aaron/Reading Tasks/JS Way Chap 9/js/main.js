//Dogs

class Dog{
    constructor(name, species, size){
        this.name = name;
        this.species = species;
        this.size = size;
    }
    describe() {
        console.log(`${this.name} is a ${this.species} dog measuring ${this.size}`);
    }
    bark() {
        if (this.size > 60) {
            return 'Grrr! Grrr!'
        } else {
            return "Woof! Woof!"
        }
    }
    cat() {
        console.log(`Look, a cat! ${this.name} barks: ${this.bark()}`);
    }
}

const fang = new Dog("Fang", "boarhound", 75);

const snowy = new Dog("Snowy", "terrier", 22);

//Character Inventory

class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      this.gold = 10;
      this.key = 1;
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          console.log(
            `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
          );
          this.xp += bonusXP;
        }
      } else {
        console.log(`${this.name} can't attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength and ${this.xp} XP points`;
    }
  }