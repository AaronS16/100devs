//--- Easy
//create a variable and assign it a number
let z = 5
//minus 10 from that number
z-= 10

//print that number to the console
console.log(z)
//--- Medium
//create a variable that holds a value from the input
let valueNum = Number(document.querySelector('#danceDanceRevolution').value)
//add 25 to that number
valueNum += 25
//alert that number
alert(valueNum)
//--- Hard
//create a variable that holds the h1
let h1 = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click',addTwo)
function addTwo(){
    console.log(z + valueNum)
}

