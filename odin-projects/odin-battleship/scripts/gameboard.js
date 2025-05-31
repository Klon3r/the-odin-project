const gameboardDiv = document.getElementById("gameboard-div");

class Gameboard {
  /**
   * Create a gameboard and place it within 'gameboard-div'
   * @param {number} size The size of the gameboard
   */
  createGameboard(size) {
    for (let i = 1; i <= size; i++) {
      const row = document.createElement("div");
      row.className = "cell-row";
      row.id = i;
      const rowLetter = this.convertInt(i);
      for (let j = 1; j <= size; j++) {
        console.log(`${i}, ${j}`);
        const cell = document.createElement("div");
        // Attributes
        cell.id = `${i},${j}`;
        cell.className = "cell";
        cell.innerHTML = `${rowLetter},${j}`;

        // Add
        row.appendChild(cell);
      }
      gameboardDiv.appendChild(row);
    }
  }

  /**
   * Convert an number into a letter for use on the gameboard
   * @param {number} int A number that we need converted
   * @returns {string} The corresponding letter
   */
  convertInt(int) {
    const charArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    return charArray[int - 1];
  }
}

module.exports = { Gameboard };
