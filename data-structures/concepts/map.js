// Map
// - holds key-value pairs; both keys and values can be of any data type
// - maintains insertion order for all key types
// - iterable with for...of; exposes .size property

const map = new Map();

// Set
map.set('name', 'Alice');
map.set('age', 30);
map.set('city', 'New York');
map.set(42, 'numeric key');        // any type as key
map.set({ id: 1 }, 'object key');  // objects as keys too

// show the map
console.log(map); // Map(5) { 'name' => 'Alice', 'age' => 30, 'city' => 'New York', 42 => 'numeric key', { id: 1 } => 'object key' }

// Get
console.log(map.get('name')); // 'Alice'
console.log(map.get('age'));  // 30
console.log(map.get('nope')); // undefined

// Membership check
console.log(map.has('city'));  // true
console.log(map.has('email')); // false

// Size
console.log(map.size); // 5

// Delete
map.delete('city');
console.log(map.has('city')); // false
console.log(map.size);        // 4

// Clear all entries
map.clear();
console.log(map.size); // 0

// Iterate (visits entries in insertion order)
for (const [key, value] of map) {
  console.log(key, value);
}

// Individual iterators
for (const key of map.keys())           console.log(key);
for (const val of map.values())         console.log(val);
for (const [k, v] of map.entries())     console.log(k, v);

// Big-O summary
// set                                          O(1)
// get                                          O(1)
// has                                          O(1)
// delete                                       O(1)
// iterate (for...of)                           O(n)
