// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

let sent = 'Is this correct?';

alert(sent.endsWith('?'))

/*Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", 
and print it to the console */

let newSent = 'I am a jr. dev. Trying to upgrade from jr. dev.';

console.log(newSent.replaceAll('jr. dev', 'software developer'))


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
   let random = Math.random();
   if(random < .33) {
    return 'rock'
   } else if(random < .66) {
    return 'paper'
   } else {
    return 'scissors'
   }
}

// *Conditionals*
/*Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors 
against a bot using the above function */

function chooseWinner(playerchoice) {
    let botchoice = rockPaperScissors();
    if((playerchoice === 'rock' && botchoice === 'scissors') ||
    (playerchoice === 'scissors' && botchoice === 'paper') || (playerchoice 
    === 'paper' && botchoice === 'rock') ){
        console.log('You win')
    } else if(playerchoice === botchoice) {
        console.log('Tied')
    } else {
        console.log('You lose')
    }
}
chooseWinner('rock')

//*Loops*
/*Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. 
Print the results of each game to the console. */

function playGamesXTimes(arr) {
    arr.forEach( choice => checkWinner(choice))
}

playGamesXTimes(['rock', 'paper', 'scissors'])