// circular queue

// circular queue is a linear data structure that follows the FIFO (First In First Out) principle, but unlike a regular queue, the last position is connected back to the first position to make a circle. It is also known as a ring buffer.

// The main operations of a circular queue are:
// 1. Enqueue: This operation adds an item to the rear of the circular queue.
// 2. Dequeue: This operation removes an item from the front of the circular queue.
// 3. Peek/Front: This operation returns the item at the front of the circular queue without removing it.
// 4. IsEmpty: This operation checks if the circular queue is empty.
// 5. IsFull: This operation checks if the circular queue is full.
// 6. Size: This operation returns the number of items in the circular queue.

class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.front = 0;
    this.rear = -1;
    this.currentLength = 0;
  }

  // Enqueue: Add an element to the rear of the circular queue
  enqueue(element) {
    if (this.isFull()) {
      return "Circular Queue is full";
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;
    this.currentLength++;
  }

  // Dequeue: Remove and return the front element of the circular queue
  dequeue() {
    if (this.isEmpty()) {
      return "Circular Queue is empty";
    }
    const item = this.items[this.front];
    this.items[this.front] = undefined;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    return item;
  }

  // Peek/Front: Return the front element of the circular queue without removing it
  peek() {
    if (this.isEmpty()) {
      return "Circular Queue is empty";
    }
    return this.items[this.front];
  }

  // IsEmpty: Check if the circular queue is empty
  isEmpty() {
    return this.currentLength === 0;
  }

  // IsFull: Check if the circular queue is full
  isFull() {
    return this.currentLength === this.capacity;
  }

  // Size: Return the number of elements in the circular queue
  size() {
    return this.currentLength;
  }

  // Clear: Remove all elements from the circular queue
  clear() {
    this.items = new Array(this.capacity);
    this.front = 0;
    this.rear = -1;
    this.currentLength = 0;
  }

  // Print: Visualize the elements in the circular queue (front → rear)
  print() {
    if (this.isEmpty()) {
      console.log("Circular Queue is empty");
      return;
    }
    let result = [];
    for (let i = 0; i < this.currentLength; i++) {
      result.push(this.items[(this.front + i) % this.capacity]);
    }
    console.log(result.toString());
  }

  // Iterate: Allow iteration over the circular queue elements (from front to rear)
  [Symbol.iterator]() {
    let index = 0;

    return {
      next: () => {
        if (index < this.currentLength) { 
          return { value: this.items[(this.front + index++) % this.capacity], done: false };
        } else {
          return { done: true };
        }
      },
    };
  }

}

/** Usage */

const circularQueue = new CircularQueue(5);

// isEmpty / size on a fresh queue
console.log(circularQueue.isEmpty()); // true
console.log(circularQueue.size());    // 0

// enqueue – fill to capacity
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
circularQueue.enqueue(4);
circularQueue.enqueue(5);

circularQueue.print();                          // 1,2,3,4,5
console.log(circularQueue.isFull());            // true
console.log(circularQueue.enqueue(6));          // "Circular Queue is full"

// peek – front element without removing
console.log(circularQueue.peek());              // 1

// dequeue – removes from the front
console.log(circularQueue.dequeue());           // 1
console.log(circularQueue.dequeue());           // 2
circularQueue.print();                          // 3,4,5
console.log(circularQueue.size());              // 3
console.log(circularQueue.isFull());            // false

// wrap-around: reuse freed slots at the front
circularQueue.enqueue(6);
circularQueue.enqueue(7);
circularQueue.print();                          // 3,4,5,6,7
console.log(circularQueue.isFull());            // true

// for...of iteration (uses Symbol.iterator)
for (const val of circularQueue) {
  process.stdout.write(val + " ");              // 3 4 5 6 7
}
console.log();

// clear – reset the queue
circularQueue.clear();
console.log(circularQueue.isEmpty());           // true
console.log(circularQueue.size());              // 0
circularQueue.print();                          // Circular Queue is empty

// dequeue / peek on an empty queue
console.log(circularQueue.dequeue());           // "Circular Queue is empty"
console.log(circularQueue.peek());              // "Circular Queue is empty"

