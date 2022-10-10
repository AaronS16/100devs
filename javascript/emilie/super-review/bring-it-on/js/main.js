// *Variables*
// Create a variable and console log the value
let n = 5
console.log(n)
// Create a variable, add 10 to it, and alert the value
n += 10
alert(n)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function fourNumbs(a,b,c,d){
    let difference = a - b - c - d 
    alert(difference)
}
fourNumbs(2,3,4,5)
// Create a function that divides one number by another and returns the remainder
function divides(a,b){
let total = a % b 
return total
}
divides(20,2)
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwos(a ,b){
let total = a + b 
if(total > 50 ){
    alert('Jumanji')
} else {
    alert('try again')
}
}
const addTwo = (a,b) => {
    let total = a + b;
    total > 50 ? alert('Jumanji') : alert('try again')
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyOfThree(a,b,c){
    let product = a * b * c 
    if(product % 3 === 0){
        alert('ZEBRA')
    } else(
        alert('try again')
    )
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function takesIn(word,n){
for(let i =0; i <= n; i ++){
    console.log(word)
    }
}