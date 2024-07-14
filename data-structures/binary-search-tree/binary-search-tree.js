import { Tree } from "./tree.js";

const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let test = new Tree(testArray);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(test.root);
test.insert(50);
test.insert(50);
test.insert(2);
test.deleteNode(2);
test.deleteNode(67);
test.deleteNode(8);

prettyPrint(test.root);

let find = test.find(test.root, 1);
console.log(find);

console.log("Level Order:", test.levelOrder(test.root)); // 9, 4, 324, 1, 5, 23, 6345, 3, 7, 50

console.log("In Order Traversal:");
test.inOrder(test.root);
console.log("Pre Order Traversal:");
test.preOrder(test.root);
console.log("Post Order Traversal:");
test.postOrder(test.root);
console.log("The height of the tree is:", test.height(test.root));

console.log("Depth:", test.depth(test.root, 3));

test.isBalanced(test.root);
test.insert(49);
test.insert(48);
test.insert(47);
test.isBalanced(test.root);
