// *Variables*
// Create a variable and console log the value
let apple = 2
console.log(apple)
// Create a variable, add 10 to it, and alert the value
let openHouse = 5
let sum = openHouse + 10
alert(sum)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNumbers( num1, num2, num3, num4){
    const difference=( num1-num2 - num3 - num4)
    alert(difference)
}
subFourNumbers(50,30,5,1)
// Create a function that divides one number by another and returns the remainder
function dividesTwoNumbers(numb1,num2){
    return numb1 / num2
}
console.log(dividesTwoNumbers (20,2))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addingTwoNumbers(num1, num2){
    const sum = num1 + num2
    if( sum >= 50 ){
        alert( "Jumaji")
    }
    else alert("yay!")
}

addingTwoNumbers (40,10)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeNumbers(num1,num2,num3){
    const product = num1 * num2 * num3 
    if(product / 3 ){
        alert("ZEBRA")
    }
    else alert("oh Hey!")
}
multiplyThreeNumbers (5,5,5)