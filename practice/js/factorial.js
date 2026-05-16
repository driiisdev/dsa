// Factorial

/**
**Definition:**
The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
It is denoted by n!.

Example:
5! = 5 × 4 × 3 × 2 × 1 = 120

Formula:
n! = n × (n - 1)! for n > 0
0! = 1

**Key Characteristics:**
- Factorial grows very rapidly as n increases.
- Defined only for non-negative integers.
- Commonly used in combinatorics, probability, algebra, and calculus.
- Frequently used for permutations and combinations.

**Example:** factorial(5) = 120
- factorial(0)=1
- factorial(1)=1
- factorial(2)=2
- factorial(3)=6
- factorial(4)=24
- factorial(5)=120

**Common Approaches:**

1. **Recursive Approach**
  - Simple and natural implementation
  - Time: O(n)
  - Space: O(n) due to recursive call stack

2. **Iterative Approach**
  - Uses loops instead of recursion
  - Time: O(n)
  - Space: O(1)
  - Preferred for large values of n

3. **Memoization / Dynamic Programming**
  - Stores previously calculated factorial values
  - Useful when factorials are calculated repeatedly
  - Avoids unnecessary recalculations

**Interview Tip:**
- Clarify whether they want:
  - the factorial of a single number, or
  - a sequence/list of factorials up to n
- Discuss time and space complexity.
- Consider edge cases such as:
  - negative numbers
  - non-integer input
  - very large values causing overflow
*/

class Factorial {

  constructor() {
    // Initialization if needed
    this.n = null;
    this.result = null;
  }

  /** Recursive Approach */
  recursive(n) {
    // reset values for each call
    this.n = n;
    this.result = null;

    // helper recursive function
    const factRec = (num) => {
      if (num === 0 || num === 1) return 1;
      return num * factRec(num - 1);
    }

    this.result = factRec(n);
    return this.result;
  }

  /** Iterative Approach */
  iterative(n) {
    // reset values for each call
    this.n = n;
    this.result = 1;

    // helper iterative function
    const factIter = (num) => {
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      return result;
    }

    this.result = factIter(n);
    return this.result;
  }


  /** Memoization Approach */
  memoization(n, memo = {}) {
    // reset values for each call
    this.n = n;
    this.result = null; 

    // helper memoization function
    const factMemo = (num) => {
      if (num in memo) return memo[num];
      if (num === 0 || num === 1) return 1;
      memo[num] = num * factMemo(num - 1);
      return memo[num];
    };

    this.result = factMemo(n);
    return this.result;
  }
}

/** Usage */
var fact = new Factorial();

console.log(fact.recursive(5));

/** OR */

// var funCall = fact.iterative(5);
// console.log(funCall);

/** OR */

// var funCall = fact["memoization"](5);
// console.log(funCall);

