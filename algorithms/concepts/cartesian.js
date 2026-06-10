// Cartesian Product

/**
**Definition:**
The Cartesian Product of two sets A and B, denoted as A × B, is the set of all ordered pairs (a, b) where a is an element of A and b is an element of B.

**Key Characteristics:**
- The Cartesian Product is a fundamental operation in set theory and is used in various fields such as mathematics, computer science, and database theory.
- The size of the Cartesian Product of two sets A and B is equal to the product of the sizes of A and B, i.e., |A × B| = |A| * |B|.
- The Cartesian Product can be extended to more than two sets, resulting in tuples of higher dimensions.

**Common Approaches:**
1. **Iterative Approach:**
  - Use nested loops to iterate through each element of the first set and pair it with each element of the second set.
  - Time: O(|A| * |B|)
  - Space: O(|A| * |B|)

2. **Recursive Approach:**
  - Use recursion to generate pairs by combining elements from the two sets.
  - Time: O(|A| * |B|)
  - Space: O(|A| * |B|)

**Example:**
- Let A = {1, 2} and B = {x, y}. The Cartesian Product A × B would be:
  A × B = {(1, x), (1, y), (2, x), (2, y)}
- The Cartesian Product is represented as a set of ordered pairs.

**Interview Tip:**
- Clarify the input constraints (e.g., can the sets be empty? Can they contain duplicate elements?).
- Discuss the time and space complexity of your solution.
- Handle edge cases:
  - If either set is empty, the Cartesian Product should also be empty.
  - If both sets contain duplicate elements, the Cartesian Product will include all combinations of those duplicates.

 */


class CartesianProduct {
  constructor() {
    // Initialization if needed
    this.result = null;
  }

  /** Iterative Approach */
  iterative(setA, setB) {
    // reset values for each call
    this.result = [];
    for (const a of setA) {
      for (const b of setB) {
        this.result.push([a, b]);
      }
    }
    return this.result;
  }

  /** Recursive Approach */
  recursive(setA, setB, indexA = 0, indexB = 0) {
    if (indexA === 0 && indexB === 0) {
      this.result = [];
    }
    if (indexA >= setA.length) {
      return this.result;
    }
    if (indexB >= setB.length) {
      return this.recursive(setA, setB, indexA + 1, 0);
    }
    this.result.push([setA[indexA], setB[indexB]]);
    return this.recursive(setA, setB, indexA, indexB + 1);
  }
}


/** Usage  */
const cartesian = new CartesianProduct();
const setA = [1, 2];
const setB = ['x', 'y'];
console.log(cartesian.iterative(setA, setB));
console.log(cartesian.recursive(setA, setB));
