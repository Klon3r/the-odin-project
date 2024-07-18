import { Board } from "./board.js";
import { generateKnightsMoves } from "./knight.js";

let test = new Board();

// Add 8x8 chess board
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    test.addNode(row, col);
  }
}

// Grab the possible knight moves and put then into a graph
const canVisitArray = generateKnightsMoves();
const canVisit = new Map(canVisitArray);
for (const [key, neighbours] of canVisit.entries()) {
  for (const [x, y] of neighbours) {
    const [keyX, keyY] = key.split(",").map(Number);
    test.addEdge(keyX, keyY, x, y);
  }
}

function knightMoves(start, end) {
  const [endX, endY] = end;

  const queue = [[start]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    let path = queue.shift();
    let [currentX, currentY] = path[path.length - 1];

    if (currentX === endX && currentY === endY) {
      return path;
    }

    const key = `${currentX},${currentY}`;
    if (canVisit.has(key)) {
      for (const [nextX, nextY] of canVisit.get(key)) {
        const nextPos = [nextX, nextY];
        if (!visited.has(nextPos.toString())) {
          visited.add(nextPos.toString());
          queue.push([...path, nextPos]);
        }
      }
    }
  }

  // Return an empty array if no path is found
  return [];
}

console.log(knightMoves([0, 0], [7, 7])); //EXPECT: [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]
