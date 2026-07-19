// Longest Common Substring

/**
**Definition:**
Given two strings, the Longest Common Substring is the longest sequence of characters
that appears **contiguously** (no gaps) in both strings. This differs from the "longest
common subsequence" problem, where the matching characters don't need to be adjacent.

**Example:** longestCommonSubstring("abcdef", "zabcf") = "abc"
- "abc" appears contiguously in both strings; "f" is also common but shorter

**Example:** longestCommonSubstring("abc", "xyz") = ""
- No characters in common at all

**Common Approaches:**

1. **Naive Approach:**
  - Generate every substring of the first string, check whether it appears in the second.
  - Time: O(m^2 x n) -- O(m^2) substrings of the first string, each an O(n) `.includes()` check
  - Space: O(m) for the substring being checked

2. **Dynamic Programming Approach:**
  - Build a table `dp[i][j]` = length of the common substring ending at `s1[i-1]` and `s2[j-1]`
  - If `s1[i-1] === s2[j-1]`, extend the match: `dp[i][j] = dp[i-1][j-1] + 1`
  - Otherwise the match breaks: `dp[i][j] = 0` (unlike longest-common-*subsequence*, a
    mismatch resets the streak rather than carrying the best-so-far forward)
  - Track the largest value seen and where it ended, then slice it back out of `s1`
  - Time: O(m x n)
  - Space: O(m x n) for the table (can be reduced to O(min(m, n)) with a rolling 1D array)

**Interview Tip:**
- Don't confuse this with Longest Common *Subsequence* (LCS), which allows gaps and uses
  a different recurrence (`dp[i][j] = dp[i-1][j-1] + 1` on match, `max(dp[i-1][j], dp[i][j-1])`
  on mismatch, instead of resetting to 0).
- Handle edge cases: empty strings, no overlap, one string fully contained in the other,
  multiple substrings tied for longest (this implementation returns the first one found).
*/

class LongestCommonSubstring {
  constructor() {
    this.result = '';
  }

  /** Naive Approach (inefficient for long strings) */
  naive(s1, s2) {
    let longest = '';

    for (let i = 0; i < s1.length; i++) {
      for (let j = i + 1; j <= s1.length; j++) {
        const substring = s1.slice(i, j);
        if (substring.length > longest.length && s2.includes(substring)) {
          longest = substring;
        }
      }
    }

    this.result = longest;
    return longest;
  }

  /** Dynamic Programming Approach */
  dynamic(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    let maxLength = 0;
    let endIndex = 0; // end index in s1 (exclusive) of the longest match found so far

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
          if (dp[i][j] > maxLength) {
            maxLength = dp[i][j];
            endIndex = i;
          }
        }
      }
    }

    this.result = s1.slice(endIndex - maxLength, endIndex);
    return this.result;
  }
}

/** Usage */
const lcs = new LongestCommonSubstring();

console.log(lcs.naive('abcdef', 'zabcf')); // Output: "abc"
console.log(lcs.dynamic('abcdef', 'zabcf')); // Output: "abc"

console.log(lcs.dynamic('abc', 'xyz')); // Output: "" (no overlap)
console.log(lcs.dynamic('', 'abc')); // Output: "" (empty string input)
console.log(lcs.dynamic('programming', 'gaming')); // Output: "ming" (shared suffix run)
console.log(lcs.dynamic('abcxyz', 'xyzabc')); // Output: "abc" ("abc" and "xyz" tie at length 3; "abc" is found first)
