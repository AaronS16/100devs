//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


function strCount(str, letter){  
    let answer = 0
    for(let i = 0; i <= str.lengeth - 1; i++){
      if(str[i] == letter){
        
        answer += 1
      }
    }
    return answer
  }

  console.log(strCount('Hello', 'o'))