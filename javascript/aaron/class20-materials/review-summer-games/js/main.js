//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 


function multiply(arr) {
    let product = 1
    arr.forEach(num => product *= num)
    alert(product)
}

multiply([1, 2, 3, 4, 5, 6]);


// function positiveSum(arr) {
//     let sum = 0;
   
//    for (let i=0; i < arr.length; i++) {
//      if (arr[i] >= 0) sum += arr[i];
//    }  
//    return sum;
//  }

//  console.log(positiveSum([-1,2,-3,4,-5,6,-7]))