class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    let top = this.array[this.array.length-1];
    console.log("\nPEEK top node: ", top);
    return top;
  }

  push(value) {
    console.log("\nPUSH value to top: ", value);
    this.array.push(value);
    return this.printStack();
  }

  pop() {
    if (this.array.length <= 0) {
      console.log("Stack is empty, cannot pop");
      return null;
    }
    let top = this.array.pop();
    console.log("\nPOP top value: ", top);
    return this.printStack();
  }

  isEmpty() {
    console.log("\nStack is empty = ", this.array.length < 1);
    return this.length < 1;
  }

  printStack() {
    console.log('\nthis.array: ', this.array);
    let output = "\nSTACK:\n";
    for (let i = this.array.length-1; i >= 0; i--) {
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