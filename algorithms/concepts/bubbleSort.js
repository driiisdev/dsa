// Bubble Sort

/**
** Definition:**
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The process is repeated until the list is sorted.

** Key Characteristics:**
- The algorithm has a worst-case and average time complexity of O(n^2), where n is the number of items being sorted.
- In the best case (when the array is already sorted), it has a time complexity of O(n) due to the optimization that checks if any swaps were made.

** Common Approaches:**
1. **Iterative Approach:**
  - Use nested loops to compare and swap adjacent elements.
  - Time: O(n^2) in the worst and average cases, O(n) in the best case.
  - Space: O(1) since it is an in-place sorting algorithm.

  2. **Optimized Iterative Approach:**
  - Similar to the iterative approach but includes a flag to check if any swaps were made. If no swaps were made, the array is already sorted, and the algorithm can terminate early.
  - Time: O(n^2) in the worst and average cases, O(n) in the best case.
  - Space: O(1).

** Example:** bubbleSort([5, 2, 9, 1, 5, 6]) = [1, 2, 5, 5, 6, 9]
- The array is sorted in ascending order.

** Interview Tip:**
- Clarify the input constraints (e.g., can the array be empty? Can it contain duplicates?).
- Discuss the time and space complexity of your solution.
- Handle edge cases:
  - empty array (should return an empty array)
  - array with one element (should return the same single element)
  - array with duplicate elements (should sort them correctly).
 */


class BubbleSort {

  constructor() {
    // Initialization if needed
    this.array = null;
    this.result = null;
  }

  /** Iterative Approach */
  iterative(arr) {
    // reset values for each call
    this.array = arr;
    this.result = null;
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j + 1]
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    this.result = arr;
    return arr;
  }

  /** Optimized Iterative Approach */
  optimizedIterative(arr) {
    // reset values for each call
    this.array = arr;
    this.result = null;
    let n = arr.length;
    let swapped;
    for (let i = 0; i < n - 1; i++) {
      swapped = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap arr[j] and arr[j + 1]
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
      }
      if (!swapped) {
        break;
      }
    }
    this.result = arr;
    return arr;
  }
}

/** Usage */
const bubbleSort = new BubbleSort();
console.log(bubbleSort.iterative([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]
console.log(bubbleSort.optimizedIterative([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]
