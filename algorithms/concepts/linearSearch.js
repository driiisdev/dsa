// Linear Search Algorithm

/**
**Definition:**
Linear Search is a simple algorithm that checks each element in a list sequentially until the desired element is found or the list ends. It is straightforward but can be inefficient for large lists.

**Key Characteristics:**
- The algorithm performs at most n comparisons in the worst case, where n is the number of elements in the array.
- In the best case, it performs only one comparison if the target is the first element.

**Common Approaches:**
1. **Iterative Approach:**
  - Loop through each element in the array and compare it with the target.
  - Time: O(n) since we may have to check each element once.
  - Space: O(1) since we are using a constant amount of space.

2. **Recursive Approach:**
  - Similar to the iterative approach but uses recursion to check each element.
  - Time: O(n) since we may have to check each element once.
  - Space: O(n) due to the recursive call stack in the worst case (when the target is not found).

**Example:** linearSearch([1, 2, 3, 4, 5], 3) = 2
- The number 3 is found at index 2 in the array.

**Example:** linearSearch([1, 2, 3, 4, 5], 6) = -1
- The number 6 is not found in the array, so the function returns -1.

**Interview Tip:**
- Clarify the input constraints (e.g., can the array be empty? Can it contain duplicates?).
- Discuss the time and space complexity of your solution.
- Handle edge cases:
  - empty array (should return -1)
  - array with one element (check if it matches the target)
  - array with duplicate elements (should return the index of the first occurrence).
 */

class LinearSearch {

  constructor() {
    // Initialization if needed
    this.array = null;
    this.target = null;
    this.result = null;
  }

  /** Iterative Approach */
  iterative(arr, target) {
    // reset values for each call
    this.array = arr;
    this.target = target;
    this.result = null;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        this.result = i; // Store the index of the found element
        return i; // Return the index of the found element
      }
    }
    return -1; // Return -1 if the target is not found
  }

  /** Recursive Approach */
  recursive(arr, target, index = 0) {
    // reset values for each call
    if (index === 0) {
      this.array = arr;
      this.target = target;
      this.result = null;
    }
    if (index >= arr.length) {
      return -1; // Return -1 if the target is not found
    }
    if (arr[index] === target) {
      this.result = index; // Store the index of the found element
      return index; // Return the index of the found element
    }
    return this.recursive(arr, target, index + 1); // Recursively check the next element
  }
}

/** Usage */
const linearSearchInstance = new LinearSearch();
console.log(linearSearchInstance.iterative([1, 2, 3, 4, 5], 3));
console.log(linearSearchInstance.recursive([1, 2, 3, 4, 5], 6));
