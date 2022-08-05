/*Create a function that takes in an array of numbers. Return a new array containing every even number from the original 
array (do not use map or filter) */

// function even(arr) {
//     for (i=0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//         console.log([i])
//         }
//     }
// }
// even([0,1,2,3,4,5,6,7,8,9])


function onlyEvens(nums) {
    let evens = []

    nums.forEach( n => {
        if (n % 2 === 0) {
            evens.push(n)
        }
    })

    return evens
}

console.log(onlyEvens([1,2,3,4,5,6]))