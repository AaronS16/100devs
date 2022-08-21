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
//     return `${this.name} has ${this.health} health points, ${this.strength} as strength, and ${this.xp} experience`;
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

//Counting Sheep

// let countSheep = function (num){
//     let str = ''
//     for(let i = 1; i <= num; i++) {
//       str += `${i} sheep...`
//     }
//     return str
//   }

//Hex to Decimal

// function hexToDec(hexString){
//     return parseInt(hexString,16);
//   }

//Is the string uppercase

// String.prototype.isUpperCase = function(str) {
//     return this == this.toUpperCase()
//   }

//Lost without a map

// function maps(x){
//     return x.map( n => n * 2);
//   }

//   console.log(maps([2, 3, 4]))

// function maps(x){
//     let arr = [];
//     for(let i = 0; i < x.length; i++){
//     arr.push(x[i] * 2);
//     }
//     return arr;
//     }

//You only need One

// function check(a, x) {
//     return a.includes(x);
//    }

// Contaminated String

// const contamination = ((text, char) => {
//     let contaminated = ''
//     if(text < 0 || char < 0) {
//       return  '';
//     } else {
//         for(let i = 0; i < text.length; i++)
//         contaminated += `${char}`;
//     }
//     return contaminated
//     });

//Take the first letters of two names

// function abbrevName(name){
//     let abbreviation = name
//     .split(' ')
//     .map(word => word[0])
//     .join('.')
//     return abbreviation.toUpperCase()
  
//   }

//Sum Mixed Array

// Answer 1
// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
//   }

//Repeat each character

// function doubleChar(str) {
//     let newStr = '';
//     for( let i = 0; i < str.length; i++) {
//       newStr += str[i] + str[i];
//     }
//     return newStr;
//   }
  
//   const doubleChar = (str) => str.split("").map(c => c + c).join("");

// Is n divisible by x AND y

// const isDivisible = (n, x, y) => n % x === 0 && n % y === 0 ? true : false;

// Find multiples of a number (For integer find how many times it goes into limit)

function findMultiples(integer, limit) {
    let answer = []
    for (let i = 1; i <= limit; i++) {
      if ( i % integer === 0) {
        answer.push(i)
      }
    }
    return answer
  }
  