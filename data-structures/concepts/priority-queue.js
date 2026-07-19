// Priority Queue

// A priority queue is a data structure where each element has an associated priority,
// and elements are served according to that priority rather than insertion order (unlike
// a plain queue's FIFO behavior). This implementation is a *min* priority queue -- the
// lowest priority value is always dequeued first -- backed by a binary heap for O(log n)
// enqueue/dequeue instead of the O(n log n) sorted-array approach.
//
// A binary heap keeps a complete binary tree's shape invariant (every level full except
// possibly the last, filled left to right) inside a flat array: for a node at index i,
// its children live at 2i+1 and 2i+2, and its parent lives at floor((i-1)/2). The "heap
// property" (parent priority <= both children's priorities, for a min-heap) is restored
// after every insertion/removal by bubbling the changed element up or down.

class PriorityQueue {
  constructor() {
    this.heap = []; // [{ value, priority }, ...] stored as a binary min-heap
  }

  // isEmpty: Check if the priority queue has no elements
  isEmpty() {
    return this.heap.length === 0;
  }

  // size: Return the number of elements in the priority queue
  size() {
    return this.heap.length;
  }

  // peek: Return the highest-priority (lowest value) element without removing it
  peek() {
    return this.isEmpty() ? undefined : this.heap[0];
  }

  // enqueue: Add a value with a given priority, then restore the heap property upward
  enqueue(value, priority) {
    this.heap.push({ value, priority });
    this._bubbleUp(this.heap.length - 1);
  }

  // dequeue: Remove and return the highest-priority element
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._bubbleDown(0);
    }

    return min;
  }

  // _bubbleUp: Swap a node with its parent while it violates the heap property
  _bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].priority <= this.heap[index].priority) {
        break;
      }
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  // _bubbleDown: Swap a node with its smaller child while it violates the heap property
  _bubbleDown(index) {
    const n = this.heap.length;

    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;

      if (left < n && this.heap[left].priority < this.heap[smallest].priority) {
        smallest = left;
      }
      if (right < n && this.heap[right].priority < this.heap[smallest].priority) {
        smallest = right;
      }
      if (smallest === index) {
        break;
      }

      [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
      index = smallest;
    }
  }
}

/** Example usage */
const pq = new PriorityQueue();

console.log('Is empty?', pq.isEmpty()); // Output: true

pq.enqueue('flu shot', 3);
pq.enqueue('gunshot wound', 1);
pq.enqueue('sprained ankle', 4);
pq.enqueue('chest pain', 1);
pq.enqueue('broken arm', 2);

console.log('Size:', pq.size()); // Output: 5
console.log('Peek:', pq.peek()); // Output: { value: 'gunshot wound', priority: 1 }

console.log('Dequeue order (lower priority number = more urgent):');
while (!pq.isEmpty()) {
  console.log(pq.dequeue());
}
// Output (priority 1s come out before priority 2, 3, 4; ties keep heap-internal order):
// { value: 'gunshot wound', priority: 1 }
// { value: 'chest pain', priority: 1 }
// { value: 'broken arm', priority: 2 }
// { value: 'flu shot', priority: 3 }
// { value: 'sprained ankle', priority: 4 }

console.log('Is empty after draining?', pq.isEmpty()); // Output: true
console.log('Dequeue on empty queue:', pq.dequeue()); // Output: undefined
