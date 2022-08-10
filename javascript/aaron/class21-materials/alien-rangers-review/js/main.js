//Arrays

//Create and array of tv shows. Loop through and print each show to the console

let shows = ["Bob's Burgers", "Sandman", "What we do in the Shadows", "Impractical Jokers"]

shows.forEach( show => console.log(show))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let nums = [21, 56, 88, 24, 99, 710]

let onlyEvens = arr => arr.filter(n => n % 2 === 0)

console.log(onlyEvens(nums))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number


