export class Board {
  constructor() {
    this.adjacencyList = new Map();
  }

  /**
   * @description Add a node using x-coord & y-coord
   * @param {int} x x-coordinate
   * @param {int} y y-coordinate
   */
  addNode(x, y) {
    const key = `${x},${y}`;
    this.adjacencyList.set(key, []);
  }

  /**
   * @description Add an edge between chess board location & where you can travel too
   * @param {int} x x-coordinate
   * @param {int} y y-coordinate
   * @param {int} visitX x-coordinate you can visit
   * @param {int} visitY y-coordinate you can visit
   */
  addEdge(x, y, visitX, visitY) {
    const key = `${x},${y}`;
    const key2 = `${visitX},${visitY}`;
    this.adjacencyList.get(key).push(key2);
    this.adjacencyList.get(key2).push(key);
  }

  print() {
    console.log(" ─────────────────────── ");
    console.log("│ Location │ Can Visit  │");
    console.log(" ─────────────────────── ");
    console.log(this.adjacencyList);
  }
}
