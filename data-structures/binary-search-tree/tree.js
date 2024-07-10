import { Node } from "./node.js";

export class Tree {
  constructor(array) {
    array = this.removeArrayDuplicates(array);
    this.root = this.buildTree(array, 0, array.length - 1);
  }

  /**
   * Build the binary search tree using recursion
   * @param {int[]} array
   * @param {int} start
   * @param {int} end
   * @returns The root of the tree
   */
  buildTree(array, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);

    let root = new Node(null, null, array[mid]);
    root.setLeft(this.buildTree(array, start, mid - 1));
    root.setRight(this.buildTree(array, mid + 1, end));

    return root;
  }

  /**
   * @description Remove duplicated and sort an array
   * @param {array} array An array object
   * @returns {array} Returns the array with all duplicates removed and sorted
   */
  removeArrayDuplicates(array) {
    this.sortedArray = array.toSorted((a, b) => a - b);
    this.sortedArray = Array.from(new Set(this.sortedArray));
    return this.sortedArray;
  }
}
