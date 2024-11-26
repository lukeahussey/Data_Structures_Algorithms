class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newTail = {
      value: value,
      next: null,
    };
    this.tail.next = newTail;
    this.tail = newTail;
    this.length++;
  }
  prepend(value) {
    let newHead = {
      value: value,
      next: null,
    };
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
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

let myLinkedList = new LinkedList(10);
myLinkedList.printList();
myLinkedList.append(5);
myLinkedList.printList();
myLinkedList.append(16);
myLinkedList.printList();
myLinkedList.prepend(2);
myLinkedList.printList();
myLinkedList.prepend(1);
myLinkedList.printList();
