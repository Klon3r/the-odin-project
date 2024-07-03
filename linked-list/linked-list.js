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
}

class Node {
  constructor(value, nextValue = null) {
    this.value = value;
    this.nextValue = nextValue;
  }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(5);
linkedList.append(2);
linkedList.append(7);
linkedList.append(9);
linkedList.prepend(1);
linkedList.prepend(3);
linkedList.prepend(11);
console.log("The amount of nodes in the list is...", linkedList.size());
linkedList.head();
linkedList.tail();
const index = 2;
console.log(`The node at index ${index}: `, linkedList.at(index));
linkedList.pop();
linkedList.tail();
let contains = 5;
console.log(
  `Does the linked list contain ${contains}: `,
  linkedList.contains(contains)
);
contains = 10;
console.log(
  `Does the linked list contain ${contains}: `,
  linkedList.contains(contains)
);

console.log(
  `Where is the value 10 in the linked list: Index `,
  linkedList.find(10)
);
linkedList.toString();
