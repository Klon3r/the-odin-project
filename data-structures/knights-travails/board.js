export class Board {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(x, y) {
    const key = `${x},${y}`;
    this.adjacencyList.set(key, []);
  }

  addEdge(x, y, vX, vY) {
    const key = `${x},${y}`;
    const key2 = `${vX},${vY}`;
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
