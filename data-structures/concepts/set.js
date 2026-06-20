// Set

// - holds a collection of unique values (duplicates silently ignored)
// - can contain a mix of different data types
// - dynamically sized; iterates in insertion order
// - iterable with for...of

const mySet = new Set();

// Add
// mySet.add(1);
mySet.add(5);
mySet.add(5);             // duplicate — ignored
mySet.add("hello");
mySet.add({ name: "Alice" });

console.log(mySet.size);  // 4

// Membership check
console.log(mySet.has(1));               // true
console.log(mySet.has(3));               // false
console.log(mySet.has("hello"));         // true
console.log(mySet.has({ name: "Alice" })); // false — objects compared by reference

// Delete
mySet.delete(5);
console.log(mySet.has(5)); // false

// Iterate (visits values in insertion order)
for (const item of mySet) {
  console.log(item);
}

// Clear
mySet.clear();
console.log(mySet.size); // 0

// Big-O summary
// add                                          O(1)
// has                                          O(1)
// delete                                       O(1)
// iterate (for...of)                           O(n)
