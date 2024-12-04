class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    console.log("\nPEEK:");
    if (this.length <= 0) {
      return null;
    }
    return this.top;
  }

  push(value) {
    console.log("\nPUSH value to top: ", value);
    const newNode = new Node(value);
    const currentTop = this.top;
    if (this.length === 0) {
      this.bottom = newNode;
    }
    this.top = newNode;
    this.top.next = currentTop;
    this.length++;
  }

  pop() {
    console.log("\nPOP top value: ", this.top);
    if (this.length <= 0) {
      return null;
    }
    this.top = this.top.next;
    this.length--;
  }

  isEmpty() {
    console.log("\nStack is empty = ", this.length < 1);
    return this.length < 1;
  }
}

const myStack = new Stack();
myStack.isEmpty();
myStack.push("Google");
myStack.pop();
myStack.isEmpty();
myStack.push("Discord");
myStack.push("Udemy");
myStack.pop();
myStack.isEmpty();