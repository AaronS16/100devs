//---Easy
//create a function that subtracts two numbers and alerts the difference

function sub2 (x, y) {
    alert(x - y)
}
sub2(7,4)

//create a function that divides three numbers and console logs the quotient

function div3 (x, y, z) {
    console.log(x / y / z)
}
div3(27, 9, 3)

//create a function that multiplys three numbers and returns the product

function multiply3 (x, y, z) {
    return x * y * z
}
console.log(multiply3(8, 2, 6))

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function medium (x, y, z) {
    return (x + y) % z
}
console.log(medium(9, 8, 3))


//---Hard
/*create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. 
If the product is less that 100, subtract the difference of the last two numbers and console log the value. 
If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number */

function fourNum(w, x, y, z) {
    if (w * x > 100) {
        console.log(w * x + (y + z))
    }
    else if (w * x < 100) {
        console.log(w * x - (y + z))
    }
    else alert((w * x * y) % z) 
}

fourNum(51,2,2,3)
 