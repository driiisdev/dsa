// Fibonacci Sequence

/**
**Definition:**
A sequence where each number is the sum of the two preceding ones.
- Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
- Formula: F(n) = F(n-1) + F(n-2)
- Base cases: F(0) = 0, F(1) = 1

**Key Characteristics:**
- Each term builds on the previous two
- Naturally recursive but naive recursion is inefficient
- Found in nature, mathematics, and computer science

**Common Approaches:**

1. **Recursive (Naive)**
  - Simple but recalculates same values multiple times
  - Time: O(2^n) - exponential, very slow
  - Space: O(n) - call stack depth

2. **Iterative (Loop)**
  - Start with F(0) and F(1), calculate forward
  - Time: O(n) - linear, efficient
  - Space: O(1) - only need last two values

3. **Dynamic Programming (Memoization)**
  - Store previously calculated values
  - Avoids recalculating: fib(5) doesn't recalculate fib(3) twice
  - Time: O(n)
  - Space: O(n) - cache + recursive call stack

**Optimization Tip:**
Use two variables to track only the last two values instead of an array—saves space while maintaining O(n) time.

**Example:** fib(5) = 5
- fib(0)=0, fib(1)=1, fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5, fib(6)=8, fib(7)=13

**Interview Tip:**
- when asked to implement Fibonacci, clarify if they want the nth Fibonacci number, the full sequence up to n, or the sum of the full sequence.
- Always discuss the time and space complexity of your solution, and consider edge cases (e.g., negative input, non-integer input).
 */



class Fibonacci {

  constructor() {
    // Initialization if needed
    this.nth = null;
    this.seq = [];
    this.total = null;
  }

  /** Recursive Approach (slow, not recommended for large "n" due to inefficiency, and it can lead to stack overflow for large "n") */
  recursive(n) {
    // reset values for each call
    this.nth = 0;
    this.seq = [];
    this.total = 0;

    // helper recursive function
    const fibRec = (num) => {
      if (num === 0) return 0;
      if (num === 1) return 1;

      return fibRec(num - 1) + fibRec(num - 2);
    }

    //build the sequence up to n
    for (let i = 0; i <= n; i++) {
      this.value = fibRec(i);

      //build the sequence array
      this.seq.push(this.value);
      //build the total sum of the sequence
      this.total += this.value;
    }

    // nth Fibonacci number
    this.nth = fibRec(n);

    // return this.nth; // return the nth Fibonacci number
    // return this.seq; // return the full sequence up to n
    // return this.total; // return the sum of the full sequence up to n
    /** OR */
    return {
      nth: this.nth,
      seq: this.seq,
      total: this.total
    };
  }


  /** Iterative Approach (efficient, recommended for large "n") */
  iterative(n) {
    // reset values for each call
    this.nth = 0;
    this.seq = [];
    this.total = 0;

    //helper iterative function
    const fibIter = (num) => {
      if (num === 0) return 0;
      if (num === 1) return 1; 

      let a = 0, b = 1, temp;

      for (let i = 2; i <= num; i++) {
        temp = a + b;
        a = b;
        b = temp;
      }
      return b;
    }

    //build the sequence up to n
    for (let i = 0; i <= n; i++) {
      this.value = fibIter(i);

      //build the sequence array
      this.seq.push(this.value);
      //build the total sum of the sequence
      this.total += this.value;
    }

    // nth Fibonacci number
    this.nth = fibIter(n);

    // return this.nth; // return the nth Fibonacci number
    // return this.seq; // return the full sequence up to n
    // return this.total; // return the sum of the full sequence up to n
    /** OR */
    return {
      nth: this.nth,
      seq: this.seq,
      total: this.total
    };
  }

  /** Dynamic Programming (Memoization) Approach (efficient, recommended for large "n") */
  memoization(n, memo = {}) {
    // reset values for each call
    this.nth = 0;
    this.seq = [];
    this.total = 0;

    //helper memoization function
    const fibMemo = (num) => {
      if (num in memo) return memo[num];
      if (num === 0) return 0;
      if (num === 1) return 1;

      memo[num] = fibMemo(num - 1) + fibMemo(num - 2);
      return memo[num];
    }

    //build the sequence up to n
    for (let i = 0; i <= n; i++) {
      this.value = fibMemo(i);

      //build the sequence array
      this.seq.push(this.value);
      //build the total sum of the sequence
      this.total += this.value;
    }

    // nth Fibonacci number
    this.nth = fibMemo(n);
    // return this.nth; // return the nth Fibonacci number
    // return this.seq; // return the full sequence up to n
    // return this.total; // return the sum of the full sequence up to n
    /** OR */
    return {
      nth: this.nth,
      seq: this.seq,
      total: this.total
    };
  }
};

/** Usage */ 
var fib = new Fibonacci();

// console.log(fib.recursive(7));

/** OR */

// var funCall = fib.iterative(7);
// console.log(funCall);

/** OR */

// var funCall = fib["memoization"](7);
// console.log(funCall);
