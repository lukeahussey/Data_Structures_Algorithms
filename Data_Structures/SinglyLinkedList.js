class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class SinglyLinkedList {
  constructor(value) {
    console.log("\nCREATE LIST with value: ", value);
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    console.log("\nAPPEND value: ", value);
    const newTail = new Node(value);
    if (this.length === 0) {
      this.head = newTail;
    }
    else {
      this.tail.next = newTail;
    }
    this.tail = newTail;
    this.length++;
    return this.printList();
  }
  prepend(value) {
    console.log("\nPREPEND value: ", value);
    const newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
    return this.printList();
  }
  insert(index, value) {
    console.log("\nINSERT value: ", value, " at index: ", index);
    if (index === 0) {
      return this.prepend(value);
    }
    if (index >= this.length+1) {
      return this.append(value);
    }    
    const newNode = new Node(value);
    const leaderNode = this.traverseToIndex(index-1); // FIND the node before the insert index
    newNode.next = leaderNode.next;
    leaderNode.next = newNode;
    this.length++;
    return this.printList();
  }
  remove(index) {
    console.log("\nREMOVE index: ", index);
    if (index === 0) {
      if (this.length > 1) {
        this.head = this.head.next
      }
      else {
        this.head = null;
        this.tail = null;
      }
    }
    else if (index >= this.length) {
      throw new Error(`Index "${index}" is invalid or outside the bounds of the list`);
    }
    else {
      const leaderNode = this.traverseToIndex(index-1);
      const nodeToDelete = leaderNode.next;
      const followerNode = nodeToDelete.next;
      if (followerNode === null) {
        leaderNode.next = null;
        this.tail = leaderNode;
      }
      else {
        leaderNode.next = followerNode;
      }
      nodeToDelete.next = null;
    }
    this.length--;
    return this.printList();
  }
  traverseToIndex(index) {
    if (isNaN(index) || index < 0 || index > this.length+1) {
      throw new Error(`Index "${index}" is invalid or outside the bounds of the list`);
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  printList() {
    console.log('\nthis.head: ', this.head, '\nthis.tail: ', this.tail, '\nthis.length: ', this.length);
    let currentNode = this.head;
    let output = "\nLIST:\n";
    while (currentNode !== null) {
      output += 
        `${currentNode === this.head ? '[HEAD]' : ''} (${currentNode.value}) ${currentNode === this.tail ? '[TAIL]' : ''} <-> `;
      currentNode = currentNode.next;
    }
    output += "NULL\n\n=======================================================================";
    console.log(output);
  }
  reverse() {
    console.log("\nREVERSE list:");
    if (this.length <= 0) {
      throw new Error("Cannot reverse an empty list");
    }
    
    let listValuesInOrder = this.moveValuesToArray();               // O(n) space complexity
    for (let i = (listValuesInOrder.length - 1); i >= 0; i--) {     // O(n) time complexity
      this.append(listValuesInOrder[i]);
    }
    return this.printList();
  }
  moveValuesToArray() {
    let listValuesInOrder = [];                                     // O(n) space complexity
    while (this.head !== null) {                                    // O(n) time complexity
      listValuesInOrder.push(this.head.value);
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
      }
      this.length--;
      this.printList();
    }
    return listValuesInOrder;
  }
}

let myLinkedList = new SinglyLinkedList(10);
myLinkedList.printList();
myLinkedList.remove(0);

myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(2);
myLinkedList.prepend(1);

// myLinkedList.insert(2,99);
// myLinkedList.insert(4,96);

// myLinkedList.remove(2);
// myLinkedList.remove(4);
// myLinkedList.remove(3);
// myLinkedList.remove(0);

myLinkedList.reverse();