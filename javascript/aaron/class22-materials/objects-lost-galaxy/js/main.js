//Create a mouse object that has four properties and three methods


// const mouse = {}

// mouse.color = 'black';
// mouse.brand = 'logitech';
// mouse.shape = 'oval';
// mouse.wired = true;

// mouse.leftClick = function() {
//     alert('Left click');
// }
// mouse.scroll = function() {
//     console.log('Scroll down screen');
// }
// mouse.rightClick = function() {
//     alert('Right Clack');
// }



function sumOfDifferences(arr) {
    arr.sort((a,b) => a > b ? -1 : 1)
    return Number(arr.length > 0 ? (arr[0] - arr[1]) + (arr[1] - arr[arr.length - 1]) : 0)
      
  }

  console.log(sumOfDifferences([1]))