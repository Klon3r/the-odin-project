export class Node {
  constructor(left = null, right = null, data = null) {
    this.left = left;
    this.right = right;
    this.data = data;
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
