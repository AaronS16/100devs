// *Variables*
// Create a variable and console log the value

let dog = 'Cali'
console.log(dog)

// Create a variable, add 10 to it, and alert the value

let money = 8;
alert(money + 10)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function sub4 (num1, num2, num3, num4) {
    alert(num1 - num2 -num3 - num4)
}

sub4 (50, 20, 10, 4)


// Create a function that divides one number by another and returns the remainder

function div (x, y) {
    return x % y;
}

console.log(div(5, 2))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function bigNum (num1, num2) {
    bigNum = num1 + num2
    if (bigNum >= 50) {
        alert('Jumanji')
    }
    else alert('Not large enough')
}

bigNum(35, 18)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function div3Nums (x, y, z) {
    div3Nums = x * y * z % 3
    if (div3Nums === 0) {
        alert('ZEBRA')
    }
    else alert('Not divisible by 3')
}

div3Nums(3, 6, 9)