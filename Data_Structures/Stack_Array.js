class Stack {
  constructor() {
    this.array = [];
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    console.log("\nPEEK top node: ", this.top);
  }

  push(value) {
    console.log("\nPUSH value to top: ", value);
    this.array.push(value);
    this.top = value;
    if (this.length === 0) {
      this.bottom = value;
    }
    this.length++;
    return this.printStack();
  }

  pop() {
    console.log("\nPOP top value: ", this.top);
    if (this.length <= 0) {
      console.log("Stack is empty, cannot pop");
      return null;
    }
    this.array.pop();
    this.length--;
    if (this.length == 0) {
      this.top = null;
      this.bottom = null;
    }
    else {
      this.top = this.array[this.length-1];
    }
    return this.printStack();
  }

  isEmpty() {
    console.log("\nStack is empty = ", this.length < 1);
    return this.length < 1;
  }

  printStack() {
    console.log('\nthis.array: ', this.array, '\nthis.top: ', this.top, '\nthis.bottom: ', this.bottom, '\nthis.length: ', this.length);
    let output = "\nSTACK:\n";
    for (let i = this.length-1; i >= 0; i--) {
      let val = this.array[i];
      output += `("${val}") ${val === this.top ? '[TOP] ' : ''}${val === this.bottom ? '[BOTTOM]' : ''}\n`;
    }
    output += "\n\n=======================================================================";
    console.log(output);
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