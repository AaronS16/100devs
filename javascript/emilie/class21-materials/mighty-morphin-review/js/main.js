// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'Thanksgiving';
favHoliday = favHoliday.toUpperCase();
console.log(favHoliday);
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'Happy Thanksgiving'
alert(str.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function takeInNumbers(num1 ,num2, num3, num4, num5){
    const subNums = 100 - num1 - num2 - num3 - num4 - num5 
    alert(Math.abs(subNums)); 
}
takeInNumbers(4,5,6,7,7);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function takesInThreeNumbs(num1, num2, num3){
    let min = Math.min(num1, num2, num3)
    let max = Math.max(num1,num2,num3)
    console.log(`The lowest number is ${min} and the highest number is ${max}`)
}
takesInThreeNumbs(5,6,7);
// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headOrTails(){
    let result = Math.random()
    if(result < .5){
        return 'Heads';
    } else {
        return 'Tails'
} }
// console.log(headOrTails());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function headTail(n){
    for(let i = 1; i <= n ; i++){
        let result = headOrTails()
        console.log(result);
    }
}
    headTail(5);