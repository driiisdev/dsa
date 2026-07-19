// Greatest Common Divisor (GCD)

/**
**Definition:**
The Greatest Common Divisor (GCD) of two integers is the largest positive integer that
divides both numbers without leaving a remainder. Also known as the Greatest Common
Factor (GCF) or Highest Common Factor (HCF).

**Example:** gcd(48, 18) = 6
- 48 = 6 x 8, 18 = 6 x 3 -- 6 is the largest number that divides both evenly

**Example:** gcd(17, 5) = 1
- 17 and 5 share no common factors other than 1 -- they are "coprime"

**Common Approaches:**

1. **Naive Approach:**
  - Check every integer from min(a, b) down to 1, return the first that divides both evenly.
  - Time: O(min(a, b))
  - Space: O(1)

2. **Euclidean Algorithm:**
  - Repeatedly replace the larger number with the remainder of dividing it by the smaller
    number, until the remainder is 0. The last non-zero value is the GCD.
  - Based on the identity: gcd(a, b) = gcd(b, a % b)
  - Time: O(log(min(a, b)))
  - Space: O(1) iterative, O(log(min(a, b))) recursive (call stack)

**Interview Tip:**
- Handle edge cases: gcd(0, n) = n, gcd(n, 0) = n, negative inputs (GCD is conventionally
  defined for non-negative integers -- take the absolute value first).
- The Euclidean algorithm is the expected answer; the naive approach is only a warm-up.
*/

class GCD {
  constructor() {
    // Initialization if needed
    this.a = null;
    this.b = null;
  }

  /** Naive Approach (inefficient for large numbers) */
  naive(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    this.a = a;
    this.b = b;

    if (a === 0 && b === 0) return 0;

    for (let i = Math.min(a, b); i >= 1; i--) {
      if (a % i === 0 && b % i === 0) return i;
    }

    return 1;
  }

  /** Euclidean Algorithm (iterative) */
  iterative(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    this.a = a;
    this.b = b;

    while (b !== 0) {
      [a, b] = [b, a % b];
    }

    return a;
  }

  /** Euclidean Algorithm (recursive) */
  recursive(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    if (b === 0) return a;
    return this.recursive(b, a % b);
  }
}

/** Usage */
const gcd = new GCD();

console.log(gcd.naive(48, 18)); // Output: 6
console.log(gcd.iterative(48, 18)); // Output: 6
console.log(gcd.recursive(48, 18)); // Output: 6

console.log(gcd.iterative(17, 5)); // Output: 1 (coprime)
console.log(gcd.iterative(0, 9)); // Output: 9 (gcd with 0 is the other number)
console.log(gcd.iterative(-48, 18)); // Output: 6 (negative input normalized)
console.log(gcd.iterative(0, 0)); // Output: 0
