/*Create a function that takes in a number. The function should return an array that contains every number from 1 to 
that number as seperate elements */

function toNumber (arr) {
    let newArr = []
    for (i = 1; i <= arr; i++) {
        newArr.push(i)
    }
    return newArr
}

console.log(toNumber(15))