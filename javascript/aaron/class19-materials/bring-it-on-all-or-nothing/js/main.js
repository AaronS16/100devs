// *Variables*
// Declare a variable, assign it a boolean, and alert the value

let green = true;
alert(green)

// Declare a variable, reassign it to your favorite color, and console log the value

let color = 'blue';
color = 'green';
console.log(color);

// *Functions*
/* Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. 
Return the result. Call the function. */

function num4 (w, x, y, z) {
    return (w + x + y) / z
}
console.log(num4(1, 2, 3, 4))

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function squared (x, y) {
    console.log(Math.pow(x, y));
}
squared(4,3)

// *Conditionals*
/* Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, 
console log the string */

function text (b, word) {
    if (b) {
        alert(word)
    }
    else console.log(word)
    // b ? alert(word) : console.log(word)
}


//*Loops*
/*Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible 
by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number 
is divisible by 3 and 5 log "fizzbuzz" instead of that number */

function fizz (x) {
    for (let i = 1; i <= x; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('Fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else console.log(i)
    }
}
fizz(20);