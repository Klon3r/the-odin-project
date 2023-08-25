const choices =['Rock','Paper','Scissors']
const display = document.getElementById("display");
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3); // random number 0 - 2
  let computerChoice = choices[randomNum];
  return computerChoice;
}

function getPlayerChoice() {
  while (true){
    let playerChoiceInput = prompt("Enter a Number 1-3\n1: Rock\n2: Paper\n3: Scissors");
    if (playerChoiceInput == 1 || playerChoiceInput == 2 || playerChoiceInput == 3) {
      let playerChoice = choices[playerChoiceInput - 1]
      return playerChoice
    } 
  }
}

function playRound(computerChoice, playerChoice) {
  let result;
  // win
  if (playerChoice == 'Rock' && computerChoice == 'Scissors' ||
      playerChoice == 'Paper' && computerChoice == 'Rock' ||
      playerChoice == 'Scissors' && computerChoice == 'Paper') {
        console.log("You Win!\n" + "You: " + playerChoice + " vs CPU: " + computerChoice);
        result = "win"
      }
  // lose
  else if (playerChoice == 'Rock' && computerChoice == 'Paper' ||
      playerChoice == 'Paper' && computerChoice == 'Scissors' ||
      playerChoice == 'Scissors' && computerChoice == 'Rock') {
        console.log("You lose!\n" + "You: " + playerChoice + " vs CPU: " + computerChoice);
        result = "lose"
      }
  // tie
  else if (playerChoice == computerChoice) {
      console.log("You tied!\n" + "You: " + playerChoice + " vs CPU: " + computerChoice);
      result = "tie"
    }

  return result
}



// function playGame(){
//   win = 0;
//   lose = 0;

//   for (let i = 1; i <= 5; i++) {
//     const roundResult = playRound(getComputerChoice(), getPlayerChoice())
//     if(roundResult == "win") {
//       playerWins++;
//     } else if (roundResult == "lose") {
//       computerWins++;
//     }
//   }
//   console.log("Wins: " + playerWins + "\nLoses: " + computerWins);
//   if (win > lose) {
//     console.log("You beat the computer!\nYou won " + playerWins + " games")
//   } else {
//     console.log("You lost to the computer!\nYou lost " + computerWins + " games")
//   } 
// }