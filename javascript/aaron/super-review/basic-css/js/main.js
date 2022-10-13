function nbDig(n, d) {
    let answer = ''
      for(let i = 0; i <=  n; i++){
        answer += i ** 2
      }
    return answer.split(d).length - 1
  }

  console.log(nbDig(5750,0))