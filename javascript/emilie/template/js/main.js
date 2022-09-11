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

  const fruits = ['mango', 'papaya','pineapple','apple']
  fruits.forEach(fruits => console.log(`I want to eat a ${fruits}`))