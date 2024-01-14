function Gameboard() {
  let gameboard = ["","","","","","","","",""];
  
  const getGameboard = () => { return gameboard }
  const printGameboard = () => { console.log(gameboard) }
  const setGameboard = (index, val) => { gameboard[index] = val; }
  const resetGameboard = () => { gameboard = ["","","","","","","","",""]; }

  return {getGameboard, setGameboard, resetGameboard, printGameboard}
}

function Player(players, name, player, symbol, turn) {
  const newPlayer = {name, player, symbol, turn};
  players.push(newPlayer)
  return newPlayer;
}

function CreateGameBoard(players, gameboard) {
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
    cell.className = "cell-" + i;
    cell.id = i;
    cell.style.borderBottom = "1px solid black";
    cell.style.borderRight = "1px solid black";
    cell.innerText = i;
 
    cell.style.gridArea = gridAreas[Math.floor((i - 1) / 3)];

    board.appendChild(cell);

    // Add event listener to each cell
    cell.addEventListener('mousedown', () => { HandleCellClick(cell, players, gameboard); });
  }

  container.appendChild(board);
};

function StartGame(){
  const playerOneName = document.getElementById('playerOneName');
  const playerTwoName = document.getElementById('playerTwoName');

  // check for null
  if ( playerOneName.value === "" || playerTwoName.value === "" ) {
    alert("Player names are empty")
  } else {
    const players = [];
    const playerTwo = Player(players, playerTwoName.value, "playerTwo", "X", true);
    const playerOne = Player(players, playerOneName.value, "playerOne", "O", false);
    const gameboard = Gameboard();

    RemovePlayerInput();
    CreateGameBoard(players, gameboard);
  }
};

function HandleCellClick(cell, players, gameboard) {
  const currentPlayer = players.find(player => player.turn);
  const index = cell.id-1;
  const currentCells = gameboard.getGameboard();
  if(currentCells[index] === "" ) {
    cell.innerText = currentPlayer.symbol;
    // update gameboard
    gameboard.setGameboard(index, currentPlayer.symbol);
    gameboard.getGameboard();
    SwapPlayer(players);
  } else {
    console.log("You can't place a symbol there!")
  }


  
}

function SwapPlayer(players) {
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

function RemovePlayerInput() {
  document.querySelectorAll('.player-div').forEach(e => e.remove());
  document.querySelectorAll('.start-div').forEach(e => e.remove());
};