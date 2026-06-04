# Algorithms

## Topics

1. [Algorithm](#1-algorithm)
2. [Measuring Performance](#2-measuring-performance)
3. [Time & Space Complexity](#3-time--space-complexity)
4. [Big O Notation](#4-big-o-notation)
5. [Math Algorithms](#5-math-algorithms)
6. [Sort](#6-sort)
7. [Search](#7-search)
8. [Misc. Algorithms and Problem Solving](#8-misc-algorithms-and-problem-solving)

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

### How to Represent Complexity?

**Asymptotic Notations** - mathematical tools to represent time and space complexity:

1. **Big-O Notation** - Worst case complexity
2. **Omega Notation** - Best case complexity
3. **Theta Notation** - Average case complexity

---

## 4. Big-O Notation

The worst case complexity of an algorithm is represented using the Big-O notation. Big-O notation describes the complexity of an algorithm using algebraic terms.

### Important Characteristics

- It is expressed in terms of the input
- It focuses on the bigger picture without getting caught up in the minute details

### Example 1: Loop Version

```javascript
function summation(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum += i
  }
  return sum;
}
```

**Analysis:**

**Step 1:** Count the number of times a statement executes based on the input size
- `let sum = 0` runs once → 1
- `for loop` runs as a function of its condition 'n' (e.g. if 'n' = 3) runs thrice → 3
- `return sum` runs once → 1
- Total: n + 2 (since n is 3, and the reason why the loop runs thrice)

**Step 2:** Focus on the bigger picture without getting caught up in the minute details
- "n + 2" - n is the bigger picture here. If n is 100, it'll be "100 + 2", hence 'n' is the bigger picture.

**Step 3:** Final review
- Time complexity: **O(n) - Linear**
- As the input doubles, time roughly doubles.

---

### Example 2: Formula Version

```javascript
function summation(n){
  return((n*(n+1))/2);
}
```

**Analysis:**

**Step 1:** Count the number of times a statement executes based on the input size
- `return((n*(n+1))/2);` runs once → 1

**Step 2:** Focus on the bigger picture without getting caught up in the minute details
- Regardless of how large 'n' gets, only one statement gets executed. The input size has no effect on the number of steps.

**Step 3:** Final review
- Time complexity: **O(1) - Constant**
- No matter the input size, time stays the same.

---

### Example 3: Two Nested Loops

```javascript
for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    // statement of the code to be executed
  }
}
```

**Analysis:**

Time complexity: The loop is nested twice, hence input runs twice → **O(n²)** - Quadratic

Formula: ~3n² + 5n + 1, where the less dominant terms are "5n + 1"

---

### Example 4: Three Nested Loops

```javascript
for (i = 1; i <= n; i++) {
  for (j = 1; j <= i; j++) {
    for (k = 1; k <= j; k++) {
      // statement of the code to be executed
    }
  }
}
```

**Analysis:**

Time complexity: The loop is nested thrice, hence input runs thrice → **O(n³)** - Cubic

Formula: ~n³ + 3n² + 5n + 1, where the less dominant terms are "3n² + 5n + 1"

---

### Example 5: Logarithmic Algorithm

```javascript
function logExample(n){
  let i = 1;

  while(i <= n){
    i = i * 2;
  }
}
```

**Analysis:**

**Step 1:** Count the number of times a statement executes based on the input size

The key statement is: `i = i * 2;`

Let's track how i grows:
- 1st run → i = 2
- 2nd run → i = 4
- 3rd run → i = 8
- 4th run → i = 16

After k runs: i = 2^k

Loop stops when: 2^k >= n

**Step 2:** Focus on the bigger picture

Solve: 2^k >= n

Take log on both sides: k ≈ log₂(n)

So the loop runs about log(n) times. As n grows, the number of steps increases very slowly because we keep doubling.

**Step 3:** Final review

Time complexity: **O(log n) - Logarithmic**

The input size is reduced (or grows) exponentially each step, so the number of operations increases slowly as n increases.

---

### Space Complexity Reference

- **O(1) - Constant:** Algorithm doesn't need extra memory, or memory needed doesn't depend on input size
- **O(n) - Linear:** Extra space needed grows as input size grows
- **O(log n) - Logarithmic:** Extra space needed grows or reduces exponentially with input size

> **Note:** Quadratic/cubic space complexity should be avoided when possible.

---

## 5. Points to Note

- Multiple algorithms exist for the same problem, and there is no one right solution
- Different algorithms work well under different constraints
- The same algorithm with the same programming language can be implemented in different ways
- When writing programs at work, don't lose sight of the bigger picture
- Write code that is simple to read and maintain rather than clever code

---

## Big-O Quick Reference

| Scenario | Time Complexity |
|----------|-----------------|
| Calculation not dependent on input size | O(1) - Constant |
| Single loop | O(n) - Linear |
| Nested loops (2 loops) | O(n²) - Quadratic |
| Nested loops (3 loops) | O(n³) - Cubic |
| Input size increases/reduces by half | O(log n) - Logarithmic |

---

## Time Complexity: Objects

An object is a collection of key-value pairs.

| Operation | Time Complexity |
|-----------|-----------------|
| insert | O(1) |
| remove | O(1) |
| access | O(1) |
| search | O(n) |
| object.keys() | O(n) |
| object.values() | O(n) |
| object.entries() | O(n) |

---

## Time Complexity: Arrays

An array is an ordered collection of values.

| Operation | Time Complexity |
|-----------|-----------------|
| insert/remove at end | O(1) |
| insert/remove at beginning | O(n) |
| access | O(1) |
| search | O(n) |
| push/pop | O(1) |
| shift/unshift/concat/slice/splice | O(n) |
| forEach/map/filter/reduce | O(n) |

---

## 6. Math Algorithms

### Related Topics

- Fibonacci sequence
- Factorial of a number
- Prime number
- Power of two
- Recursion
- Fibonacci sequence with recursion
- Factorial of a number with recursion

---

### Fibonacci Sequence

**Problem:** Given a number 'n', find the first 'n' elements of the Fibonacci sequence.

**Definition:** The Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones. The first two numbers in the sequence are 0 and 1.

**Examples:**
- fibonacci(2) = [0, 1]
- fibonacci(3) = [0, 1, 1]
- fibonacci(7) = [0, 1, 1, 2, 3, 5, 8]

---

### Factorial of a number

**Problem:** Given an integer 'n', find the factorial of that integer.

** Definition:** The Factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'. The factorial of zero is 1.

**Examples**
- factorial(4) = 4x3x2x1 = 24
- factorial(5) = 5x4x3x2x1 = 120

---

### Prime number

**Problem:** Given a natural number 'n', determine if the number is prime or not.

**Definition:** A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

**Example**
- isPrime(5) = true(1 x 5 or 5 x 1)
- isPrime(4) = false(1 x 4 or 2 x 2 or 4 x 1)

**Optimized Primality Test**
- Integers larger than the square root do not need to be checked because, whenever 'n=a*b', one of the two factors 'a' and 'b' is less than or equal to the square root of 'n'

---

### Power of Two

**Problem:** Given a positive integer 'n', determine if the number is a Power of 2 or not

**Definition:** An integer is a power of two if there exists an integer 'x' such that 'n'===2^x

**Example**
- isPowerOfTwo(1) = true(2^0)
- isPowerOfTwo(2) = true(2^1)
- isPowerOfTwo(5) = false

---

### Recursion

**What:** A problem solving technique where the solution depends on solutions to smaller instances of the same problem. Simply put — a function calls itself.

**Why:** Great for simplifying solutions and breaking problems into smaller versions.

**Points to note:**
- Every recursive solution needs a base case — a condition to terminate the recursion.
- Recursion may simplify a problem but doesn't always mean a faster solution; a recursive approach can be far worse than an iterative one.
- Recursion is not the most straightforward topic — don't give up if you struggle with it.
