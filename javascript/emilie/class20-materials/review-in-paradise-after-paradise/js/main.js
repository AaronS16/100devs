// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
let array = [10,20,30,40,50,60]
function number(firstNum,lastNum){
    if(firstNum > lastNum){
        alert('Hi')
    } else if (firstNum < lastNum ){
        alert('Bye')
    } else if (firstNum === lastNum){
        alert('we close in an hour')
    }
}