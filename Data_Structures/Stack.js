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
    console.log("\nPEEK top node: ", this.top);
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
      console.log("Stack is empty, cannot pop");
      return null;
    }
    if (this.length == 1) {
      this.top = null;
      this.bottom = null;
    }
    else {
      this.top = this.top.next;
    }
    this.length--;
  }

  isEmpty() {
    console.log("\nStack is empty = ", this.length < 1);
    return this.length < 1;
  }
}

const myStack = new Stack();
myStack.isEmpty();
myStack.peek();
myStack.push("Google");
myStack.peek();
myStack.pop();
myStack.peek();
myStack.isEmpty();
myStack.push("Discord");
myStack.peek();
myStack.push("Stackoverflow");
myStack.peek();
myStack.push("Udemy");
myStack.peek();
myStack.pop();
myStack.isEmpty();