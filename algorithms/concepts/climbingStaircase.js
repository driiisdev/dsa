// Climbing Staircase

/**
**Definition**
The Climbing Staircase problem is a classic algorithmic problem that asks for the number of distinct ways to climb a staircase with n steps, given that you can climb either 1 or 2 steps at a time.

**Key Characteristics**
- The problem can be solved using dynamic programming, recursion, or iterative approaches.
- The number of ways to climb n steps can be expressed as the sum of the ways to climb (n-1) steps and (n-2) steps, which resembles the Fibonacci sequence.
- The base cases are:
  - There is 1 way to climb 0 steps (do nothing).
  - There is 1 way to climb 1 step (take one step).
  - There are 2 ways to climb 2 steps (1+1 or 2).

**Common Approaches**
1. **Recursive Approach:**
  - Define a recursive function that returns the number of ways to climb n steps.
  - Time: O(2^n) due to repeated calculations.
  - Space: O(n) due to the call stack.

2. **Dynamic Programming Approach:**
  - Use an array to store the number of ways to climb to each step up to n.
  - Time: O(n) since each step is calculated once.
  - Space: O(n) for the array.

3. **Iterative Approach with Constant Space:**
  - Use two variables to keep track of the last two values instead of an array.
  - Time: O(n) since each step is calculated once.
  - Space: O(1) since only a constant amount of space is used.

**Example**
- For n = 5, the number of ways to climb the staircase is 8:
  - 1+1+1+1+1
  - 1+1+1+2
  - 1+1+2+1
  - 1+2+1+1
  - 2+1+1+1
  - 1+2+2
  - 2+1+2
  - 2+2+1

**Interview Tip**
- Clarify the input constraints (e.g., can n be negative?).
- Discuss the time and space complexity of your solution.
- Handle edge cases:
  - If n is 0, return 1 (there's one way to climb zero steps).
  - If n is negative, return 0 (there's no way to climb a negative number of steps).

 */


class ClimbingStaircase {
  constructor() {
    // Initialization if needed
    this.memo = {};
  }

  /** Recursive Approach with Memoization */
  recursive(n) {
    if (n in this.memo) { 
      return this.memo[n];
    }
    if (n < 0) {
      return 0;
    }
    if (n === 0) {
      return 1;
    }
    this.memo[n] = this.recursive(n - 1) + this.recursive(n - 2);
    return this.memo[n];
  }

  /** Dynamic Programming Approach */
  dynamic(n) {
    if (n < 0) {
      return 0;
    }
    if (n === 0) {
      return 1;
    }
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
  }

  /** Iterative Approach with Constant Space */
  iterative(n) {
    if (n < 0) {
      return 0;
    }
    if (n === 0) {
      return 1;
    }
    let prev2 = 1;
    let prev1 = 1;
    for (let i = 2; i <= n; i++) {
      let current = prev1 + prev2;
      prev2 = prev1;
      prev1 = current;
    }
    return prev1;
  }

}

/** Usage  */
const climbingStaircase = new ClimbingStaircase();
const n = 5;
console.log(climbingStaircase.recursive(n));
console.log(climbingStaircase.dynamic(n));
console.log(climbingStaircase.iterative(n));
