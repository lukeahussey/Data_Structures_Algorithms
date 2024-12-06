class MyQueue {
  constructor() {
    this.readStack = [];
    this.writeStack = [];
  }

  enqueue(value) {
    this.writeStack.push(value);
    this.readStack = [];
    // Iterate backwards over writeStack adding latest readStack in reverse order
    for (let i = this.writeStack.length - 1; i >= 0; i--) {                             // O(n) time complexity
      this.readStack.push(this.writeStack[i]);
    }
    console.log("writeStack: ", this.writeStack);
    console.log("readStack: ", this.readStack);
  }

  dequeue() {
    if (this.readStack.length < 1) {
      console.log("Cannot pop from empty stack");
      return null;
    }
    const element = this.readStack.pop();
    this.writeStack = [];
    // Iterate backwards over readStack adding latest writeStack in reverse order
    for (let i = this.readStack.length - 1; i >= 0; i--) {                              // O(n) time complexity
      this.writeStack.push(this.readStack[i]);
    }
    console.log("readStack: ", this.readStack);
    console.log("writeStack: ", this.writeStack);
    return element;
  }

  peek() {
    if (this.readStack.length < 1) {
      console.log("Cannot peek from empty stack");
      return null;
    }
    return this.readStack[this.readStack.length - 1];                                   // O(1) time complexity
  }

  isEmpty() {
    return this.readStack.length < 1;                                                   // O(1) time complexity
  }
};

const myQueue = new MyQueue();
myQueue.enqueue(1); // queue is: [1]
myQueue.enqueue(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.dequeue(); // return 1
myQueue.dequeue(); // return 1, queue is [2]
myQueue.isEmpty(); // return false