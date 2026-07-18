// Doubly Linked List

// A doubly linked list is a linear data structure where each node holds a value and two references: one to the next node and one to the previous node. The extra `prev` link allows traversal in both directions and lets removal happen in O(1) once you're holding the node, since there's no need to walk from the head to find the node before it.

// The main operations are the same as a singly linked list (insertion, deletion, traversal, searching), but each one also has to keep the `prev` links in sync alongside `next`. A `tail` reference is kept as well, since it makes append and remove-from-end O(1) instead of O(n).

class Node {
  constructor(value) {
    this.value = value; // The value stored in the node
    this.next = null; // A reference to the next node in the list
    this.prev = null; // A reference to the previous node in the list
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // The first node in the list
    this.tail = null; // The last node in the list
    this.size = 0; // The number of nodes in the list
  }

  // Get Size: Return the number of nodes in the list
  getSize() {
    return this.size; // Return the size of the list
  }

  // IsEmpty: Check if the list is empty
  isEmpty() {
    return this.size === 0; // Return true if the list is empty, false otherwise
  }

  // Traversal: Print all the values from head to tail
  print() {
    if (this.isEmpty()) {
      console.log("The linked list is empty.");
    } else {
      let current = this.head;
      while (current !== null) {
        console.log(current.value); // Print the value of the current node
        current = current.next; // Move to the next node
      }
    }
  }

  // Traversal: Print all the values from tail to head
  printReverse() {
    if (this.isEmpty()) {
      console.log("The linked list is empty.");
    } else {
      let current = this.tail;
      while (current !== null) {
        console.log(current.value); // Print the value of the current node
        current = current.prev; // Move to the previous node
      }
    }
  }

  // Clear: Remove all nodes from the list
  clear() {
    this.head = null; // Set the head to null, effectively removing all nodes
    this.tail = null; // Set the tail to null as well
    this.size = 0; // Reset the size to 0
  }

  // Prepend: Add a new node to the beginning of the list
  prepend(value) {
    const newNode = new Node(value); // Create a new node with the given value

    if (this.isEmpty()) {
      this.head = newNode; // If the list is empty, the new node is both head and tail
      this.tail = newNode;
    } else {
      newNode.next = this.head; // Link the new node to the current head
      this.head.prev = newNode; // Link the current head back to the new node
      this.head = newNode; // Update the head to the new node
    }
    this.size++; // Increment the size of the list
  }

  // Append: Add a new node to the end of the list
  append(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode; // If the list is empty, the new node is both head and tail
      this.tail = newNode;
    } else {
      newNode.prev = this.tail; // Link the new node back to the current tail
      this.tail.next = newNode; // Link the current tail to the new node
      this.tail = newNode; // Update the tail to the new node
    }
    this.size++; // Increment the size of the list
  }

  // Insertion: Add a new node to the list at a specific position
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return null; // If the index is out of bounds, return null
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.size) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next; // Traverse to the node currently at the target index
    }

    const prevNode = current.prev;
    newNode.prev = prevNode;
    newNode.next = current;
    prevNode.next = newNode;
    current.prev = newNode;

    this.size++;
  }

  // Remove a node from the list at a specific position
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null; // If the index is out of bounds, return null
    }

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;

      if (this.head !== null) {
        this.head.prev = null;
      } else {
        this.tail = null; // The removed node was the only node in the list
      }
    } else if (index === this.size - 1) {
      removedNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      let current = this.head;

      for (let i = 0; i < index; i++) {
        current = current.next;
      }

      removedNode = current;
      removedNode.prev.next = removedNode.next;
      removedNode.next.prev = removedNode.prev;
    }

    this.size--;
    return removedNode.value; // Return the value of the removed node
  }

  // Remove a node from the list by value
  remove(value) {
    if (this.isEmpty()) {
      return null; // If the list is empty, do nothing
    }

    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        if (current.prev !== null) {
          current.prev.next = current.next; // Bypass the node to delete it
        } else {
          this.head = current.next; // The node to delete is the head node
        }

        if (current.next !== null) {
          current.next.prev = current.prev; // Bypass the node to delete it
        } else {
          this.tail = current.prev; // The node to delete is the tail node
        }

        this.size--;
        return current.value;
      }

      current = current.next; // Move to the next node
    }

    return null; // Return null if the value is not found
  }

  // Searching: Find a node in the list by value
  search(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true; // Return true if the value is found
      }

      current = current.next; // Move to the next node
    }

    return false; // Return false if the value is not found
  }

  // Reverse: Reverse the list in place by swapping next/prev on every node
  reverse() {
    let current = this.head;
    let temp = null;

    this.tail = this.head; // The old head becomes the new tail

    while (current !== null) {
      temp = current.prev;
      current.prev = current.next; // Swap next and prev on the current node
      current.next = temp;
      current = current.prev; // current.prev now holds the original current.next
    }

    if (temp !== null) {
      this.head = temp.prev; // The old tail becomes the new head
    }
  }

  // Iterate: Allow iteration over the list nodes, head to tail
  [Symbol.iterator]() {
    let current = this.head;

    return {
      next: () => {
        if (current) {
          const value = current.value; // Store the current node's value
          current = current.next; // Move to the next node
          return { value, done: false }; // Return the value and indicate that iteration is not done
        } else {
          return { done: true }; // Indicate that iteration is complete
        }
      },
    };
  }
}
