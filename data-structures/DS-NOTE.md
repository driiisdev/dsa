# Data Structures

## Topics

1. [What is a Data Structure?](#1-what-is-a-data-structure)
2. [Why Learn Data Structures?](#2-why-learn-data-structures)
3. [Course Overview](#3-course-overview)
4. [Array](#4-array)
5. [Object](#5-object)
6. [Set](#6-set)
7. [Map](#7-map)
8. [Stack](#8-stack)
9. [Queue](#9-queue)
10. [Circular Queue](#10-circular-queue)
11. [Singly Linked List](#11-singly-linked-list)
12. [Doubly Linked List](#12-doubly-linked-list)

---

## 1. What is a Data Structure?

- A data structure is a way to store and organize data so that it can be used efficiently
- A data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to that data

---

## 2. Why Learn Data Structures?

- Almost every application we build involves data that is modelled in a certain way
- To efficiently manage that data, you need data structures
- Imagine walking into a library only to find out there is no efficient organization of the books and they are stored randomly
- The difference between a function taking a few milliseconds vs a few seconds or even minutes comes down to the selection of the right data structure
- Data structures help you solve problems in a more efficient way, both in terms of time and memory
- Learning about data structures also helps you gain a more profound understanding of things you are already aware of:
  - DOM — tree data structure
  - Browser back and forward — stack data structure
  - OS job scheduling — queue data structure

---

## 3. Course Overview

### Built-in Data Structures

- Arrays
- Objects
- Sets
- Maps

### Custom Data Structures

- Stacks
- Queues
- Circular Queues
- Linked Lists
- Hash Tables
- Trees
- Graphs

---

## 4. Array

- An array is a data structure that can hold a collection of values
- Arrays can contain a mix of different data types — strings, booleans, numbers, or even objects
- Arrays are resizable; you don't have to declare the size before creating one
- JavaScript arrays are zero-indexed and maintain insertion order
- Arrays are iterables and can be used with a `for` loop

### Big-O Time Complexity

| Operation                                          | Complexity |
| -------------------------------------------------- | ---------- |
| Insert / remove at end (`push` / `pop`)            | O(1)       |
| Insert / remove at beginning (`shift` / `unshift`) | O(n)       |
| Insert / remove in middle (`splice`)               | O(n)       |
| Access by index                                    | O(1)       |
| Search for value                                   | O(n)       |
| `concat` / `slice`                                 | O(n)       |
| `forEach` / `map` / `filter` / `reduce`            | O(n)       |

---

## 5. Object

- An object is an unordered collection of key-value pairs
- Keys must be a string or symbol; values can be any data type
- To retrieve a value, use the corresponding key via dot notation (`obj.key`) or bracket notation (`obj["key"]`)
- Objects are not directly iterable — use `Object.keys()`, `Object.values()`, or `Object.entries()` to iterate

### Big-O

| Operation                              | Complexity |
| -------------------------------------- | ---------- |
| Access by key                          | O(1)       |
| Add / remove property                  | O(1)       |
| Search for value                       | O(n)       |
| `Object.keys` / `.values` / `.entries` | O(n)       |

---

## 6. Set

- A set holds a collection of **unique** values
- Can contain a mix of different data types — strings, booleans, numbers, objects
- Dynamically sized; no need to declare size upfront
- Maintains insertion order (iteration visits values in the order they were added)
- Iterable — can be used with a `for...of` loop

### Sets vs Arrays

| Concern          | Set                              | Array                                  |
| ---------------- | -------------------------------- | -------------------------------------- |
| Duplicate values | Not allowed (silently ignored)   | Allowed                                |
| Membership check | O(1) via `.has()`                | O(n) via `.includes()` / `.find()`     |
| Use when         | Uniqueness or fast lookup matter | Order, indexing, or duplicates needed  |

### Time Complexity

| Operation            | Complexity |
| -------------------- | ---------- |
| `add`                | O(1)       |
| `has`                | O(1)       |
| `delete`             | O(1)       |
| Iterate (`for...of`) | O(n)       |

---

## 7. Map

- A map holds key-value pairs where both keys and values can be of any data type
- Maintains insertion order (unlike plain objects, this holds for all key types)
- To retrieve a value, use the corresponding key via `.get(key)`
- Iterable — can be used with a `for...of` loop; exposes `.keys()`, `.values()`, `.entries()`
- Size is always available via the `.size` property

### Maps vs Objects

| Concern          | Map                        | Object                       |
| ---------------- | -------------------------- | ---------------------------- |
| Key types        | Any type                   | String or Symbol             |
| Insertion order  | Always maintained          | Maintained for string keys   |
| Default keys     | None                       | Has prototype keys           |
| Iterable         | `for...of` native          | Via `Object.keys()` etc.     |
| Size             | `.size` property           | `Object.keys().length`       |
| Use when         | Pure data, non-string keys | Structured data with methods |

### Map Big-O

| Operation            | Complexity |
| -------------------- | ---------- |
| `set`                | O(1)       |
| `get`                | O(1)       |
| `has`                | O(1)       |
| `delete`             | O(1)       |
| Iterate (`for...of`) | O(n)       |

---

## 8. Stack

- A stack is a sequential collection of elements that follows the **Last In, First Out (LIFO)** principle
- The last element inserted is the first to be removed — like a stack of plates
- A stack is an abstract data type defined by its behavior, not a mathematical model
- Two core operations:
  - `push` — adds an element to the top
  - `pop` — removes the most recently added element

### Stack Usage

- Browser history tracking
- Undo operation when typing
- Expression conversions
- Call stack in the JavaScript runtime

### Stack Big-O

| Operation            | Complexity |
| -------------------- | ---------- |
| `push`               | O(1)       |
| `pop`                | O(1)       |
| `peek`               | O(1)       |
| `isEmpty`            | O(1)       |
| `size`               | O(1)       |
| `clear`              | O(1)       |
| Iterate (`for...of`) | O(n)       |

![Stack Visualization - Push & Pop](../assets/img/Stack.png)

---

## 9. Queue

- A queue is a sequential collection of elements that follows the **First In, First Out (FIFO)** principle
- The first element inserted is the first to be removed — like a queue of people
- People enter at one end (rear/tail) and leave from the other end (front/head)
- A queue is an abstract data type defined by its behavior, not a mathematical model
- Two core operations:
  - `enqueue` — adds an element to the rear/tail
  - `dequeue` — removes an element from the front/head

### Queue Usage

- Printers
- CPU task scheduling
- Callback queue in the JavaScript runtime

### Queue Implementation

| Method        | Description                                         |
| ------------- | --------------------------------------------------- |
| `enqueue(el)` | Add an element to the rear of the queue             |
| `dequeue()`   | Remove and return the element at the front          |
| `peek()`      | Return the front element without removing it        |
| `isEmpty()`   | Check if the queue is empty                         |
| `size()`      | Return the number of elements in the queue          |
| `print()`     | Visualize the elements in the queue                 |

### Queue Big-O

| Operation            | Complexity |
| -------------------- | ---------- |
| `enqueue`            | O(1)       |
| `dequeue`            | O(n)       |
| `peek`               | O(1)       |
| `isEmpty`            | O(1)       |
| `size`               | O(1)       |
| Iterate (`for...of`) | O(n)       |

> **Note:** `dequeue` is O(n) when backed by an array because `Array.shift()` re-indexes every remaining element. A linked-list or object-based implementation achieves O(1).

![Queue Visualization - Enqueue](../assets/img/Queue1.png)

![Queue Visualization - Dequeue](../assets/img/Queue2.png)

---

## 10. Circular Queue

- A circular queue is a linear data structure that follows the **First In, First Out (FIFO)** principle, but the last position is connected back to the first position to form a circle
- Also referred to as a **circular buffer** or **ring buffer**
- Uses a fixed block of memory — empty slots created by dequeue operations are reused
- When working with queues of a fixed maximum size, a circular queue is the preferred implementation
- Two core operations:
  - `enqueue` — adds an element to the rear/tail
  - `dequeue` — removes an element from the front/head

### Circular Queue Usage

- Clocks
- Streaming data buffers
- Traffic light scheduling

### Circular Queue Implementation

| Method        | Description                                              |
| ------------- | -------------------------------------------------------- |
| `enqueue(el)` | Add an element to the rear of the queue                  |
| `dequeue()`   | Remove and return the element at the front               |
| `peek()`      | Return the front element without removing it             |
| `isFull()`    | Check if the queue has reached capacity                  |
| `isEmpty()`   | Check if the queue is empty                              |
| `size()`      | Return the number of elements currently in the queue     |
| `print()`     | Visualize the elements in the queue (front → rear)       |

### Circular Queue Big-O

| Operation            | Complexity |
| -------------------- | ---------- |
| `enqueue`            | O(1)       |
| `dequeue`            | O(1)       |
| `peek`               | O(1)       |
| `isFull`             | O(1)       |
| `isEmpty`            | O(1)       |
| `size`               | O(1)       |
| Iterate (`for...of`) | O(n)       |

> **Note:** All core operations are O(1) because the circular index trick (`(index + 1) % capacity`) eliminates the need to shift elements, unlike a plain array-backed queue.

![Circular Queue Visualization - Enqueue](../assets/img/circular_queue-1.png)

![Circular Queue Visualization - Dequeue](../assets/img/circular_queue-2.png)

---

## 11. Singly Linked List

- A linked list is a linear data structure that consists of a series of connected nodes
- Each node holds a **value** and a **pointer** (`next`) to the next node in the sequence
- Elements can be inserted or removed without reallocating or reorganizing the rest of the structure — unlike an array, nothing needs to shift
- Random access isn't possible; reaching a given element means walking the list from the head, so access is O(n)

![Linked List Overview](<../assets/img/linked list/singly-linked-list-overview.png>)

![Linked List - Node](<../assets/img/linked list/singly-linked-list-node.png>)

### Core Operations

- **Insertion** — add an element at the beginning, end, or a given index
- **Deletion** — remove an item by its index or by its value
- **Search** — find an element given its value

### Traversal (Print)

Walk the list from `head` to `null`, one `next` pointer at a time.

![Linked List - Print](<../assets/img/linked list/singly-linked-list-print.png>)

### Prepend

Point the new node's `next` at the current head, then make the new node the head. O(1) — no traversal needed.

![Linked List - Prepend (existing list)](<../assets/img/linked list/singly-linked-list-prepend.png>)

### Append

Walk to the last node (the one whose `next` is `null`) and link it to the new node. Without a tail reference this costs O(n); see [Optimization: Tracking a Tail Pointer](#optimization-tracking-a-tail-pointer) below for the O(1) version.

### Insert at a Given Index

Walk to the node just before the target index, then splice the new node in between it and its old `next`.

![Linked List - Insert (Index > 0)](<../assets/img/linked list/singly-linked-list-insert.png>)

### Remove

**By value:**

![Linked List - Remove (value in head node, single-node list)](<../assets/img/linked list/singly-linked-list-remove-value-head-only-node.png>)

![Linked List - Remove (value in head node)](<../assets/img/linked list/singly-linked-list-remove-value-head.png>)

![Linked List - Remove (value in node after head)](<../assets/img/linked list/singly-linked-list-remove-value-after-head.png>)

**By index:**

![Linked List - Remove (index = 0, single-node list)](<../assets/img/linked list/singly-linked-list-remove-index-0-only-node.png>)

![Linked List - Remove (index = 0)](<../assets/img/linked list/singly-linked-list-remove-index-0.png>)

![Linked List - Remove (index > 0)](<../assets/img/linked list/singly-linked-list-remove-index-gt-0.png>)

### Search

Walk the list comparing each node's value until a match is found or `null` is reached.

![Linked List - Find by value](<../assets/img/linked list/singly-linked-list-search.png>)

### Reverse

Re-point every node's `next` back at the node before it, tracking `prev`/`curr`/`next` pointers as you go, then make the old tail the new head.

![Linked List - Reverse (overview)](<../assets/img/linked list/singly-linked-list-reverse-overview.png>)

![Linked List - Reverse (step by step)](<../assets/img/linked list/singly-linked-list-reverse-steps.png>)

### Using a Linked List as a Stack or Queue

A linked list is the natural backing structure for both a stack and a queue — `prepend`/`removeFrom(0)` give a stack O(1) push/pop at the head, and tracking a tail reference gives a queue O(1) enqueue at the tail alongside O(1) dequeue at the head.

![Linked List - Stack Push](<../assets/img/linked list/singly-linked-list-stack-push.png>)

![Linked List - Queue Dequeue](<../assets/img/linked list/singly-linked-list-queue-dequeue.png>)

### Optimization: Tracking a Tail Pointer

Keeping a `tail` reference alongside `head` turns `append` (and removing the last node) from an O(n) walk into an O(1) pointer update — at the cost of an extra field to keep in sync on every insertion and removal.

![Linked List With Tail - Empty](<../assets/img/linked list/singly-linked-list-tail-empty.png>)

![Linked List With Tail - Insert first node](<../assets/img/linked list/singly-linked-list-tail-insert-first-node.png>)

![Linked List With Tail - Prepend](<../assets/img/linked list/singly-linked-list-tail-prepend.png>)

![Linked List With Tail - Append](<../assets/img/linked list/singly-linked-list-tail-append.png>)

![Linked List With Tail - Delete first node](<../assets/img/linked list/singly-linked-list-tail-delete-first-node.png>)

![Linked List With Tail - Delete only node](<../assets/img/linked list/singly-linked-list-tail-delete-only-node.png>)

![Linked List With Tail - Delete last node](<../assets/img/linked list/singly-linked-list-tail-delete-last-node.png>)

### Singly Linked List Big-O (No Tail Reference)

| Operation | Complexity |
| --- | --- |
| Access by index | O(n) |
| Search for value | O(n) |
| Prepend (`insertAt(0)`) | O(1) |
| Append | O(n) |
| Insert at index | O(n) |
| Remove from head | O(1) |
| Remove by value / index | O(n) |
| Reverse | O(n) |
| Iterate (`for...of`) | O(n) |

> **Note:** Tracking a `tail` reference brings `append` and "remove the last node" down to O(1), since there's no longer a need to walk the whole list to find the last node.

### Linked List Usage

- Every application of a stack or a queue is also an application of a linked list, since both can be implemented on top of one
- Image viewers (each photo links to the next/previous)

---

## 12. Doubly Linked List

- A doubly linked list is the same idea as a singly linked list, except each node also holds a `prev` pointer back to the previous node
- The extra backward link allows traversal in **both directions** and lets a node be removed in O(1) once you're holding it, without needing to walk from the head to find its predecessor
- A `tail` reference is typically kept alongside `head`, making append and "remove from the end" O(1) as well

![Doubly Linked List - Prepend](<../assets/img/linked list/doubly-linked-list-prepend.png>)

![Doubly Linked List - Append](<../assets/img/linked list/doubly-linked-list-append.png>)

![Doubly Linked List - Remove from front](<../assets/img/linked list/doubly-linked-list-remove-from-front.png>)

### Singly vs Doubly Linked List

| Concern | Singly Linked List | Doubly Linked List |
| --- | --- | --- |
| Links per node | 1 (`next`) | 2 (`next` and `prev`) |
| Memory per node | Lower | Higher (extra pointer) |
| Traversal direction | Forward only | Forward and backward |
| Remove tail (with a node ref) | O(n) — must find the `prev` | O(1) — `prev` is already known |
| Remove head | O(1) | O(1) |

### Doubly Linked List Big-O

| Operation | Complexity |
| --- | --- |
| Access by index | O(n) |
| Search for value | O(n) |
| Prepend | O(1) |
| Append (with `tail`) | O(1) |
| Insert at index | O(n) |
| Remove from head | O(1) |
| Remove from tail | O(1) |
| Remove by value / index | O(n) |
| Reverse | O(n) |
| Iterate (`for...of`) | O(n) |

### Doubly Linked List Usage

- Browser history (back **and** forward navigation)
- Undo/redo stacks that need to move in either direction
- LRU cache implementations, where a node needs to jump to the front or be evicted from the back in O(1)
