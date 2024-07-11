import { Node } from "./node.js";

export class Tree {
  constructor(array) {
    array = this.removeArrayDuplicates(array);
    this.root = this.buildTree(array, 0, array.length - 1);
    this.queue = [];
    this.levelOrderArray = [];
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

    let root = new Node(array[mid]);
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

  /**
   * @description Insert value into the binary search tree
   * @param {int} val The value to be inserted
   */
  insert(val) {
    this.root = this.insertRecursive(this.root, val);
  }

  /**
   * @description Recursively find where to insert the value
   * @param {object} node The node object
   * @param {int} val The value to be inserted
   * @returns {object} A node
   */
  insertRecursive(node, val) {
    if (node === null) return new Node(val);

    // If value is less than, go to the left
    if (val < node.data) {
      node.left = this.insertRecursive(node.left, val);
    } else if (val > node.data) {
      // Else, go right
      node.right = this.insertRecursive(node.right, val);
    } else if (val === node.data) {
      console.error("The value already exists in the binary search tree");
      return node; // Return the existing node
    }

    return node;
  }

  /**
   * @description Delete a node in the binary search tree
   * @param {int} val The value to find and delete
   */
  deleteNode(val) {
    this.root = this.deleteNodeRecursive(this.root, val);
  }

  /**
   * @description The recursive function for delete nodej
   * @param {object} node The node object
   * @param {int} val The value to delete
   * @returns {object} Returns a node
   */
  deleteNodeRecursive(node, val) {
    if (node === null) return null;

    if (val < node.data) {
      node.left = this.deleteNodeRecursive(node.left, val);
    } else if (val > node.data) {
      node.right = this.deleteNodeRecursive(node.right, val);
    } else {
      console.warn("Value Found:", val);

      // Check there is any children
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      node.data = this.minValue(node.right);
      node.right = this.deleteNodeRecursive(node.right, node.data);
    }
    return node;
  }

  /**
   * Finds and returns the minimum value in a binary search tree (BST)
   * @param {object} node The node
   * @returns  {int} The minimum value found in the BST
   */
  minValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  /**
   * @description Find the node and when found return the node & its children
   * @param {object} node The node
   * @param {int} val The value to find
   * @returns {object} Returns the node object
   */
  find(node, val) {
    if (node === null) return null;

    if (val > node.data) {
      return this.find(node.right, val);
    } else if (val < node.data) {
      return this.find(node.left, val);
    } else {
      //console.log(node);
      return node;
    }
  }

  levelOrder(node) {
    if (node === null) return null;

    this.queue.push(node);

    while (this.queue.length > 0) {
      let currentNode = this.queue.shift();
      this.levelOrderArray.push(currentNode.data);

      if (currentNode.left != null) {
        this.queue.push(currentNode.left);
      }
      if (currentNode.right != null) {
        this.queue.push(currentNode.right);
      }
    }

    return this.levelOrderArray;
  }
}
