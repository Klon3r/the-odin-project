//------------------------------
//    Linked Lists
//------------------------------

class LinkedList {
  constructor() {
    this.list = [];
  }

  /**
   * @description Add a node to the linked list
   * @param {object} node
   */
  addNode(node) {
    this.list.push(node);
  }

  /**
   * @description Add a new node containing **value** to the end of the list
   * @param {int} value
   */
  append(value) {
    const node = new Node(value);
    if (this.list.length >= 1) {
      const oldNode = this.list[this.list.length - 1];
      oldNode.nextValue = node.value;
    }
    linkedList.addNode(node);
  }

  /**
   * @description Adds a new node containing **value** to the start of the list
   * @param {int} value
   */
  prepend(value) {
    const node = new Node(value);
    if (this.list.length >= 1) {
      const headNode = this.list[0];
      node.nextValue = headNode.value;
    }
    linkedList.list.unshift(node);
  }

  /**
   * @description Return the total number of nodes in the list
   * @returns {int} The length of the linked list
   */
  size() {
    return this.list.length;
  }

  /**
   * @description Return the first node in the list
   * @returns {object|null} The first node object in the linked list, or null if the list is empty.
   */
  head() {
    if (this.size() >= 1) console.log("HEAD:", this.list[0]);
    return null;
  }

  /**
   * @description Return the last node in the list
   * @returns {object|null} The last node object in the linked list, or null if the list is empty
   */
  tail() {
    if (this.size() >= 1) console.log("TAIL:", this.list[this.size() - 1]);
  }
}

class Node {
  constructor(value, nextValue = null) {
    this.value = value;
    this.nextValue = nextValue;
  }
}

/**
 * Add a new node containing [value] to the end of the list
 * @param {int} value
 */
// function append(value) {
//   const node = new Node(value, null);
//   linkedList.addNode(node);
// }

const linkedList = new LinkedList();
linkedList.append(10); // Old Head
linkedList.append(5);
linkedList.prepend(1);
console.log("The amount of nodes in the list is...", linkedList.size());
linkedList.head();
linkedList.tail();
