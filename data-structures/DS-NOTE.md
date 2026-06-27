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
