//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function MultiplyNums(){
    let product = 1 
    Array.forEach( num => product *= num )
    alert(product)
} 
MultiplyNums([10,])