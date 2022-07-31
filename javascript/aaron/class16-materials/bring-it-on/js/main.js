// *Variables*
// Create a variable and console log the value

let cheer = 'You can do it!!!';

console.log(cheer)

// Create a variable, add 10 to it, and alert the value

let math = 10;
alert(math += 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function sub4 (w, x, y, z) {
    alert(w - x -y - z);
}
sub4(10, 9, 6, 4)

// Create a function that divides one number by another and returns the remainder

function remainder (x, y) {
    return x % y;
}
console.log(remainder(29, 3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function add2 (x, y) {
    if (x + y > 50) {
        alert('Jumanji');
    }
    else alert('Less than 50')
}
add2(10,0)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiply3 (x, y, z) {
    let sum = (x * y * z) % 3
    if (sum = '0') {
        alert('Zebra');
    }
    else alert('Not divisible by 3');
}
multiply3(3, 3, 3);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function loop (x, y) {
    for (i = 0; i < y; i++) {
        console.log(`You selected ${x}, ${y} times`)
    }
}
loop('Test', 20)