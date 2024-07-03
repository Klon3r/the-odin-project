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

  /**
   * @description Return the node at the given **index**
   * @param {int} index
   * @returns {object|string} The node object for the given indexm or a string if object is not found
   */
  at(index) {
    if (this.list[index] === undefined) {
      return `The linked list does not contain a node at ${index}`;
    } else return this.list[index];
  }

  /**
   * @description Remove the last element from the linked list
   */
  pop() {
    if (this.list.length >= 1) {
      this.list.pop();
      const lastNode = this.list[this.list.length - 1];
      lastNode.nextValue = null;
    } else {
      console.log("You cannot use 'pop()' due to the list size being 0");
    }
  }

  /**
   * @description Returns true if the passed in value is in the list and otherwise returns false
   * @param {int} value
   * @returns true if the value is found otherwise returns false
   */
  contains(value) {
    const found = this.list.find((element) => element.value === value);
    if (found) return true;
    else return false;
  }

  /**
   *
   * @param {int} value
   * @returns
   */
  find(value) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].value === value) {
        return i;
      }
    }
    return null;
  }

  /**
   * @description Print out the linked list in string format
   */
  toString() {
    const array = [];
    this.list.forEach((element) => {
      array.push(`( ${element.value} ) ->`);
    });
    array.push("null");
    console.log(array.join(" ").toString());
  }

  /**
   * @description Insert a new node with the provided **value** at the given **index**
   * @param {int} value
   * @param {int} index
   */
  insertAt(value, index) {
    if (this.list.length >= index) {
      const oldNode = this.list[index];
      const newNode = new Node(value, oldNode.value);

      if (index - 1 > this.list.length) {
        const prevNode = this.list[index - 1];
        prevNode.nextValue = value;
      }

      const insertedList = [
        ...this.list.slice(0, index),
        newNode,
        ...this.list.slice(index, this.list.length),
      ];
      this.list = insertedList;
    } else {
      console.error("Index is out of length of the Linked List cannot insert");
    }
  }

  removeAt(index) {
    if (this.list.length >= index) {
      this.list.splice(index, 1);
      if (index - 1 > this.list.length && index + 1 <= this.list.length) {
        const prevNode = this.list[index - 1];
        const nextNode = this.list[index];
        prevNode.nextValue = nextNode.value;
      }
    }
  }
}

class Node {
  constructor(value, nextValue = null) {
    this.value = value;
    this.nextValue = nextValue;
  }
}

const linkedList = new LinkedList();
linkedList.append(10); // 10
linkedList.append(5); // 10 -> 5
linkedList.append(2); // 10 -> 5 -> 2
linkedList.append(7); // 10 -> 5 -> 2 -> 7
linkedList.append(9); // 10 -> 5 -> 2 -> 7 -> 9
linkedList.prepend(1); // 1 -> 10 -> 5 -> 2 -> 7 -> 9
linkedList.prepend(3); // 3 -> 1 -> 10 -> 5 -> 2 -> 7 -> 9
linkedList.prepend(11); // 11 -> 3 -> 1 -> 10 -> 5 -> 2 -> 7 -> 9
console.log("The amount of nodes in the list is...", linkedList.size()); // 8
linkedList.head(); // Node { value: 11, nextValue: 3 }
linkedList.tail(); // Node { value: 9, nextValue: null }
const index = 2;
console.log(`The node at index ${index}: `, linkedList.at(index)); // The node at index 2:  Node { value: 1, nextValue: 10 }
linkedList.pop(); // 11 -> 3 -> 1 -> 10 -> 5 -> 2 -> 7
linkedList.tail(); // TAIL: Node { value: 7, nextValue: null }
let contains = 5;
console.log(
  `Does the linked list contain ${contains}: `,
  linkedList.contains(contains)
); // Does the linked list contain 5:  true
contains = 10;
console.log(
  `Does the linked list contain ${contains}: `,
  linkedList.contains(contains)
); // Does the linked list contain 10:  true

console.log(
  `Where is the value 10 in the linked list: Index `,
  linkedList.find(10)
); // Where is the value 10 in the linked list: Index  3
linkedList.toString(); // ( 11 ) -> ( 3 ) -> ( 1 ) -> ( 10 ) -> ( 5 ) -> ( 2 ) -> ( 7 ) -> null

linkedList.insertAt(0, 0);
linkedList.toString(); // ( 0 ) -> ( 11 ) -> ( 3 ) -> ( 1 ) -> ( 10 ) -> ( 5 ) -> ( 2 ) -> ( 7 ) -> null
console.log(`The node at index ${5}: `, linkedList.at(5)); // The node at index 5:  Node { value: 5, nextValue: 2 }

linkedList.removeAt(0);
linkedList.toString(); // ( 11 ) -> ( 3 ) -> ( 1 ) -> ( 10 ) -> ( 5 ) -> ( 2 ) -> ( 7 ) -> null
console.log(`Node: `, linkedList.at(0)); //Node:  Node { value: 11, nextValue: 3 }
