class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  
  peek() {
    console.log("\nPEEK first node: ", this.first);
  }

  enqueue(value) {
    console.log("\nENQUEUE value to end: ", value);
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
    }
    else {
      this.last.next = newNode;
    }    
    this.last = newNode;
    this.length++;
    return this.printQueue();
  }

  dequeue() {
    if (this.length <= 0) {
      console.log("Cannot dequeue from an empty queue");
      return null;
    }
    if (this.length === 1) {
      this.last = null;
    }
    const nodeToDequeue = this.first;
    console.log("\nDEQUEUE first value: ", nodeToDequeue.value);
    this.first = this.first.next
    this.length--;
    this.printQueue();
    return nodeToDequeue;
  }

  isEmpty() {
    console.log("\nQueue is empty = ", this.length < 1);
    return this.length < 1;
  }

  printQueue() {
    console.log('\nthis.first: ', this.first, '\nthis.last: ', this.last, '\nthis.length: ', this.length);
    let currentNode = this.first;
    let output = "\nQUEUE:\n";
    while (currentNode !== null) {
      output += 
        `("${currentNode.value}") ${currentNode === this.first ? '[FIRST] ' : ''}${currentNode === this.last ? '[LAST]' : ''}\n`;
      currentNode = currentNode.next;
    }
    output += "\n\n=======================================================================";
    console.log(output);
  }
}

const myQueue = new Queue();
myQueue.isEmpty();
myQueue.enqueue("Ozzy");
myQueue.peek();
myQueue.enqueue("Tony");
myQueue.enqueue("Geezer");
myQueue.enqueue("Bill");
myQueue.isEmpty();
myQueue.dequeue();
myQueue.isEmpty();
myQueue.enqueue("Dio");
myQueue.peek();
myQueue.isEmpty();