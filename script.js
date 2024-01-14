// Gameboard
function Gameboard() {
  let gameboard = [["", "", ""], ["", "", ""], ["", "", ""]];
  
  const getGameboard = () => { console.log(gameboard) }
  const setGameboard = (j, k, val) => { gameboard[j][k] = val; }
  const resetGameboard = () => { gameboard = [[0,0,0],[0,0,0],[0,0,0]]; }

  return {getGameboard, setGameboard, resetGameboard}
}
