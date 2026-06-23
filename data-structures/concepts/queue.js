// queue

// A queue is a linear data structure that follows the First In First Out (FIFO) principle. It is an ordered collection of items where the addition of new items happens at one end, called the rear, and the removal of existing items occurs at the other end, called the front.

// The main operations of a queue are:
// 1. Enqueue: This operation adds an item to the rear of the queue.
// 2. Dequeue: This operation removes an item from the front of the queue.
// 3. Peek/Front: This operation returns the item at the front of the queue without removing it.
// 4. IsEmpty: This operation checks if the queue is empty.
// 5. Size: This operation returns the number of items in the queue.

// The queue can be implemented using arrays or linked lists. In this implementation, we will use an array to represent the queue.

class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue: Add an element to the rear of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue: Remove and return the front element of the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    return this.items.shift();
  }

  // Peek/Front: Return the front element of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    return this.items[0];
  }

  // IsEmpty: Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Size: Return the number of elements in the queue
  size() {
    return this.items.length;
  }

  // Clear: Remove all elements from the queue
  clear() {
    this.items = [];
  }

  // Print: Visualize the elements in the queue (front → rear)
  print() {
    console.log(this.items.toString());
  }

  // Iterate: Allow iteration over the queue elements (from front to rear)
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.items.length) {
          return { value: this.items[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

// Big-O summary
// enqueue                           O(1)
// dequeue                           O(n) (due to shift operation)
// peek                              O(1)
// isEmpty                           O(1)
// size                              O(1)
// clear                             O(1)
// iterate (for...of)                O(n)

// Note: The dequeue operation has a time complexity of O(n) because the shift operation in an array requires re-indexing all the remaining elements. If performance is a concern, consider using a linked list implementation for the queue, which allows O(1) time complexity for both enqueue and dequeue operations.

/** Usage */

const myQueue = new Queue();
myQueue.enqueue(9);
myQueue.enqueue(8);
myQueue.enqueue(5);
myQueue.enqueue(6);
myQueue.enqueue(7);

console.log(myQueue.size()); // 5
console.log(myQueue.peek()); // 9
console.log(myQueue.dequeue()); // 9
console.log(myQueue.print()); // 8,5,6,7
console.log(myQueue.isEmpty()); // false
