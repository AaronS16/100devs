//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function MultiplyNumsInArr(arr){
    let product = 1 
    arr.forEach( num => product *= num )
    alert(product)
} 
MultiplyNumsInArr([10,2,3]);