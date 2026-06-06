// Merge Sort

/**
 **Definition:**
Merge Sort is a divide-and-conquer algorithm that sorts an array by recursively dividing it into two halves, sorting each half, and then merging the sorted halves back together.

**Key Characteristics:**
- The algorithm has a time complexity of O(n log n) in all cases (best, average, and worst).
- It is a stable sorting algorithm, meaning that equal elements maintain their relative order.
- It requires additional space proportional to the size of the input array.

**Common Approaches:**
1. **Iterative Approach:**
  - Implement the merge sort algorithm iteratively by using a bottom-up approach to merge subarrays of increasing size.
  - Time: O(n log n)
  - Space: O(n)

2. **Recursive Approach:**
  - Implement the merge sort algorithm recursively by dividing the array into two halves, sorting each half, and then merging them.
  - Time: O(n log n)
  - Space: O(n)

**Example:** mergeSort([5, 2, 9, 1, 5, 6]) = [1, 2, 5, 5, 6, 9]
- The array is sorted in ascending order.

**Interview Tip:**
- Clarify the input constraints (e.g., can the array be empty? Can it contain duplicates?).
- Discuss the time and space complexity of your solution.
- Handle edge cases:
  - empty array (should return an empty array)
  - array with one element (should return the same single element)
  - array with duplicate elements (should sort them correctly).
 */

class MergeSort {
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
    for (let size = 1; size < n; size *= 2) {
      for (let low = 0; low < n - size; low += 2 * size) {
        let mid = low + size - 1;
        let high = Math.min(low + 2 * size - 1, n - 1);
        this.Imerge(arr, low, mid, high);
      }
    }

    this.result = arr;
    return this.result;
  }

  /** Helper function to merge two halves */
  Imerge(arr, low, mid, high) {
    let left = arr.slice(low, mid + 1);
    let right = arr.slice(mid + 1, high + 1);
    let i = 0,
      j = 0,
      k = low;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k++] = left[i++];
      } else {
        arr[k++] = right[j++];
      }
    }

    while (i < left.length) {
      arr[k++] = left[i++];
    }
    while (j < right.length) {
      arr[k++] = right[j++];
    }
  }

  /** Recursive Approach */
  recursive(arr) {
    // reset values for each call
    this.array = arr;
    this.result = null;

    if (arr.length <= 1) {
      this.result = arr;
      return this.result;
    }

    let mid = Math.floor(arr.length / 2);
    let left = this.recursive(arr.slice(0, mid));
    let right = this.recursive(arr.slice(mid));

    this.result = this.mergeR(left, right);
    return this.result;
  }

  /** Helper function to merge two halves for recursive approach */
  mergeR(left, right) {
    let merged = [];
    let i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        merged.push(left[i++]);
      } else {
        merged.push(right[j++]);
      }
    }

    this.result = [...merged, ...left.slice(i), ...right.slice(j)];

    return this.result;
  }
}

/** Usage */
const mergeSort = new MergeSort();
console.log(mergeSort.iterative([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]
console.log(mergeSort.recursive([5, 2, 7, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 7]
