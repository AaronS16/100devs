// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let foot = true;
alert(foot);

// Declare a variable, reassign it to your favorite color, and console log the value
let favoriteColor = 'green';
favoriteColor = 'blue';
console.log(favoriteColor);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function numbersPlus(num1, num2, num3, num4){
    return num1 + num2 + num3 / num4 
}
numbersPlus(1,2,3,4)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function twoNumbers(num1, num2){
    console.log(Math.pow(num1,num2))
}
twoNumbers(2,6)


// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
function booleanPractice(){
if (true) {
    alert('')
} else if(false){
    console.log('')
}
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
