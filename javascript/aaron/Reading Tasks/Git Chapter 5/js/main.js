//Improved Hello

function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
  }

let firstName = prompt("What's your first name?")

let lastName = prompt("What's your last name?")

alert(sayHello(firstName, lastName))

//Number Squaring

let x = 2

function square1(x) {
    let square = x * x
    return square
  }
  
  
  const square2 = x => x * x
  
  console.log(square1(0)); 
  console.log(square1(2)); 
  console.log(square1(5)); 
  
  console.log(square2(0)); 
  console.log(square2(2)); 
  console.log(square2(5));

  // Minimum of Two Numbers

function min () {
    
}


console.log(min(4.5, 5));
console.log(min(19, 9)); 
console.log(min(1, 1));