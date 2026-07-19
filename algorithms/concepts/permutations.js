// Permutations

/**
**Definition:**
A permutation of a set of elements is an arrangement of those elements into a particular
order. Order matters -- [1, 2, 3] and [3, 2, 1] are different permutations of the same set.

A set of n distinct elements has n! (n factorial) permutations.

**Example:** permutations([1, 2]) = [[1, 2], [2, 1]]
- 2 elements -> 2! = 2 permutations

**Example:** permutations([1, 2, 3])
- 3 elements -> 3! = 6 permutations:
  [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]

**Common Approach: Backtracking**
- Fix one element at the current position, recursively permute the rest
- Swap the current position with each remaining position in turn, recurse, then swap back
  ("backtrack") to restore the array before trying the next swap
- Time: O(n x n!) -- n! permutations, each taking O(n) to copy into the result
- Space: O(n) recursion depth, plus O(n x n!) to store every permutation

**Interview Tip:**
- Clarify whether duplicate elements should produce duplicate permutations or be deduped.
- Handle edge cases: empty array (one permutation: the empty arrangement), single element.
*/

class Permutations {
  constructor() {
    this.result = [];
  }

  /** Backtracking approach: swap elements into place, recurse, then swap back */
  generate(arr) {
    this.result = [];
    this._backtrack([...arr], 0);
    return this.result;
  }

  _backtrack(arr, start) {
    if (start === arr.length) {
      this.result.push([...arr]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      this._backtrack(arr, start + 1);
      [arr[start], arr[i]] = [arr[i], arr[start]]; // undo the swap before trying the next i
    }
  }
}

/** Usage */
const permutations = new Permutations();

console.log(permutations.generate([1, 2]));
// Output: [[1, 2], [2, 1]]

console.log(permutations.generate([1, 2, 3]));
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]

console.log(permutations.generate([1, 2, 3]).length); // Output: 6 (3! permutations)

console.log(permutations.generate([])); // Output: [[]] (one permutation: the empty arrangement)

console.log(permutations.generate([7])); // Output: [[7]]
