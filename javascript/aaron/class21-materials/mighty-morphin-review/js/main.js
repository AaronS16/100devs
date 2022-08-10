// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

let holiday

holiday = 'Christmas'.toUpperCase()

console.log(holiday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let dog = 'Oakley'

alert(dog.slice(-3))

// *Functions*
/* Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. 
Call the function. */

function subFrom100 (v, w, x, y, z) {
    let sum = 100 - v - w - x - y - z 
    return Math.abs(sum) 
}
console.log(subFrom100(1, 2, 3, 4, 5, 6))


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function highLow (x, y, z) {
    let max = Math.max(x, y, z)
    let min = Math.min(x, y, z)
    console.log(`The lowest number is ${min} and the highest number is ${max}`)
}
highLow(1,2,3)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

// function headsTails () {
//     let result = Math.random()
//     if (result < .5) {
//         return 'Heads'
//     } else {
//         return 'Tails'
//     }

// }
// console.log(headsTails())

const headsTails = _ => Math.random() < .5 ? 'Tails' : 'Heads'

//*Loops*
/*Create a function that takes in a number. Console log the result of heads or tails using the previous function x times 
where x is the number passed into the function. Call the function. */


function flipFlipFlipadelphia (x) {
    for (let i = 1; i <= x; i++) {
        let result = headsTails()
        console.log(result)
   }
}
flipFlipFlipadelphia(10)