const fName = prompt('What is your first name?')
const lName = prompt('What is your Last name?')

alert(`Hello, ${fName} ${lName}`)

let price = Number(prompt('Please give me a starting price?'))

let total = price * 0.206

alert(total + price)

let celcius = Number(prompt('Please give me a temperature in Celcius'))

let temp = celcius * 9/5 + 32

alert(temp)

let number1 = 5;
let number2 = 3;

let number3 = number1
let number4 = number2

number1 = number4
number2 = number3

console.log(number1)
console.log(number2)