import { Node } from "./node.js";

export class Tree {
  constructor(array) {
    this.buildTree(array);
  }

  buildTree(array) {
    array = this.removeArrayDuplicates(array);
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
