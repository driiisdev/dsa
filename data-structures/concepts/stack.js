// stack

// A stack is a linear data structure that follows the Last In First Out (LIFO) principle.

// - Elements are added and removed from the top of the stack.
// - Common operations include push (add), pop (remove), peek (view top element), and isEmpty (check if stack is empty).

class Stack {
  constructor() {
    this.items = [];
  }

  // Push: Add an element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Pop: Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Peek: Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // isEmpty: Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Size: Return the number of elements in the stack
  size() {
    return this.items.length;
  }

  // Clear: Remove all elements from the stack
  clear() {
    this.items = [];
  }

  // Iterate: Allow iteration over the stack elements (from top to bottom)
  [Symbol.iterator]() {
    let index = this.items.length - 1;
    return {
      next: () => {
        if (index >= 0) {
          return { value: this.items[index--], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }

}

// Big-O summary
// push                              O(1)
// pop                               O(1)
// peek                              O(1)
// isEmpty                           O(1)
// size                              O(1)
// clear                             O(1)
// iterate (for...of)                O(n)


/** Usage */

const myStack = new Stack();
myStack.push(4);
myStack.push(7);
myStack.push(9);

console.log(myStack.size()); // 3
console.log(myStack.peek()); // 9
console.log(myStack.pop()); // 9
console.log(myStack.size()); // 2
console.log(myStack.isEmpty()); // false

