//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function array(x){
    let newArr = []
    for( let i = 1; i <= x.length; i++){
        if(i % 2 == 0){
            newArr.push(i)
        }
    }
    return newArr
}

console.log(array([1,2,3,4,5,6]))