let gameBoard = [ 0,0,0,
                  0,0,0,
                  0,0,0]

let players = [];

// Create players
function createPlayer(name, player, symbol) {
  return {name, player, symbol}
}

// GameLogic

function createGameBoard() {
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
    cell.id = "cell"
    cell.style.borderBottom = "1px solid black";
    cell.style.borderRight = "1px solid black";
    cell.innerText = i;
 
    cell.style.gridArea = gridAreas[Math.floor((i - 1) / 3)];

    board.appendChild(cell);

    cell.addEventListener('mousedown', () => {console.log(cell.className)})
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
    const playerOne = createPlayer(playerOneName.value, "playerOne", "O");
    const playerTwo = createPlayer(playerTwoName.value, "playerTwo", "X");
    players.push(playerOne);
    players.push(playerTwo);
    removePlayerInput();
    createGameBoard();
  }
};

function removePlayerInput() {
  document.querySelectorAll('.player-div').forEach(e => e.remove());
  document.querySelectorAll('.start-div').forEach(e => e.remove());
};

// createGameBoard();
