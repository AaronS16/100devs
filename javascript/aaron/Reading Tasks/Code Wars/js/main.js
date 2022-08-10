// Sum of Positive

// function positiveSum(arr) {
//     let sum = 0;
   
//    for (let i=0; i < arr.length; i++) {
//      if (arr[i] >= 0) sum += arr[i];
//    }  
//    return sum;
//  }

//  console.log(positiveSum([-1,2,-3,4,-5,6,-7]))

// Reverse string (Make the text reverse)

// function solution(str){
//     return str.split("").reverse().join("");
//   }
//   solution("hello");

//Turn a number into a string

// function numberToString(num) {
//     // Return a string of the number here!
//     let str = num.toString();
//     return str
//   }

//Opposite Number

// const opposite = number => -number;

//Even or Odd

// function even_or_odd(number) {
//     if (number % 2 === 0) {
//       return 'Even'
//     } else return 'Odd'
//   }

//Count by X

// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n; i++) {
//       z.push(x * i);
//     }
//     return z;
//   }

//Character Object

// const character = {
//     name: 'Aurora',
//     health: 150,
//     strength: 25,
//     xp: 0,

//     describe(aurora) {
//     aurora.health -= 20;
//     aurora.strength += 10;
//     aurora.xp += 15;
//     return `${this.name} has ${this.health} healm th points, ${this.strength} as strength, and ${this.xp} experience`;
//     }
// };
// console.log(character.describe(character));

// const dog = {
//     name: 'Oakley',
//     species: 'Husky',
//     size: '70lbs',
    
//     bark() {
//         return 'woof, woof';
//     }
// }

// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


//Return Negative

// function makeNegative(num) {
//     // Code?
//     if (num === 0) {
//       return 0
//     } else if (num < 0) {
//       return num
//     } else return num *- 1;
//   }
//   console.log(makeNegative(-4))

//Repeat String

// function repeatStr (n, s) {
//     let text = ''
//     for (let i=1; i <= n; i++) {
//     text += s
//     }
//     return text
//   }
//   console.log(repeatStr(6,'Hola'))

// Remove first and last character

// const removeChar = str => {
//     return str.slice(1, str.length - 1)
// }

// console.log(removeChar('test'))

//Returning Strings

// const greet = name => `Hello, ${name} how are you doing today?`;