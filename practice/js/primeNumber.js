//Prime Number

/**
**Definition:**
A prime number is a natural number greater than 1 that has exactly two positive divisors:
- 1
- itself

This means a prime number can only be divided evenly by 1 and the number itself.

Examples of prime numbers:
2, 3, 5, 7, 11, 13, 17, 19...

Examples of non-prime numbers:
- 1 → not prime by definition
- 4 → divisible by 1, 2, 4
- 6 → divisible by 1, 2, 3, 6

**Key Characteristics:**
- Prime numbers are the building blocks of integers.
- Every number greater than 1 is either:
  - a prime number, or
  - a product of prime numbers.
- 2 is the only even prime number.
- Prime numbers become less frequent as numbers grow larger.
- Commonly used in cryptography, hashing, and number theory.

**Prime Check Rule:**
A number n is prime if:
- n > 1
- no number between 2 and √n divides n evenly

**Optimization Insight:**
To check if a number is prime, you only need to test divisors up to √n.

Example:
To check if 36 is prime:
- √36 = 6
- only test: 2, 3, 4, 5, 6
- no need to test numbers larger than 6

Why?
Because factors always come in pairs.

Example:
36 = 4 × 9
- once 4 is found, 9 is automatically implied

**Example:** isPrime(7) = true
- divisible by 1 and 7 only

**Example:** isPrime(9) = false
- divisible by 1, 3, and 9

**Common Approaches:**

1. **Naive Approach**
  - Check divisibility from 2 up to n - 1
  - Time: O(n)
  - Space: O(1)
  - Inefficient for large numbers

2. **Optimized Square Root Approach**
  - Check divisibility only up to √n
  - Time: O(log n)
  - Space: O(1)
  - Most common interview solution

3. **Sieve of Eratosthenes**
  - Finds all prime numbers up to n
  - Marks multiples of known primes as non-prime
  - Time: O(n log n)
  - Space: O(n)
  - Efficient for generating many primes

**Example Prime Sequence (up to 20):**
2, 3, 5, 7, 11, 13, 17, 19

**Interview Tip:**
- Clarify whether they want:
  - to check if one number is prime, or
  - to generate all prime numbers up to n
- Discuss time and space complexity.
- Handle edge cases:
  - negative numbers
  - 0 and 1
  - non-integer input
  - very large numbers
*/


class PrimeNumber {

  constructor() {
    // Initialization if needed
    this.number = null;
    this.isPrime = null;
  }

  /** Naive Approach (inefficient, not recommended for large "n") */
  naive(num) {
    // reset values for each call
    this.number = num;
    this.isPrime = null;

    if (num <= 1) return false; // 0 and 1 are not prime

    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }

    return true;
  }

  /** Optimized Square Root Approach */
  sqRoot(num) {
    // reset values for each call
    this.number = num;
    this.isPrime = null;

    if (num <= 1) return false; // 0 and 1 are not prime
    if (num <= 3) return true; // 2 and 3 are prime
    if (num % 2 === 0 || num % 3 === 0) return false; // eliminate multiples of 2 and 3

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  }

  sqRoot2(num) {
    // reset values for each call
    this.number = num;
    this.isPrime = null;

    if (num <= 1) return false; // 0 and 1 are not prime
    if (num <= 3) return true; // 2 and 3 are prime
    if (num % 2 === 0 || num % 3 === 0) return false; // eliminate multiples of 2 and 3

    let limit = Math.sqrt(num);

    for (let i = 5; i <= limit; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  /** Sieve of Eratosthenes Approach */
  sieve(n) {
    // reset values for each call
    this.isPrime = new Array(n + 1).fill(true);
    this.isPrime[0] = false;
    this.isPrime[1] = false;

    for (let i = 2; i * i <= n; i++) {
      if (this.isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
          this.isPrime[j] = false;
        }
      }   
    }

    const primes = [];
    for (let i = 2; i <= n; i++) {
      if (this.isPrime[i]) primes.push(i);
    }
    return primes;
  } 
}


/** Usage */
var primeChecker = new PrimeNumber();

// console.log(primeChecker.naive(7));

/** OR */

var funCall = primeChecker.sqRoot(19);
console.log(funCall);

/** OR */

// var funCall = primeChecker["sieve"](19);
// console.log(funCall);
