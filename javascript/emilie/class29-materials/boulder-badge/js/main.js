// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 

function evolving (level, evolve){
   let evolved = 0
   for(let i = level; i < evolve; i++){
    evolved += 1 
}
   return evolved
}

   const evolved = 0
let bulbasaurCandies = evolving(5,16)
let caterpieCandies = evolving(1,7)
let weedleCandies = evolving(1,7)

let totalCandies = bulbasaurCandies + caterpieCandies + weedleCandies 

console.log(bulbasaurCandies)
console.log(caterpieCandies)
console.log(weedleCandies)
console.log(totalCandies)

console.log(totalCandies)


//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

function fahrenheitToCelcius(temp){
    let convertedToCel = (temp - 32)* 5/9
    return convertedToCel
}

function canCharmaderBattle(currentTemp){
    let converted = fahrenheitToCelcius(currentTemp)
    if(converted > 0 ){
        console.log('Charmander can battle!')
    } else{
        console.log('Charmander can not battle!')
    }
}

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

function undeground(partySize){
    for(let i = 0; i <= partySize; i++){
        console.log('Pikachu I choose you')
    }
    
}