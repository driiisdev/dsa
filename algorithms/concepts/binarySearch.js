// Binary Search Algorithm

/**
**Definition:**
Binary Search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, it continues searching in the lower half, otherwise it continues in the upper half. This process continues until the value is found or the interval is empty.

**Key Characteristics:**
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)
- **Prerequisite:** The input list must be sorted.

**Common Approaches:**
1. **Iterative Approach:**
  - Use two pointers to keep track of the current search interval.
  - Time: O(log n) since we are halving the search space with each iteration.
  - Space: O(1) since we are using a constant amount of space.

2. **Recursive Approach:**
  - Similar to the iterative approach but uses recursion to divide the search space.
  - Time: O(log n) since we are halving the search space with each recursive call.
  - Space: O(log n) due to the recursive call stack in the worst case.

**Example:** binarySearch([1, 2, 3, 4, 5], 3) = 2
- The number 3 is found at index 2 in the array.

**Example:** binarySearch([1, 2, 3, 4, 5], 6) = -1
- The number 6 is not found in the array, so the function returns -1.

**Interview Tip:**
- Always clarify if the input array is sorted before implementing binary search.
- Discuss the time and space complexity of your solution.
- Handle edge cases:
  - empty array (should return -1)
  - array with one element (check if it matches the target)
  - array with duplicate elements (binary search will return the index of one occurrence, not necessarily the first).
 */

class BinarySearch {

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
    
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        this.result = mid; // Store the index of the found element
        return mid; // Return the index of the found element
      } else if (arr[mid] < target) {
        left = mid + 1; // Search in the right half
      } else {
        right = mid - 1; // Search in the left half
      }
    }
    return -1; // Return -1 if the target is not found
  }

  /** Recursive Approach */
  recursive(arr, target, left = 0, right = arr.length - 1) {
    // reset values for each call
    if (left === 0 && right === arr.length - 1) {
      this.array = arr;
      this.target = target;
      this.result = null;
    }
    if (left > right) {
      return -1; // Return -1 if the target is not found
    }
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      this.result = mid; // Store the index of the found element
      return mid; // Return the index of the found element
    } else if (arr[mid] < target) {
      return this.recursive(arr, target, mid + 1, right); // Search in the right half
    } else {
      return this.recursive(arr, target, left, mid - 1); // Search in the left half
    }
  }
}

/** Usage */
const binarySearch = new BinarySearch();

// Basic case: target found mid-array
console.log(binarySearch.iterative([1, 2, 3, 4, 5], 3)); // Output: 2
console.log(binarySearch.recursive([1, 2, 3, 4, 5], 3)); // Output: 2

// Not found
console.log(binarySearch.iterative([1, 2, 3, 4, 5], 6)); // Output: -1
console.log(binarySearch.recursive([1, 2, 3, 4, 5], 6)); // Output: -1

// Edge case: empty array
console.log(binarySearch.iterative([], 5)); // Output: -1
console.log(binarySearch.recursive([], 5)); // Output: -1

// Edge case: single-element array (match and no match)
console.log(binarySearch.iterative([7], 7)); // Output: 0
console.log(binarySearch.recursive([7], 7)); // Output: 0
console.log(binarySearch.iterative([7], 3)); // Output: -1
console.log(binarySearch.recursive([7], 3)); // Output: -1

// Target outside the array's range on either end
console.log(binarySearch.iterative([10, 20, 30], 5)); // Output: -1
console.log(binarySearch.iterative([10, 20, 30], 40)); // Output: -1

// Target at the first/last index
console.log(binarySearch.iterative([1, 2, 3, 4, 5], 1)); // Output: 0
console.log(binarySearch.iterative([1, 2, 3, 4, 5], 5)); // Output: 4

// Even-length array (no exact middle element)
console.log(binarySearch.iterative([1, 2, 3, 4], 1)); // Output: 0
console.log(binarySearch.recursive([1, 2, 3, 4], 4)); // Output: 3

// Duplicate elements: returns *an* index, not necessarily the first occurrence
console.log(binarySearch.iterative([1, 2, 2, 2, 3], 2)); // Output: 2

// Negative numbers
console.log(binarySearch.iterative([-10, -5, 0, 5, 10], -5)); // Output: 1

// Larger sorted array, iterative vs recursive agree
const largeArr = Array.from({ length: 1000 }, (_, i) => i * 2); // [0, 2, 4, ..., 1998]
console.log(binarySearch.iterative(largeArr, 1998)); // Output: 999
console.log(binarySearch.recursive(largeArr, 1998)); // Output: 999
console.log(binarySearch.iterative(largeArr, 999)); // Output: -1 (odd number, not present)
