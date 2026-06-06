// Quick Sort

/**
 **Definition:**
Quick Sort is a divide-and-conquer algorithm that sorts an array by partitioning it into two sub-arrays based on a pivot element. The elements less than the pivot are moved to the left of the pivot, and the elements greater than the pivot are moved to the right. This process is recursively applied to the sub-arrays until they are sorted.

**Key Characteristics:**
- The algorithm has a worst-case time complexity of O(n^2), but its average time complexity is O(n log n).
- It is an in-place sorting algorithm, meaning it requires only a constant amount of additional space.
- The choice of pivot can significantly affect the performance of the algorithm.

**Common Approaches:**
1. **Iterative Approach:**
  - Use a stack to simulate the recursive calls and sort the array iteratively.
  - Time: O(n log n) on average, O(n^2) in the worst case.
  - Space: O(log n) due to the call stack.

2. **Recursive Approach:**
  - Implement the quick sort algorithm recursively by selecting a pivot and partitioning the array around it.
  - Time: O(n log n) on average, O(n^2) in the worst case.
  - Space: O(log n) due to the call stack.

**Example:** quickSort([5, 2, 9, 1, 5, 6]) = [1, 2, 5, 5, 6, 9]
- The array is sorted in ascending order.

**Interview Tip:**
- Clarify the input constraints (e.g., can the array be empty? Can it contain duplicates?).
- Discuss the time and space complexity of your solution.
- Handle edge cases:
  - empty array (should return an empty array)
  - array with one element (should return the same single element)
  - array with duplicate elements (should sort them correctly).
 */


class QuickSort {

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

    let stack = [];
    stack.push(0);
    stack.push(arr.length - 1);

    while (stack.length > 0) {
      let high = stack.pop();
      let low = stack.pop();

      if (low < high) {
        let pivotIndex = this.partition(arr, low, high);

        stack.push(low);
        stack.push(pivotIndex - 1);

        stack.push(pivotIndex + 1);
        stack.push(high);
      }
    }

    this.result = arr;
    return this.result;
  }

  partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;


    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }

  /** Recursive Approach */
  recursive(arr) {
    // reset values for each call
    this.array = arr;
    this.result = null;

    if (arr.length <= 1) {
      this.result = arr;
      return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    this.result = [...this.recursive(left), pivot, ...this.recursive(right)];
    return this.result;
  }

}

/** Usage */
const quickSort = new QuickSort();
console.log(quickSort.iterative([5, 2, 7, 1, 5, 6])); // Output: [1, 2, 5, 6, 7, 9]
console.log(quickSort.recursive([5, 2, 9, 1, 12, 6])); // Output: [1, 2, 5, 6, 9, 12]
