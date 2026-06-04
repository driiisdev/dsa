// Recursion

/**
 * Recursion is when a function calls itself to solve a smaller version of the same problem.
 * Every recursive solution must have a base case to stop the calls.
 *
 * --- Where recursion was used ---
 *
 * fibonacci.js → Fibonacci.recursive(n)
 *   - fibRec calls itself: fibRec(num - 1) + fibRec(num - 2)
 *   - Base cases: num === 0 → 0, num === 1 → 1
 *   - Time: O(2^n) | Space: O(n) call stack
 *   - Downside: recalculates the same values repeatedly (e.g. fib(3) is recomputed many times for fib(7))
 *
 * factorial.js → Factorial.recursive(n)
 *   - factRec calls itself: num * factRec(num - 1)
 *   - Base case: num === 0 || num === 1 → 1
 *   - Time: O(n) | Space: O(n) call stack
 *
 * Both also offer iterative and memoization alternatives that are more efficient in practice.
 */


class Recursion {

  constructor(n) {
    // Initialization if needed
    this.n = n;
  }

  /** Fibonacci — each call branches into two smaller calls until it hits a base case */
  fibonacci(n) {
    if (n === 0) return 0;  // base case
    if (n === 1) return 1;  // base case
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  fibSequence(n) {
    const seq = [];
    for (let i = 0; i <= n; i++) {
      seq.push(this.fibonacci(i));
    }
    return seq;
  }

  /** Factorial — each call reduces n by 1 until it hits the base case */
  factorial(n) {
    if (n === 0 || n === 1) return 1;  // base case
    return n * this.factorial(n - 1);
  }
}


/** Usage */
const rec = new Recursion();

console.log(rec.fibonacci(7));     // 13
console.log(rec.fibSequence(7));   // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(rec.factorial(5));     // 120
