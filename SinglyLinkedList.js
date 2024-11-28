class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
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
    const newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
    return this.printList();
  }
  insert(index, value) {
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
    if (index === 0) {
      this.length > 1 
        ? this.head = this.head.next
        : this.head = null;
    }
    else if (index >= this.length) {
      throw new Error(`Index "${index}" is invalid or outside the bounds of the list`);
    }
    else {
      const leaderNode = this.traverseToIndex(index-1);
      const nodeToDelete = leaderNode.next;
      leaderNode.next = nodeToDelete.next;
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
    let currentNode = this.head;
    let output = "HEAD: ";
    while (currentNode !== null) {
      output += `${currentNode.value} -> `;
      currentNode = currentNode.next;
    }
    output += "NULL";
    console.log(output);
  }
}

let myLinkedList = new SinglyLinkedList(10);
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