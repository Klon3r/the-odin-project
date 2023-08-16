//----------------------
// Rock Paper Scissors
//----------------------

const choices =['Rock','Paper','Scissors']
let win = 0;
let lose = 0;
function getComputerChoice() {
  /* Get the computers choice of rock, paper or scissors */
  
  let randomNum = Math.floor(Math.random() * 3); // random number (0-2)
  let computerChoice = choices[randomNum];
  return computerChoice;
}

function getPlayerChoice() {
  /* get the player choice via input */
  while (true){
    let playerChoiceInput = prompt("Enter a Number 1-3\n1: Rock\n2: Paper\n3: Scissors");
    
    // check to see if 0-1
    if (playerChoiceInput == 1 || playerChoiceInput == 2 || playerChoiceInput == 3) {
      //getPlayerChoice(playerChoiceInput-1);
      let playerChoice = choices[playerChoiceInput - 1]
      //console.log("Player choice:", playerChoice); //for debugging
      return playerChoice
    } 
  }
}

function playRound(computerChoice, playerChoice) {
  /* play a round and print out the winner */

  let result;

  //rock
  if(playerChoice == 'Rock') {
    if (computerChoice == 'Rock') {
      console.log("You tied!\n" + "You: " + playerChoice + " vs CPU: " + computerChoice);
      result = "tie"
    } else if (computerChoice == 'Paper'){
      console.log("You lose!\n" + "You: " + playerChoice + " vs CPU: " + computerChoice);
      result = "lose"
    } else if (computerChoice == 'Scissors'){
      console.log("You Win!\n" + "You: " + playerChoice + " vs CPU: " + computerChoice);
      result = "win"
    }
  }

  //paper
  if(playerChoice == 'Paper') {
    if (computerChoice == 'Paper') {
      console.log("You tied!\n" + "You: " + playerChoice + " vs CPU: " + computerChoice);
      result = "tie"
    } else if (computerChoice == 'Scissors'){
      console.log("You lose!\n" + "You: " + playerChoice + " vs CPU: " + computerChoice);
      result = "lose"
    } else if (computerChoice == 'Rock'){
      console.log("You Win!\n" + "You: " + playerChoice + " vs CPU: " + computerChoice);
      result = "win"
    }
  }

  //scissors
    if(playerChoice == 'Scissors') {
      if (computerChoice == 'Scissors') {
        console.log("You tied!\n" + "You: " + playerChoice + " vs CPU: " + computerChoice);
        result = "tie"
      } else if (computerChoice == 'Rock'){
        console.log("You lose!\n" + "You: " + playerChoice + " vs CPU: " + computerChoice);
        result = "lose"
      } else if (computerChoice == 'Paper'){
        console.log("You Win!\n" + "You: " + playerChoice + " vs CPU: " + computerChoice);
        result = "win"
      }
    }
    return result
}

function playGame(){
  /* play 5 rounds of rock, paper, scissors */

  //clear prev results
  win = 0;
  lose = 0;

  for (let i = 1; i <= 5; i++) {
    const roundResult = playRound(getComputerChoice(), getPlayerChoice())
    if(roundResult == "win") {
      win++;
    } else if (roundResult == "lose") {
      lose++;
    }
  }
  console.log("Wins: " + win);
  console.log("Loses: " + lose);
  if (win > lose) {
    console.log("You beat the computer!\nYou won " + win + " games")
  } else {
    console.log("You lost to the computer!\nYou lost " + lose + " games")
  } 
}