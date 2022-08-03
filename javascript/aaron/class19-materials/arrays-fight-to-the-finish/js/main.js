//Create an array of movie titles. Loop through the array and each element to the h2.

let movies = ['Bobs Burgers Movie', 'The Package', 'Blade']

for (i=0; i < movies.length; i++) {
    document.querySelector('h2').innerText += movies[i]
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.

let numbers = [3, 6, 9]

numbers.forEach((item, index) => {
    numbers[index] = item + 3
    console.log(numbers[index])
})

//Find the average of all the numbers from question three

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(sum / numbers.length)