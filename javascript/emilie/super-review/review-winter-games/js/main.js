//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function takesInArray(arr){
    let only = []
    arr.forEach(n => {
        if(n % 2 === 0){
            only.push(n)
        }
    })
    return only 
}
console.log(takesInArray([1,2,3,4,5,6]))