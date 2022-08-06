//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 


// function multiply(arr) {
//     let product = 1
//     arr.forEach(num => product *= num)
//     alert(product)
// }

// multiply([1, 2, 3, 4, 5, 6]);


// function positiveSum(arr) {
//     let sum = 0;
   
//    for (let i=0; i < arr.length; i++) {
//      if (arr[i] >= 0) sum += arr[i];
//    }  
//    return sum;
//  }

//  console.log(positiveSum([-1,2,-3,4,-5,6,-7]))

const character = {
    name: 'Aurora',
    health: 150,
    strength: 25,
    xp: 0,

    describe(aurora) {
    aurora.health -= 20;
    aurora.strength += 10;
    aurora.xp += 15;
    return `${this.name} has ${this.health} health points, ${this.strength} as strength, and ${this.xp} experience`;
    }
};
console.log(character.describe(character));

const dog = {
    name: 'Oakley',
    species: 'Husky',
    size: '70lbs',
    
    bark() {
        return 'woof, woof';
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);