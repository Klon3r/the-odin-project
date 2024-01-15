function Gameboard() {
  let gameboard = ["","","","","","","","",""];
  
  const getGameboard = () => { return gameboard }
  const printGameboard = () => { console.log(gameboard) }
  const setGameboard = (index, val) => { gameboard[index] = val; }
  const resetGameboard = () => { gameboard = ["","","","","","","","",""]; }

  return {getGameboard, setGameboard, resetGameboard, printGameboard}
}

function player(players, name, player, symbol, turn) {
  const newPlayer = {name, player, symbol, turn};
  players.push(newPlayer)

  return newPlayer;
}

function createGameBoard(players, gameboard) {
  gameboard.resetGameboard();
  const board = document.createElement('div');
  const gameContainer = document.getElementById('container');
  gameContainer.className = "gameContainer";
  
  board.style.width = "20em";
  board.style.height = "20em";
  board.className = "board"

  const gridAreas = [
    '1 2 3',
    '4 5 6',
    '7 8 9'
  ];
  
  for( let i = 1; i <= 9; i++ ) {
    let cell = document.createElement('div');
    cell.className = "cell";
    cell.id = i;
    cell.style.borderBottom = "3px solid black";
    cell.style.borderRight = "3px solid black";
    // cell.innerText = i;
 
    cell.style.gridArea = gridAreas[Math.floor((i - 1) / 3)];

    board.appendChild(cell);

    // Add event listener to each cell
    cell.addEventListener('mousedown', () => { handleCellClick(cell, players, gameboard); });
  }

  container.appendChild(board);
};

function startGame(){
  const playerOneName = document.getElementById('playerOneName');
  const playerTwoName = document.getElementById('playerTwoName');

  // check for null
  if ( playerOneName.value === "" || playerTwoName.value === "" ) {
    alert("Player names are empty")
  } else {
    const players = [];
    const playerOne = player(players, playerOneName.value, "playerOne", "O", true);
    const playerTwo = player(players, playerTwoName.value, "playerTwo", "X", false);
    const gameboard = Gameboard();

    removePlayerInput();
    createGameBoard(players, gameboard);
    displayInfo(players);
    createResetButton();
  }
};

function createResetButton() {
  const resetDiv = document.getElementById('reset-div');
  const resetButton = document.createElement('button');
  resetButton.innerText = "Back to Main Menu";
  resetButton.className = "resetButton";

  resetButton.addEventListener("mousedown", () => resetGame())

  resetDiv.appendChild(resetButton);
}

function resetGame() {
  removePlayerInput();
  document.querySelectorAll('.board').forEach(e => e.remove());
  document.querySelectorAll('#playerNameOutput').forEach(e => e.remove());

  const dialog = document.getElementById('dialog');
  dialog.close();

  const container = document.getElementById('container');
  container.className = "container"
  const playerDiv = document.createElement('div');
  playerDiv.className = "player-div";

  // Player One
  const playerOneInfo = document.createElement('div');
  playerOneInfo.className = "playerOneInfo";

  const playerOneH2 = document.createElement('h2');
  playerOneH2.innerText = "Player One (O)";

  const labelPlayerOneName = document.createElement('label');
  labelPlayerOneName.innerText = "Name: ";
  labelPlayerOneName.setAttribute("for", "playerOneName");

  const inputPlayerOneName = document.createElement('input');
  inputPlayerOneName.type = "text";
  inputPlayerOneName.name = "playerOneName";
  inputPlayerOneName.id = "playerOneName";

  playerOneInfo.appendChild(playerOneH2);
  playerOneInfo.appendChild(labelPlayerOneName);
  playerOneInfo.appendChild(inputPlayerOneName);
  playerDiv.appendChild(playerOneInfo);
  container.appendChild(playerDiv);

  // VS
  const vs = document.createElement('h2');
  vs.innerText = "VS";
  playerDiv.appendChild(vs);

  // Player Two
  const playerTwoInfo = document.createElement('div');
  playerOneInfo.className = "playerOneInfo";

  const playerTwoH2 = document.createElement('h2');
  playerTwoH2.innerText = "Player Two (X)";

  const labelPlayerTwoName = document.createElement('label');
  labelPlayerTwoName.innerText = "Name: ";
  labelPlayerTwoName.setAttribute("for", "playerTwoName");

  const inputPlayerTwoName = document.createElement('input');
  inputPlayerTwoName.type = "text";
  inputPlayerTwoName.name = "playerTwoName";
  inputPlayerTwoName.id = "playerTwoName";

  playerTwoInfo.appendChild(playerTwoH2);
  playerTwoInfo.appendChild(labelPlayerTwoName);
  playerTwoInfo.appendChild(inputPlayerTwoName);
  playerDiv.appendChild(playerTwoInfo);
  container.appendChild(playerDiv);

  // start-div
  const startDiv = document.createElement('div');
  startDiv.className = "start-div";
  const startButton = document.createElement('button')
  startButton.className = "start-button";
  startButton.addEventListener("mousedown", () => startGame());
  startButton.innerText = "Start Game";

  startDiv.appendChild(startButton);
  container.appendChild(startDiv);

  // Remove button
  document.querySelectorAll('.resetButton').forEach(e => e.remove());
}

function handleCellClick(cell, players, gameboard) {
  const currentPlayer = players.find(player => player.turn);
  const index = cell.id-1;
  const currentCells = gameboard.getGameboard();
  if(currentCells[index] === "" ) {
    cell.innerText = currentPlayer.symbol;

    gameboard.setGameboard(index, currentPlayer.symbol);
    gameLogic(players, gameboard, cell);
    
  } else {
    console.log("You can't place a symbol there!")
  }

  swapPlayer(players);
  changeDisplayInfo(players);
}

function gameLogic(players, gameboard) {
  const currentPlayer = players.find(player => player.turn);
  const currentSymbol = currentPlayer.symbol;
  const currentCells = gameboard.getGameboard();

  const winningCombinations = [
    [0,1,2], [3,4,5], [6,7,8],  // Rows
    [0,3,6],[1,4,7],[2,5,8],    // Columns
    [0,4,8], [2,4,6]            // Diagonals
  ]

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (currentCells[a] === currentSymbol && currentCells[b] === currentSymbol && currentCells[c] === currentSymbol) {
      console.log(currentPlayer.name + " wins!");
      showOutcome(currentPlayer.name, players, gameboard);
    }
  }

  // check for tie
  if(currentCells.every(cell => cell !== "")){
    showOutcome(false, players, gameboard)
  }
}

function showOutcome(winner, players, gameboard) {
  const dialog = document.getElementById('dialog');
  const textOutput = document.getElementById('dialog-text');
  dialog.showModal();

  if( winner === false ) {
    //tie
    dialogText(textOutput, "The game is a tie!")
  } else {
    //winner
    dialogText(textOutput, winner + " is the winner ")
  }

  const newGameButton = document.getElementById('new-game-button');
  const mainMenuButton = document.getElementById('reset-game-button');
  newGameButton.addEventListener("mousedown", () => { newGame(players, gameboard) });
  mainMenuButton.addEventListener("mousedown", () => { resetGame() });

}

function dialogText(textElement, text) {
  textElement.innerText = text;
}

function swapPlayer(players) {
  const playerOne = players[0];
  const playerTwo = players[1];
  if( playerOne.turn === true ) {
    playerOne.turn = false;
    playerTwo.turn = true;
  } else {
    playerTwo.turn = false;
    playerOne.turn = true;
  }
}

function newGame(players, gameboard) {
  const dialog = document.getElementById('dialog');
  dialog.close();
  document.querySelectorAll('.cell').forEach(e => e.innerText = "");
  gameboard.resetGameboard();
}

function displayInfo(players) {
  const textOutput = document.getElementById('text-output');
  let playerNameOutput = document.createElement('h2');
  playerNameOutput.id = 'playerNameOutput';
  const currentPlayer = players.find(player => player.turn);
  playerNameOutput.innerText = currentPlayer.name + "'s Turn (" + currentPlayer.symbol + ")";
  textOutput.appendChild(playerNameOutput);
}

function changeDisplayInfo(players) {
  const playerNameOutput = document.getElementById('playerNameOutput');
  const currentPlayer = players.find(player => player.turn);
  playerNameOutput.innerText = currentPlayer.name + "'s Turn (" + currentPlayer.symbol + ")";
}

function removePlayerInput() {
  document.querySelectorAll('.player-div').forEach(e => e.remove());
  document.querySelectorAll('.start-div').forEach(e => e.remove());
};