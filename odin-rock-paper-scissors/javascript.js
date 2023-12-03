const choices =['Rock','Paper','Scissors']
const display = document.getElementById("display");
const player_score = document.getElementById("player-score")
const cpu_score = document.getElementById("cpu-score")

let playerScore = 0;
let cpuScore = 0;
player_score.innerText = playerScore;
cpu_score.innerText = cpuScore;

let gameOver = false;

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3); // random number 0 - 2
  let computerChoice = choices[randomNum];
  return computerChoice;
}

function playRound(computerChoice, playerChoice) {
  if(gameOver == false){
    let result;
    // win
    if (playerChoice == 'Rock' && computerChoice == 'Scissors' ||
        playerChoice == 'Paper' && computerChoice == 'Rock' ||
        playerChoice == 'Scissors' && computerChoice == 'Paper') {
          result = "win"
          playerScore += 1;
          display.innerText += "Round Won!\n" + "You: " + playerChoice + " vs CPU: " + computerChoice + "\n\n";
          player_score.innerText = playerScore


        }
    // lose
    else if (playerChoice == 'Rock' && computerChoice == 'Paper' ||
        playerChoice == 'Paper' && computerChoice == 'Scissors' ||
        playerChoice == 'Scissors' && computerChoice == 'Rock') {
          result = "lose"
          cpuScore += 1
          display.innerText += "Round lost!\n" + "You: " + playerChoice + " vs CPU: " + computerChoice + "\n\n";
          cpu_score.innerText = cpuScore;
        }
    // tie
    else if (playerChoice == computerChoice) {
        result = "tie"
        display.innerText += "Round tied!\n" + "You: " + playerChoice + " vs CPU: " + computerChoice + "\n\n";
        
      }

    display.scrollTop = display.scrollHeight;     // auto scroll to the bottom of the <p>
    checkResults()
    return result
  }
}

function checkResults() {
  if(playerScore == 5){
    gameOver = true;
    display.innerText = "";
    display.innerText = "You have won! Well Done\n\nPress Reset to play another game";
  } else if (cpuScore == 5) {
    gameOver = true;
    display.innerText = "";
    display.innerText = "You have lost!\n\nPress Reset to play another game";
  }
}

function resetGame(){
  playerScore = 0;
  cpuScore = 0;
  player_score.innerText = playerScore;
  cpu_score.innerText = cpuScore;

  display.innerText = 'Winner is the first to win 5 games. Good luck!\n\n';
  gameOver = false;
}