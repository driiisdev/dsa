# Algorithms

## Topics

1. [Algorithm](#1-algorithm)
2. [Measuring Performance](#2-measuring-performance)
3. [Time & Space Complexity](#3-time--space-complexity)
4. [Big-O Notation](#4-big-o-notation)
5. [Points to Note](#5-points-to-note)
6. [Big-O of Built-in Data Structures](#6-big-o-of-built-in-data-structures)
7. [Math Algorithms](#7-math-algorithms)
8. Sort
9. Search
10. Misc. Algorithms and Problem Solving

---

## 1. Algorithm

An algorithm is a set of well-defined instructions to solve a particular problem.

### Characteristics

- Well defined inputs and outputs
- Each step should be clear and unambiguous
- Language independent

### Why Learn Algorithms?

- As a developer, you will come across problems that need to be solved
- Learning algorithms translates to learning different techniques to efficiently solve those problems
- One problem can be solved in many ways using different algorithms
- Every algorithm comes with its own tradeoffs when it comes to performance

---

## 2. Measuring Performance

The absolute running time of an algorithm cannot be predicted, since it depends on a number of factors:

- Programming language used to implement the algorithm
- The computer the program runs on
- Other programs running at the same time
- Quality of the operating system

> **Note:** The performance of an algorithm is evaluated *in terms of its input size*.

---

## 3. Time & Space Complexity

- **Time complexity** — amount of time taken by an algorithm to run, as a function of input size
- **Space complexity** — amount of memory taken by an algorithm to run, as a function of input size

By evaluating against the input size, the analysis is not only machine independent but the comparison is also more appropriate.

There is no one solution that works every single time. It is always good to know multiple ways to solve the problem and use the best solution given your constraints:

- If your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity.
- If you have very little memory to work with, you should pick a solution that is relatively slower but needs less space.

### How to Represent Complexity — Asymptotic Notations

Mathematical tools to represent time and space complexity:

| Notation | Name           | Case                              |
| -------- | -------------- | --------------------------------- |
| **O**    | Big-O Notation | Worst case *(most commonly used)* |
| **Ω**    | Omega Notation | Best case                         |
| **Θ**    | Theta Notation | Average case                      |

---

## 4. Big-O Notation

The worst case complexity of an algorithm is represented using the Big-O notation. It describes the complexity of an algorithm using algebraic terms.

**Two important characteristics:**

- It is expressed in terms of the input
- It focuses on the bigger picture without getting caught up in minute details

---

### Example 1 — Loop version: `O(n)` Linear

```js
function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
```

**Analysis:**

| Statement       | Executions |
| --------------- | ---------- |
| `let sum = 0`   | 1          |
| `for` loop body | n          |
| `return sum`    | 1          |

Total = `n + 2`. Dropping the constant `+ 2`, the bigger picture is `n`.

**Time complexity: `O(n)` — Linear**
As the input doubles, time roughly doubles.

---

### Example 2 — Formula version: `O(1)` Constant

```js
function summation(n) {
  return (n * (n + 1)) / 2;
}
```

**Analysis:**

| Statement                  | Executions |
| -------------------------- | ---------- |
| `return (n * (n + 1)) / 2` | 1          |

Regardless of how large `n` gets, only one statement executes. The input size has no effect on the number of steps.

**Time complexity: `O(1)` — Constant**
No matter the input size, time stays the same.

---

### Example 3 — Two Nested Loops: `O(n²)` Quadratic

```js
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    // statement
  }
}
```

**Analysis:**

The loop is nested twice, so the input iterates `n²` times. The full formula approximates to `3n² + 5n + 1`, where `5n + 1` are the less dominant terms.

**Time complexity: `O(n²)` — Quadratic**

---

### Example 4 — Three Nested Loops: `O(n³)` Cubic

```js
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    for (let k = 1; k <= j; k++) {
      // statement
    }
  }
}
```

**Analysis:**

The loop is nested three times, so the input iterates `n³` times. The full formula approximates to `n³ + 3n² + 5n + 1`, where `3n² + 5n + 1` are the less dominant terms.

**Time complexity: `O(n³)` — Cubic**

---

### Example 5 — Logarithmic: `O(log n)`

```js
function logExample(n) {
  let i = 1;
  while (i <= n) {
    i = i * 2;
  }
}
```

**Analysis:**

The key statement is `i = i * 2`. Tracking how `i` grows:

| Run | Value of `i` |
| --- | ------------ |
| 1st | 2            |
| 2nd | 4            |
| 3rd | 8            |
| 4th | 16           |
| ... | ...          |

After `k` runs: `i = 2^k`. The loop stops when `2^k >= n`.

Solving: `2^k >= n` → taking log of both sides → `k ≈ log₂(n)`

So the loop runs about `log(n)` times. As `n` grows, the number of steps increases very slowly because `i` keeps doubling.

**Time complexity: `O(log n)` — Logarithmic**
The input size is reduced exponentially each step, so the number of operations increases slowly as `n` increases.

---

### Space Complexity

| Notation   | Name        | Description                                                                       |
| ---------- | ----------- | --------------------------------------------------------------------------------- |
| `O(1)`     | Constant    | Algorithm needs no extra memory, or memory needed does not depend on input size   |
| `O(n)`     | Linear      | Extra space needed grows as input size grows                                      |
| `O(log n)` | Logarithmic | Extra space grows or reduces as input size grows or reduces exponentially         |

> **Note:** Quadratic `O(n²)` and cubic `O(n³)` space complexity should be avoided when possible.

---

## 5. Points to Note

- Multiple algorithms exist for the same problem — there is no one right solution. Different algorithms work well under different constraints.
- The same algorithm with the same programming language can be implemented in different ways.
- When writing programs at work, don't lose sight of the bigger picture. Rather than writing clever code, write code that is simple to read and maintain.

---

## 6. Big-O of Built-in Data Structures

### Object

An object is a collection of key-value pairs.

| Operation          | Complexity |
| ------------------ | ---------- |
| Insert             | `O(1)`     |
| Remove             | `O(1)`     |
| Access             | `O(1)`     |
| Search             | `O(n)`     |
| `Object.keys()`    | `O(n)`     |
| `Object.values()`  | `O(n)`     |
| `Object.entries()` | `O(n)`     |

### Array

An array is an ordered collection of values.

| Operation                                          | Complexity |
| -------------------------------------------------- | ---------- |
| Insert / Remove at end (`push` / `pop`)            | `O(1)`     |
| Insert / Remove at beginning (`shift` / `unshift`) | `O(n)`     |
| Access                                             | `O(1)`     |
| Search                                             | `O(n)`     |
| `concat` / `slice` / `splice`                      | `O(n)`     |
| `forEach` / `map` / `filter` / `reduce`            | `O(n)`     |

---

## 7. Math Algorithms

### Related Problems

- Fibonacci Sequence
- Factorial of a Number
- Prime Number
- Power of Two
- Recursion
- Fibonacci Sequence with Recursion
- Factorial of a Number with Recursion
