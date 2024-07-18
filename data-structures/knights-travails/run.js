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
const canVisit = generateKnightsMoves();
for (const [key, neighbours] of canVisit) {
  for (const [x, y] of neighbours) {
    const keySplit = key.split(",");
    test.addEdge(keySplit[0], keySplit[1], x, y);
  }
}
//console.log(canVisit);
test.print();
