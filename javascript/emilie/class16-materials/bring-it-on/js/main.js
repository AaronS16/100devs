// *Variables*
// Create a variable and console log the value
let bringItOn = 5
console.log(bringItOn)
// Create a variable, add 10 to it, and alert the value
let hello = 8 
let whatUp=hello + 10 
alert(whatUp)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFour (num1, num2 , num3, num4){
    let subNum = num1 - num2 - num3 - num4 
    alert(subNum)
}
subFour( 50, 2, 2 , 2)
// Create a function that divides one number by another and returns the remainder
function divideNumbers (num1, num2 ) {
    let subNums = num1 / num2
    return subNums
    }
   
    console.log(divideNumbers(100, 2))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addfiveZero(num1 , num2 ){
    let addTwoNumbs = (num1 + num2)
    if (addTwoNumbs >= 50){
        alert("Jumanji")
    }
   else alert("try again")
}

addfiveZero(10,10)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyByThree (num1,num2,num3){
    let product = (num1 * num2 * num3) % 3 
    if (product === 0){
        alert("ZEBRA")
    }
    else alert("oh Hey!")
}
multiplyByThree (9 , 9 ,9 )
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function wordLoop(word,num){
    for (let i = 1; i <= num; i++){
        console.log(word)
    }
}
wordLoop('wonderful', 21)