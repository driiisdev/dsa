// Combinations

/**
**Definition:**
A combination is a selection of k elements from a set of n elements where order does NOT
matter -- [1, 2] and [2, 1] count as the same combination.

The number of k-sized combinations from n elements is C(n, k) = n! / (k! x (n - k)!).

**Example:** combinations([1, 2, 3, 4], 2)
- C(4, 2) = 6 combinations:
  [1,2], [1,3], [1,4], [2,3], [2,4], [3,4]

**Example:** combinations([1, 2, 3], 3) = [[1, 2, 3]]
- Only one way to choose all 3 elements out of 3

**Common Approach: Backtracking**
- Walk the array once; at each index either include the element in the current selection
  or skip it, moving `start` forward so earlier elements are never revisited (which is
  what keeps [1,2] from also being produced as [2,1])
- Once the current selection reaches size k, record a copy of it
- Time: O(k x C(n, k)) -- C(n, k) combinations, each taking O(k) to copy into the result
- Space: O(k) recursion depth, plus O(k x C(n, k)) to store every combination

**Interview Tip:**
- Combinations vs permutations is the classic point of confusion -- combinations don't
  care about order, permutations do.
- Handle edge cases: k = 0 (one combination: the empty selection), k > arr.length (no
  combinations possible), k = arr.length (exactly one combination: the whole array).
*/

class Combinations {
  constructor() {
    this.result = [];
  }

  /** Backtracking approach: build up selections of size k, one index at a time */
  generate(arr, k) {
    this.result = [];
    if (k < 0 || k > arr.length) {
      return this.result;
    }
    this._backtrack(arr, k, 0, []);
    return this.result;
  }

  _backtrack(arr, k, start, current) {
    if (current.length === k) {
      this.result.push([...current]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      current.push(arr[i]);
      this._backtrack(arr, k, i + 1, current);
      current.pop(); // backtrack: remove the element before trying the next i
    }
  }
}

/** Usage */
const combinations = new Combinations();

console.log(combinations.generate([1, 2, 3, 4], 2));
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

console.log(combinations.generate([1, 2, 3, 4], 2).length); // Output: 6 (C(4,2))

console.log(combinations.generate([1, 2, 3], 3)); // Output: [[1, 2, 3]]
console.log(combinations.generate([1, 2, 3], 0)); // Output: [[]] (one combination: the empty selection)
console.log(combinations.generate([1, 2, 3], 5)); // Output: [] (k > arr.length, impossible)
console.log(combinations.generate([], 0)); // Output: [[]]
