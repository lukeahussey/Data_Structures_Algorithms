class Node {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.prev = null
  }
}

class DoublyLinkedList {
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
    newTail.prev = this.tail;
    this.tail = newTail;
    this.length++;
    return this.printList();
  }
  prepend(value) {
    console.log("\nPREPEND value: ", value);
    const newHead = new Node(value);
    newHead.next = this.head;
    this.head.prev = newHead;
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
    // // POTENTIAL PERFORMANCE IMPROVEMENT
    // if (index >= this.length / 2) {
    //   // TRAVERSE BACKWARDS FROM TAIL      
    // }
    // else {
    //   // TRAVERSE FORWARDS FROM HEAD
    // }
    const newNode = new Node(value);
    const leaderNode = this.traverseToIndex(index-1); // FIND the node AT the insert index
    const followerNode = leaderNode.next;
    leaderNode.next = newNode;
    newNode.prev = leaderNode;
    newNode.next = followerNode;
    followerNode.prev = newNode;
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
        followerNode.prev = leaderNode;
      }
      nodeToDelete.next = null;
      nodeToDelete.prev = null;
    }
    this.length--;
    return this.printList();
  }
  traverseToIndex(index, forwards) {
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
    console.log('\nthis.head: ', this.head, '\n', 'this.tail: ', this.tail);
    let currentNode = this.head;
    let output = "\nLIST:\n";
    while (currentNode !== null) {
      output += 
        `${currentNode === this.head ? '[HEAD]' : ''} (${currentNode.value}) ${currentNode === this.tail ? '[TAIL]' : ''} <-> `;
      currentNode = currentNode.next;
    }
    output += "NULL";
    console.log(output);
  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.printList();
myLinkedList.remove(0);

myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(2);
myLinkedList.prepend(1);

myLinkedList.insert(2,99);
myLinkedList.insert(4,96);

myLinkedList.remove(2);
myLinkedList.remove(4);
myLinkedList.remove(3);
myLinkedList.remove(0);