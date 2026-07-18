// Singly Linked List

// A linked list is a linear data structure where each element is a separate object, called a node. Each node contains data and a reference (or link) to the next node in the sequence. This allows for efficient insertion and deletion of elements, as the nodes can be easily rearranged without needing to shift other elements.

// In a singly linked list, each node only holds a reference to the next node, so traversal is one-directional (head to tail).

// The main operations of a linked list are:
// 1. Insertion: Adding a new node to the linked list at a specific position (beginning, end, or middle).
// 2. Deletion: Removing a node from the linked list at a specific position.
// 3. Traversal: Accessing each node in the linked list to perform operations or retrieve data.
// 4. Searching: Finding a specific node in the linked list based on its value.

class Node {
  constructor(value) {
    this.value = value; // The value stored in the node
    this.next = null; // A reference to the next node in the list
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; // The first node in the linked list
    this.size = 0; // The number of nodes in the linked list
  }

  // Get Size: Return the number of nodes in the linked list
  getSize() {
    return this.size; // Return the size of the list
  }

  // IsEmpty: Check if the linked list is empty
  isEmpty() {
    return this.size === 0; // Return true if the list is empty, false otherwise
  }

  // Traversal: Print all the values in the linked list
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

  // Clear: Remove all nodes from the linked list
  clear() {
    this.head = null; // Set the head to null, effectively removing all nodes
    this.size = 0; // Reset the size to 0
  }

  // prepend: Add a new node to the beginning of the linked list
  prepend(value) {
    const newNode = new Node(value); // Create a new node with the given value

    if (this.isEmpty()) {
      this.head = newNode; // If the list is empty, set the new node as the head
    } else {
      newNode.next = this.head; // Link the new node to the current head
      this.head = newNode; // Update the head to the new node
    }
    this.size++; // Increment the size of the list
  }

  // Append: Add a new node to the linked list at the end
  append(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode; // If the list is empty, set the new node as the head
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next; // Traverse to the end of the list
      }
      current.next = newNode; // Link the new node to the end of the list
    }
    this.size++; // Increment the size of the list
  }

  // Insertion: Add a new node to the linked list at a specific position
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return null; // If the index is out of bounds, return null
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }

      newNode.next = current.next;
      current.next = newNode;
    }

    this.size++;
  }

  // Remove a node from the linked list at a specific position
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null; // If the index is out of bounds, return null
    }

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let current = this.head;

      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }

      removedNode = current.next;
      current.next = removedNode.next;
    }
    this.size--;
    return removedNode.value; // Return the value of the removed node
  }

  // Remove a node from the linked list by value
  remove(value) {
    if (this.isEmpty()) {
      return null; // If the list is empty, do nothing
    }

    if (this.head.value === value) {
      this.head = this.head.next; // If the head node is the one to delete, update the head
      this.size--;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next; // Bypass the node to delete it
        this.size--;
        return;
      }

      current = current.next; // Move to the next node
    }
    return null; // Return null if the value is not found
  }

  // Searching: Find a node in the linked list by value
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

  // Reverse: Reverse the linked list in place
  reverse() {
    let prev = null;
    let current = this.head;
    
    while (current !== null) {
      let nextNode = current.next; // Store the next node
      current.next = prev; // Reverse the link
      prev = current; // Move prev to the current node
      current = nextNode; // Move to the next node
    }

    this.head = prev; // Update the head to the new first node
  }

  // Iterate: Allow iteration over the linked list nodes
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
