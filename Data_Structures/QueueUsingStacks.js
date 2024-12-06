class MyQueue {
  constructor() {
    // this.readStack = [];
    // this.writeStack = [];
    // this.primaryStack = [];
    // this.reversalStack = [];
    this.input = [];
    this.output = [];
  }

  enqueue(value) {
    this.input.push(value);                                                       // O(1) time complexity
  }

  dequeue() {
    this.peek();
    return this.output.pop();                                                     // O(1) time complexity
  }

  peek() {
    if (this.output.length < 1) {                                                 // Amortized O(1) time complexity
      while (this.input.length !== 0) {
        this.output.push(this.input.pop());
      }
    }
    return this.output[0];
  }

  isEmpty() {
    return this.input.length < 1 && this.output.length < 1;                       // O(1) time complexity
  }

  enqueue_LinearTime(value) {
    // Move array contents into second array in reverse, push new value, then move back
    while (this.primaryStack.length !== 0) {                                            // O(n) time complexity
      this.reversalStack.push(this.primaryStack.pop());                                 // O(n) space complexity
    }
    this.primaryStack.push(value);
    while (this.reversalStack.length !== 0) {
      this.primaryStack.push(this.reversalStack.pop());
    }
  }

  enqueue_BruteForce(value) {
    this.writeStack.push(value);
    this.readStack = [];
    // Iterate backwards over writeStack adding latest readStack in reverse order
    for (let i = this.writeStack.length - 1; i >= 0; i--) {                             // O(n) time complexity
      this.readStack.push(this.writeStack[i]);
    }
    console.log("writeStack: ", this.writeStack);
    console.log("readStack: ", this.readStack);
  }

  dequeue_BruteForce() {
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
};

const myQueue = new MyQueue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
myQueue.dequeue();
myQueue.dequeue();
myQueue.isEmpty();