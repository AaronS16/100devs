function getGrade (s1, s2, s3) {
    let av = s1 + s2 + s3 
    let a = av / 3  
  if(a >= 90 && a <= 100){
    return 'A'
  } else if (a >= 80 && a < 90){
    return 'B'
  } else if( a >= 70 && a < 80){
    return 'C'
  } else if(a >= 60 && a < 70){
    return 'D'
  } else{
    return 'F'
  }}
  

  // .forEach()//

  const fruits = ['mango', 'papaya','pineapple','apple']
  fruits.forEach(fruits => console.log(`I want to eat a ${fruits}`))

  //findIndex()//

  const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex( animals => {
  return animals === 'elephant'
}) 

// reduce()//
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator,currentValue) =>{
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator + currentValue
}, 10)
console.log(newSum) 




// function removeChar(str){
//  const z =  str.slice(1,str.length -1) 
//    console.log(z)
//  }

 const removeChar = str => str.slice(1,str.length -1) 

 // const removeChar = str => str.slice(1,-1)// best Practice 