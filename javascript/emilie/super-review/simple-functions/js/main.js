//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(a, b){
    let difference = a - b
    alert(difference)
}
//create a function that divides three numbers and console logs the quotient
function divides( a,b,c){
    let quotient = a / b /c
    console.log(quotient)
}
//create a function that multiplys three numbers and returns the product
function multiply(a,b,c){
    let product = a * b * c
    return product
}
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function takeThree(a,b,c){
    let add = a + b,
     results = add % c
return results
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function takeFour(a,b,c,d){
    let multiply = a * b * c 
    let product = a * b
    if(product > 100){
        console.log(a + b)
    } else if(product < 100) {
        console.log(c-d)
    } else{
        alert(multiply / d )
    }

}