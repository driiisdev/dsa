// 0/1 Knapsack Problem

/**
**Definition:**
Given a set of items, each with a weight and a value, and a knapsack with a maximum
weight capacity, determine the maximum total value that can be carried without exceeding
the capacity. Each item can either be taken whole or left behind -- it cannot be split,
and each item may be used at most once (hence "0/1": 0 or 1 copies of each item).

**Example:**
- weights = [1, 3, 4, 5], values = [1, 4, 5, 7], capacity = 7
- Best choice: items with weight 3 and weight 4 (total weight 7, total value 4 + 5 = 9)
- knapsack(weights, values, 7) = 9

**Common Approaches:**

1. **Naive Recursive Approach:**
  - For each item, branch into two cases: include it, or exclude it. Take the better of
    the two branches.
  - Time: O(2^n) -- two branches per item, re-solving identical subproblems repeatedly
  - Space: O(n) recursion depth

2. **Dynamic Programming Approach (2D table):**
  - Build a table `dp[i][w]` = max value achievable using the first `i` items with
    capacity `w`
  - If the i-th item is too heavy for the remaining capacity, skip it: `dp[i][w] = dp[i-1][w]`
  - Otherwise, take the better of skipping it or including it:
    `dp[i][w] = max(dp[i-1][w], values[i-1] + dp[i-1][w - weights[i-1]])`
  - The table also lets you walk backwards afterward to reconstruct *which* items were chosen
  - Time: O(n x capacity)
  - Space: O(n x capacity)

3. **Space-Optimized DP (1D rolling array):**
  - Since `dp[i]` only ever depends on `dp[i-1]`, a single 1D array can replace the full
    2D table -- as long as the capacity loop runs **backwards** for each item, so an
    item's own contribution isn't accidentally reused within the same iteration (which
    would turn 0/1 knapsack into the "unbounded" variant, where items can repeat)
  - Time: O(n x capacity)
  - Space: O(capacity)

**Interview Tip:**
- This is the "0/1" variant (each item used 0 or 1 times). The "unbounded" knapsack
  variant allows unlimited copies of each item and iterates the capacity loop forwards
  instead of backwards.
- Handle edge cases: capacity of 0 (answer is 0), an item heavier than the whole capacity
  (never chosen), empty item list.
*/

class Knapsack {
  constructor() {
    this.memo = new Map();
  }

  /** Naive Recursive Approach (exponential, no memoization) */
  naive(weights, values, capacity, n = weights.length) {
    if (n === 0 || capacity === 0) {
      return 0;
    }

    if (weights[n - 1] > capacity) {
      return this.naive(weights, values, capacity, n - 1);
    }

    const exclude = this.naive(weights, values, capacity, n - 1);
    const include = values[n - 1] + this.naive(weights, values, capacity - weights[n - 1], n - 1);

    return Math.max(include, exclude);
  }

  /** Dynamic Programming Approach (2D table); also reconstructs the chosen items */
  dynamic(weights, values, capacity) {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= capacity; w++) {
        if (weights[i - 1] > w) {
          dp[i][w] = dp[i - 1][w];
        } else {
          dp[i][w] = Math.max(dp[i - 1][w], values[i - 1] + dp[i - 1][w - weights[i - 1]]);
        }
      }
    }

    // Walk the table backwards to figure out which items were actually chosen
    const chosenItems = [];
    let w = capacity;
    for (let i = n; i > 0; i--) {
      if (dp[i][w] !== dp[i - 1][w]) {
        chosenItems.push(i - 1); // index into weights/values of the chosen item
        w -= weights[i - 1];
      }
    }
    chosenItems.reverse();

    return { maxValue: dp[n][capacity], chosenItems };
  }

  /** Space-Optimized DP Approach (1D rolling array), max value only */
  optimized(weights, values, capacity) {
    const n = weights.length;
    const dp = new Array(capacity + 1).fill(0);

    for (let i = 0; i < n; i++) {
      for (let w = capacity; w >= weights[i]; w--) {
        // Capacity loop runs backwards so item i isn't reused within its own pass
        dp[w] = Math.max(dp[w], values[i] + dp[w - weights[i]]);
      }
    }

    return dp[capacity];
  }
}

/** Usage */
const knapsack = new Knapsack();
const weights = [1, 3, 4, 5];
const values = [1, 4, 5, 7];
const capacity = 7;

console.log(knapsack.naive(weights, values, capacity)); // Output: 9
console.log(knapsack.optimized(weights, values, capacity)); // Output: 9

const { maxValue, chosenItems } = knapsack.dynamic(weights, values, capacity);
console.log(maxValue); // Output: 9
console.log(chosenItems); // Output: [1, 2] (indices into weights/values: weight 3 + weight 4)
console.log(chosenItems.map((i) => weights[i])); // Output: [3, 4]
console.log(chosenItems.map((i) => values[i])); // Output: [4, 5]

console.log(knapsack.optimized(weights, values, 0)); // Output: 0 (no capacity)
console.log(knapsack.optimized([10], [100], 5)); // Output: 0 (item too heavy to ever fit)
