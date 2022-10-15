//Make an api request using async await


function inAscOrder(arr) {
  
    let inOrder = [arr.toString().split(' ').join('')]
    let order = [];
    
    inOrder.forEach(el => {
        order.push(Number(el));
    })

    console.log(order)
    console.log(inOrder)
    console.log(arr)
    if(inOrder == arr) {
      return true
    } else {
      return false
    }
    
  }


  console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]))


  .sort((a,b) => a - b)