//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 

function reverseList(party) {
    console.log( party.reverse())
}

reverseList(['charmander', 'pikachu', 'bulbasaur'])

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function checkAGreaterThanB(a, b) {
    return a.reduce( (prev, cur) => prev + cur **2, 0) > b.reduce( (prev, cur) => prev + cur **3, 0)
}

console.log(checkAGreaterThanB([2,2,2],[2,2,2]))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]


function returnMultiples(a) {
    return a.filter( (el, i) => el % i === 0)
}

console.log(returnMultiples([22, -6, 32, 82, 9, 25]))


//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function sumOfValues(arr) {
    return arr.reduce( (prev, cur) => prev + Number(cur), 0)
}

console.log(sumOfValues(['5', 3, '2', 1]))

const s = r => r.reduce( (a, c) => +a+ +c)