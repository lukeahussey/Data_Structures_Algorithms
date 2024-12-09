class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return newNode;
    }
    let currentNode = this.root;
    while (currentNode !== null) {
      if (value >= currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        }
        else {
          currentNode.right = newNode;
          currentNode = null;
        }
      }
      else {
        if (currentNode.left) {
          currentNode = currentNode.left;
        }
        else {
          currentNode.left = newNode;
          currentNode = null;
        }
      }
    }
    return newNode;
  }

  lookup(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
      else { 
        currentNode = currentNode.left;
      }
    }
    return currentNode;
  }

  // remove(value) {    
  // }
}

console.log("START");
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
//tree.remove(170);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}