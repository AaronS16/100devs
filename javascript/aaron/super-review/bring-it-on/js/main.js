// *Variables*
// Create a variable and console log the value

const dog = 'Oakley';

// Create a variable, add 10 to it, and alert the value

let num = 1;

num += 10;

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtract4Nums(num1, num2, num3, num4){
    alert(num1 - num2 - num3 - num4)
}

subtract4Nums(18, 6, 2, 3)

// Create a function that divides one number by another and returns the remainder

function div4Nums(num1, num2){
    return num1 / num2
}

div4Nums(12, 5)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function add2Nums(num1, num2) {
    if(num1 + num2 > 50) {
        alert('Jumanji')
    } else {
        alert('Not larger than 50')
    }
}

add2Nums(30, 25)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function divisibleBy3(num1, num2, num3) {
    if(num1 * num2 * num3 % 3 === 0){
        alert('Zebra')
    } else {
        alert('Not divisible by 3')
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
