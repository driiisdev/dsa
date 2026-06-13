// Tower of Hanoi

/**
**Definition**
The Tower of Hanoi is a mathematical puzzle that consists of three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape. The objective of the puzzle is to move the entire stack to another rod. 

**key characteristics**
- Only one disk can be moved at a time.
- Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
- No disk may be placed on top of a smaller disk.

**Common Approaches**
1. **Recursive Approach:**
  - Define a recursive function that takes the number of disks and the source, target, and auxiliary rods as parameters.
  - The function will move n-1 disks from the source to the auxiliary rod, then move the nth disk from the source to the target rod, and finally move the n-1 disks from the auxiliary rod to the target rod.
  - Time: O(2^n) due to the exponential growth of moves required as n increases.
  - Space: O(n) due to the call stack.

  2. **Iterative Approach:**
  - Use a loop to iteratively move the disks based on whether the number of disks is even or odd.
  - For an even number of disks, the moves are made in the order of source to auxiliary, source to target, and auxiliary to target.
  - For an odd number of disks, the moves are made in the order of source to target, source to auxiliary, and auxiliary to target.
  - Time: O(2^n) due to the exponential growth of moves required as n increases.
  - Space: O(1) since only a constant amount of space is used.

**Example**
- For n = 3, the sequence of moves to solve the Tower of Hanoi is:
  1. Move disk 1 from rod A to rod C
  2. Move disk 2 from rod A to rod B
  3. Move disk 1 from rod C to rod B
  4. Move disk 3 from rod A to rod C
  5. Move disk 1 from rod B to rod A
  6. Move disk 2 from rod B to rod C
  7. Move disk 1 from rod A to rod C

**Interview Tip**
- Clarify the input constraints (e.g., can n be negative?).
- Discuss the time and space complexity of your solution.
- Handle edge cases:
  - If n is 0, return an empty list (there are no moves to make).
  - If n is negative, return an error or an empty list (there's no way to move a negative number of disks).

 */


class TowerOfHanoi {
  constructor() {
    // Initialization if needed
    this.moves = [];
    this.movesCount = 0;
  }

  /** Recursive Approach */
  recursive(n, fromRod, toRod, auxRod) {
    if (n <= 0) {
      return;
    }
    this.recursive(n - 1, fromRod, auxRod, toRod);
    this.moves.push(`Move disk ${n} from rod ${fromRod} to rod ${toRod}`);
    this.movesCount++;
    this.recursive(n - 1, auxRod, toRod, fromRod);
  }

  /** Iterative Approach */
  iterative(n, fromRod, toRod, auxRod) {
    const totalMoves = Math.pow(2, n) - 1;
    for (let i = 1; i <= totalMoves; i++) {
      const fromRod = (i & i - 1) % 3;
      const toRod = ((i | i - 1) + 1) % 3;
      if (n % 2 === 0) {
        this.moves.push(`Move disk from rod ${fromRod} to rod ${toRod}`);
      } else {
        this.moves.push(`Move disk from rod ${toRod} to rod ${fromRod}`);
      }
      this.movesCount++;
    }
  }

}

/** usage */
const tower = new TowerOfHanoi();
tower.recursive(3, 'A', 'C', 'B');
console.log(tower.moves);
console.log(`Total moves: ${tower.movesCount}`);
