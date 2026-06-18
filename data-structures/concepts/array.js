// Array
// - holds a collection of values (mixed types allowed in JavaScript)
// - zero-indexed, resizable, maintains insertion order
// - iterable (usable with for loops and iterators)

const arr = [1, 2, 3, 4, 5];

// Access
console.log(arr[0]); // 1
console.log(arr[2]); // 3

// Modify
arr[1] = 10;

// Add / remove at end — O(1)
arr.push(6);
arr.pop();

// Add / remove at beginning — O(n)
arr.unshift(0);
arr.shift();

// Middle operations — O(n)
arr.splice(2, 0, 99); // insert 99 at index 2
arr.splice(2, 1);     // remove element at index 2

// Iteration — O(n)
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Big-O summary
// insert / remove at end (push, pop)             O(1)
// insert / remove at beginning (shift, unshift)  O(n)
// insert / remove in middle (splice)             O(n)
// access by index                                O(1)
// search for value                               O(n)
// concat / slice                                 O(n)
// forEach / map / filter / reduce                O(n)
