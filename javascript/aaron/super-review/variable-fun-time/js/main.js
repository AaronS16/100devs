//--- Easy
//create a variable and assign it a number

let num = 4;

//minus 10 from that number

num -= 10

//print that number to the console

console.log(num)

//--- Medium
//create a variable that holds a value from the input

// let numb = Number(document.querySelector('#danceDanceRevolution').value)

//add 25 to that number

// numb += 25

//alert that number

// alert(numb)

document.querySelector('button').addEventListener('click', addNum)

let value = 0

function addNum() {
    value = Number(document.querySelector('#danceDanceRevolution').value)
    value += 25
    alert(value)
}

//--- Hard
//create a variable that holds the h1


//add an event listener to that element that console logs the sum of the two previous variables

document.querySelector('button').addEventListener('click', h1Value)

function h1Value() {
    answer = document.querySelector('h1').innerText = `${num + value}`
}