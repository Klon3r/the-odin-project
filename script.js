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
    cell.style.borderBottom = "1px solid black";
    cell.style.borderRight = "1px solid black";
    cell.innerText = i;
 
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
  }
};

function handleCellClick(cell, players, gameboard) {
  const currentPlayer = players.find(player => player.turn);
  const index = cell.id-1;
  const currentCells = gameboard.getGameboard();
  if(currentCells[index] === "" ) {
    cell.innerText = currentPlayer.symbol;
    // update gameboard
    gameboard.setGameboard(index, currentPlayer.symbol);
    gameboard.getGameboard();
    swapPlayer(players);
    displayInfo(players);
  } else {
    console.log("You can't place a symbol there!")
  }
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

function displayInfo(players) {
  const textOutput = document.getElementById('text-output');
  let playerNameOutput = document.createElement('h2');
  const currentPlayer = players.find(player => player.turn);
  playerNameOutput.innerText = currentPlayer.name + "'s Turn";
  textOutput.appendChild(playerNameOutput);
}

function removePlayerInput() {
  document.querySelectorAll('.player-div').forEach(e => e.remove());
  document.querySelectorAll('.start-div').forEach(e => e.remove());
};