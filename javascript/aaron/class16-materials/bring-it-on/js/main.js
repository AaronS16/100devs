// *Variables*
// Create a variable and console log the value

let dog = 'Oakley'

// Create a variable, add 10 to it, and alert the value

let i = 1

alert(i += 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function sub4 (num1, num2, num3, num4) {
    alert(num1 - num2 - num3 - num4)
}
sub4(50, 20, 40, 5)

// Create a function that divides one number by another and returns the remainder

function div (num1, num2) {
    return num1 % num2
}
console.log(div(10,3))


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function gt50 (x, y) {
    let sum = x + y
    if (sum > 50) {
        alert('Jumanji')
    }
    else alert('Not greater than 50')
}
gt50(25,3)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiply (x, y, z) {
    let product = (x * y * z) % 3
    if (product == 0) {
        alert('Zebra')
    }
    else alert('Not divisible by 3')
}
multiply(2, 2, 2)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function cheering () {

let cheer = prompt("Give me a cheer");
console.log(cheer)

let numberOfCheers = prompt('How much should we cheer?')
console.log(numberOfCheers)

}
