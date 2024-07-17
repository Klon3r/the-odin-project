import { Board } from "./board.js";

let test = new Board();

// Add 8x8 chess board
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    test.addNode(row, col);
  }
}

test.print();
