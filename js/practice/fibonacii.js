// Fibonacci Sequence - Reference Note

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
  - Space: O(n) - for storage, or O(log n) for optimized

**Optimization Tip:**
Use two variables to track only the last two values instead of an array—saves space while maintaining O(n) time.

**Example:** fib(5) = 5
- fib(0)=0, fib(1)=1, fib(2)=1, fib(3)=2, fib(4)=3, fib(5)=5
 */


var fib = {
  // Recursive Approach (slow, not recommended for large "n" due to inefficiency, and it can lead to stack overflow for large "n") 
  fibRec: function(n) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    return this.fibRec(n - 1) + this.fibRec(n - 2);
  },


  // Iterative Approach (efficient, recommended for large "n")
  fibIter : function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1; 
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
  },

};

// Usage
// console.log(fib.fibRec(5)); // Output: 5
// var funCall = fib.fibRec(5); //or
var funCall = fib["fibRec"](5);
// var funCallIter = fib.fibIter(5);
console.log(funCallIter); // Output: 5
