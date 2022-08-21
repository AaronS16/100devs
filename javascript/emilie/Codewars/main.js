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

//sum of positive 
//function positiveSum(arr) {
//     let sum = 0;    
//     for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
//       if (arr[i] > 0) {                   // if arr[i] is greater than zero
//         sum += arr[i];                  // add arr[i] to total
//       }
//     }
//     return total;                         // return total
//   }
/// string repeat
// function repeatStr (n, s) {
//     let str = '';
//     for(let i = 0; i < n; i++){
//       str += s;
//   }
//   return str;
//   }
// Returning strings//

// const greet = (name) =>`Hello, ${name} how are you doing today?` 
// if you can't sleep, just count sheep!! 

// let countSheep = function (num){
//     let addingStr = '' 
//     for( let i = 1; i <= num; i++){
//         addingStr += `${i} sheep...`
//     }
//     return addingStr
//   }

// console.log(countSheep(5));

//Create a method to see whether the string is ALL CAPS.//

// String.prototype.isUpperCase = function(str) {
//     return this == this.toUpperCase()
//      } 
//      {
        
//      }

//hex to decimal //
// function hexToDec(hexString){
//     return parseInt(hexString,16);
//   }

// function maps(x){
//     return x.map(n => n * 2);
//     }
//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.
function check(a, x) {
    return a.includes(x);
    }
    // Contaminated String

const contamination = ((text, char) => {
    let contaminated = ''
    if(text < 0 || char < 0) {
      return  '';
    } else {
        for(let i = 0; i < text.length; i++)
        contaminated += `${char}`;
    }
    return contaminated
    });

    function sumMix(x){
        return x.map(a => +a).reduce((a,b) => a + b, 0);
        }

    // Given a string, you have to return a string in which each character (case-sensitive) is repeated once.//
    const doubleChar = (str) => str.split("").map(c => c + c ).join("");
    // Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.//
    const isDivisible = (n, x, y) => n % x == 0 && n % y == 0 ? true : false;

    // Find Multiples of a Number//
    function findMultiples(integer, limit) {
        let nums = []
        for(let i = 1; i <= limit; i++ ){
          if(i % integer == 0){
            nums.push(i)
          } 
          
        }
          return nums
          
          }
      