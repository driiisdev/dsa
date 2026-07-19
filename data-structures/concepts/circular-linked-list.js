// Circular Linked List

// A circular linked list is a variation of a linked list where the last node's `next`
// pointer references the first node (`head`) instead of `null`, forming a loop. There is
// no natural "end" to stop a naive traversal at, so every traversal here counts up to
// `size` nodes rather than checking for `next === null` (which would never happen and
// would loop forever).

// The main operations are the same as a singly linked list (insertion, deletion,
// traversal, searching), but insertion/removal at either end must also keep the tail's
// `next` pointer correctly wrapped back to the head.

class Node {
  constructor(value) {
    this.value = value; // The value stored in the node
    this.next = null; // A reference to the next node in the list
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null; // The first node in the list
    this.tail = null; // The last node in the list -- its `next` always points back to head
    this.size = 0; // The number of nodes in the list
  }

  // isEmpty: Check if the list is empty
  isEmpty() {
    return this.size === 0;
  }

  // getSize: Return the number of nodes in the list
  getSize() {
    return this.size;
  }

  // append: Add a new node to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      newNode.next = newNode; // the only node points to itself
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // close the loop back to head
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // prepend: Add a new node to the beginning of the list
  prepend(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      newNode.next = newNode;
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head; // re-link tail to the new head
    }

    this.size++;
  }

  // remove: Delete the first node matching the given value, returns whether it was found
  remove(value) {
    if (this.isEmpty()) {
      return false;
    }

    // Single-node list
    if (this.head === this.tail) {
      if (this.head.value !== value) {
        return false;
      }
      this.head = null;
      this.tail = null;
      this.size--;
      return true;
    }

    // Removing the head
    if (this.head.value === value) {
      this.head = this.head.next;
      this.tail.next = this.head; // re-link tail to the new head
      this.size--;
      return true;
    }

    // Removing any other node (including the tail)
    let current = this.head;
    for (let i = 0; i < this.size - 1; i++) {
      if (current.next.value === value) {
        if (current.next === this.tail) {
          this.tail = current; // the node before the removed tail becomes the new tail
        }
        current.next = current.next.next;
        this.size--;
        return true;
      }
      current = current.next;
    }

    return false; // value not found
  }

  // search: Check whether a value exists in the list
  search(value) {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  // toArray: Return the list's values as a plain array, walking exactly `size` nodes
  toArray() {
    const values = [];
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

  // print: Visualize the elements in the list
  print() {
    if (this.isEmpty()) {
      console.log('The list is empty.');
      return;
    }
    console.log(this.toArray().join(' -> ') + ' -> (back to head)');
  }

  // Iterate: Allow iteration over the list's nodes, stopping after `size` steps
  [Symbol.iterator]() {
    let current = this.head;
    let count = 0;
    const size = this.size;

    return {
      next: () => {
        if (count < size) {
          const value = current.value;
          current = current.next;
          count++;
          return { value, done: false };
        }
        return { done: true };
      },
    };
  }
}

/** Example usage */
const cll = new CircularLinkedList();

console.log('Is empty?', cll.isEmpty()); // Output: true
console.log('Remove on empty list:', cll.remove(1)); // Output: false

cll.append('A');
cll.append('B');
cll.append('C');
cll.print(); // Output: A -> B -> C -> (back to head)

console.log('head.next === tail?', cll.head.next === cll.tail); // Output: false (A.next is B)
console.log('tail.next === head (the loop)?', cll.tail.next === cll.head); // Output: true

cll.prepend('Z');
cll.print(); // Output: Z -> A -> B -> C -> (back to head)
console.log('New tail still points to new head?', cll.tail.next === cll.head); // Output: true

console.log('Search "B":', cll.search('B')); // Output: true
console.log('Search "Q":', cll.search('Q')); // Output: false

console.log([...cll]); // Output: ['Z', 'A', 'B', 'C'] (iteration stops after `size` steps)

console.log('Remove middle "B":', cll.remove('B')); // Output: true
cll.print(); // Output: Z -> A -> C -> (back to head)

console.log('Remove head "Z":', cll.remove('Z')); // Output: true
cll.print(); // Output: A -> C -> (back to head)
console.log('tail.next still points to new head?', cll.tail.next === cll.head); // Output: true

console.log('Remove tail "C":', cll.remove('C')); // Output: true
cll.print(); // Output: A -> (back to head)
console.log('Single-node list: head === tail?', cll.head === cll.tail); // Output: true
console.log('Single node points to itself?', cll.head.next === cll.head); // Output: true

console.log('Remove last node "A":', cll.remove('A')); // Output: true
console.log('Is empty after removing everything?', cll.isEmpty()); // Output: true
console.log('Remove non-existent value:', cll.remove('X')); // Output: false
