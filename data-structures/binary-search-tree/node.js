export class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  /**
   * @description Set the left child of the node
   * @param {string|int} left The left child
   */
  setLeft(left) {
    this.left = left;
  }

  /**
   * @description Set the right child of the node
   * @param {string|int} right The right child
   */
  setRight(right) {
    this.right = right;
  }
}
