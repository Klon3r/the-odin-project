function Gameboard() {
  let gameboard = ["1","2","3","4","5","6","7","8","9"];
  
  const getGameboard = () => { console.log(gameboard) }
  const setGameboard = (index, val) => { gameboard[index] = val; }
  const resetGameboard = () => { gameboard = [1,2,3,4,5,6,7,8,9]; }

  return {getGameboard, setGameboard, resetGameboard}
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
    cell.addEventListener('mousedown', () => { handleCellClick(cell, players, gameboard); });
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

function handleCellClick(cell, players, gameboard) {
  const currentPlayer = players.find(player => player.turn);
  cell.innerText = currentPlayer.symbol;
  // update gameboard
  index = cell.id;
  gameboard.setGameboard(index, currentPlayer.symbol);
  gameboard.getGameboard();

}

function RemovePlayerInput() {
  document.querySelectorAll('.player-div').forEach(e => e.remove());
  document.querySelectorAll('.start-div').forEach(e => e.remove());
};