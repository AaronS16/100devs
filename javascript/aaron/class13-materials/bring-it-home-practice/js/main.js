document.querySelector('body').style.backgroundColor = 'black'

// *Variables*
// Create a variable and console log the value

let dog = 'Oakley';

console.log(dog);

// Create a variable, add 10 to it, and alert the value

let num = 5;

alert(num + 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function sub4 (num1, num2, num3, num4) {
    alert (num1 - num2 - num3 - num4)
}

sub4 (10, 3, 2, 4)

// Create a function that divides one number by another and returns the remainder

function remainder (x, y) {
    return x / y
}

console.log(remainder (10, 4))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function original (num1, num2) {
    let sum = num1 + num2;

    if (sum >= 50) {
        alert('Jumanji')
    }
    else alert('not enough')
}

original(25,30)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function zebra (num1, num2, num3) {
    let multiply = num1 * num2 * num3;
    let div = multiply % 3;

    if (div === 0) {
        alert('ZEBRA')
    }
    else alert('Not divisible by 3')
}

zebra(8, 2, 4)