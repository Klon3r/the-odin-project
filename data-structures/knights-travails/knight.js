export function generateKnightsMoves() {
  const n = 8; // Size of chessboard
  const moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  const canVisit = [];

  /**
   *
   * @param {int} x x-coordinate
   * @param {int} y y-coordinate
   * @returns {boolean} True if x & y is within chess board (8x8) else returns false
   */
  function isValid(x, y) {
    return x >= 0 && y >= 0 && x < n && y < n;
  }

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      const key = `${x},${y}`;
      const neighbours = [];

      for (const [dx, dy] of moves) {
        const newX = x + dx;
        const newY = y + dy;

        if (isValid(newX, newY)) {
          neighbours.push([newX, newY]);
        }
      }

      canVisit.push([key, neighbours]);
    }
  }
  return canVisit;
}
