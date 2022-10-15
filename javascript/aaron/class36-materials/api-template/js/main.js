//Make an api request using async await


function inAscOrder(arr) {
  
    let inOrder = arr.toString().split(' ').sort((a,b) => a - b).join('')
    console.log(inOrder)
    console.log(arr)
    if(inOrder == arr) {
      return true
    } else {
      return false
    }
    
  }


  console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]))