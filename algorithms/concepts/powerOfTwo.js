// Power of Two

/**
** Definition:**
A number is a power of two if it can be expressed as 2^n, where n is a non-negative integer (n >= 0).

**Examples:**
- 1 (2^0)
- 2 (2^1)
- 4 (2^2)
- 8 (2^3)
- 16 (2^4)
- 1024 (2^10)
- 1023 (not a power of two)

** Key Characteristics:**
- A power of two has exactly one bit set in its binary representation.
- Powers of two grow exponentially, so they can quickly become very large.
- usually used in computer science, especially in contexts like memory allocation, binary trees, and algorithms that require efficient division or multiplication by two.
- used in various applications such as data structures (e.g., binary heaps), algorithms (e.g., divide and conquer), and in the design of digital circuits.

**Common Approaches:**
1. **Iterative Approach:**
  - Start with 1 (2^0) and keep multiplying by 2 until you reach or exceed the given number.
  - If you reach the number exactly, it's a power of two; if you exceed it, it's not.
  - Time: O(log n) because we are doubling the number in each iteration.
  - Space: O(1) since we are using a constant amount of space.
  - inefficient for large numbers.

2. **Bit Manipulation Approach:**
  - A number that is a power of two has exactly one bit set in its binary representation. Therefore, n & (n - 1) should be 0 for powers of two.
  - Time: O(1) since it's a constant time operation.
  - Space: O(1) since we are using a constant amount of space.
  - Most efficient and commonly used approach.

3. **Mathematical Approach:**
  - For a number to be a power of two, it must be greater than 0 and the logarithm base 2 of the number should be an integer.
  - Time: O(1) since it's a constant time operation.
  - Space: O(1) since we are using a constant amount of space.
  - Efficient but may involve floating-point precision issues for large numbers.

**Example:** isPowerOfTwo(16) = true
- 16 is 2^4
**Example:** isPowerOfTwo(18) = false
- 18 is not a power of two

**Interview Tip:**
- Clarify the input constraints (e.g., can the number be negative? Can it be zero?).
- Discuss the time and space complexity of your solution.
- Handle edge cases:
  - negative numbers (not powers of two)
  - zero (not a power of two)
  - one (2^0, which is a power of two)
  - very large numbers (consider potential overflow issues in some languages).
 */


class PowerOfTwo {

  constructor() {
    // Initialization if needed
    this.number = null;
    this.isPowerOfTwo = null;
  }

  /** Iterative Approach (inefficient for large "n") */
  iterative(num) {
    // reset values for each call
    this.number = num;
    this.isPowerOfTwo = null;
    if (num <= 0) return false; // Powers of two are positive integers

    let power = 1;  // Start with 2^0
    while (power < num) {
      power *= 2;  // Move to the next power of two
    }
    return power === num; // Check if we found the number
  }

  /** Bit Manipulation Approach (most efficient) */
  bitManipulation(num) {
    // reset values for each call
    this.number = num;
    this.isPowerOfTwo = null;
    return num > 0 && (num & (num - 1)) === 0; // Check if only one bit is set
  }

  /** Mathematical Approach (efficient but may have precision issues) */
  mathematical(num) {
    // reset values for each call
    this.number = num;
    this.isPowerOfTwo = null;
    if (num <= 0) return false; // Powers of two are positive integers
    const logBase2 = Math.log2(num);
    return Number.isInteger(logBase2); // Check if log base 2 is an integer
  }
}

/** Usage */
const powerOfTwo = new PowerOfTwo();

// console.log(powerOfTwo.iterative(8));

/** OR */

var funCall = powerOfTwo.bitManipulation(20);
console.log(funCall);

/** OR */

// var funCall = powerOfTwo.mathematical(88);
// console.log(funCall);
