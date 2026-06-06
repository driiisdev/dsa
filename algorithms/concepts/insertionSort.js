// Insertion Sort

/**
** Definition:**
Insertion Sort is a simple sorting algorithm that builds the sorted array one item at a time. It works by repeatedly taking the next unsorted item and inserting it into the correct position in the already sorted part of the array.

** Key Characteristics:**
- The algorithm has a worst-case and average time complexity of O(n^2), where n is the number of items being sorted.
- In the best case (when the array is already sorted), it has a time complexity of O(n) because it only needs to compare each element once.
- It is an in-place sorting algorithm, meaning it requires only a constant amount of additional space.

** Common Approaches:**
1. **Iterative Approach:**
  - Use a loop to iterate through the array, starting from the second element. For each element, compare it with the elements in the sorted portion of the array and insert it into the correct position.
  - Time: O(n^2) in the worst and average cases, O(n) in the best case.
  - Space: O(1).

2. **Recursive Approach:**
  - Similar to the iterative approach but uses recursion to sort the first n-1 elements and then inserts the nth element into the sorted array.
  - Time: O(n^2) in the worst and average cases, O(n) in the best case.
  - Space: O(n) due to recursive call stack.

** Example:** insertionSort([5, 2, 9, 1, 5, 6]) = [1, 2, 5, 5, 6, 9]
- The array is sorted in ascending order.

** Interview Tip:**
- Clarify the input constraints (e.g., can the array be empty? Can it contain duplicates?).
- Discuss the time and space complexity of your solution.
- Handle edge cases: 
  - empty array (should return an empty array)
  - array with one element (should return the same single element)
  - array with duplicate elements (should sort them correctly).
 */


class InsertionSort {

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

    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      // Move elements of arr[0..i-1], that are greater than key, to one position ahead of their current position
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }

    this.result = arr;
    return arr;
  }

  /** Recursive Approach */
  recursive(arr, n) {
    // reset values for each call
    if (n <= 1) {
      this.array = arr;
      this.result = arr;
      return arr;
    }

    // Sort first n-1 elements
    this.recursive(arr, n - 1);
    let key = arr[n - 1];
    let j = n - 2;

    // Move elements of arr[0..n-1], that are greater than key, to one position ahead of their current position
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    
    arr[j + 1] = key;
    this.result = arr;
    return arr;
  }
}

/** Usage */
const insertionSort = new InsertionSort();
console.log(insertionSort.iterative([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]
console.log(insertionSort.recursive([5, 2, 9, 1, 5, 6], 6)); // Output: [1, 2, 5, 5, 6, 9]
