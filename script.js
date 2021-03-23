let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => Math.floor(Math.random()*9);


//where the players guesses are compared
var compareGuesses = (humanGuess,computerGuess, target) => {
  var diffA = Math.abs(humanGuess - target);
  var diffB = Math.abs(computerGuess - target);
  if (diffA > diffB) {
  return false;
} else if (diffB > diffA) {
  return true;
} else if (diffA = diffB) {
  return true;
}
};

//updates the score depending on who won
var updateScore = (humanScore, computerScore) => {
  if (compareGuesses === true) {
    return humanScore + 1;
  } else if (compareGuesses === false) {
    return computerScore + 1;
  }
};

//increases the round number in increments
let advanceRound = (currentRoundNumber) => {
    do {
        currentRoundNumber++;
    } while (currentRoundNumber < 10);
}


