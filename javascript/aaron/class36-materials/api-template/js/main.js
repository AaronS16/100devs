//Make an api request using async await


function inAscOrder(arr) {
  
    let inOrder = arr.sort((a,b) => a - b)
    if(inOrder === arr) {
      return true
    } else {
      return false
    }
    
  }