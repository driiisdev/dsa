// Object
// - holds a collection of key-value pairs
// - keys are strings (or symbols), values can be any type
// - insertion order is preserved for string keys (integer-like keys sort first)
// - not directly iterable — use Object.keys(), .values(), or .entries()

const obj = {
  name: "Alice",
  age: 30,
  isStudent: false,
};

// Access
console.log(obj.name);    // "Alice"
console.log(obj["age"]);  // 30

// Modify
obj.age = 31;
obj["isStudent"] = true;

// Add / remove properties
obj.city = "New York";
delete obj.isStudent;

// Iteration
for (const key in obj) {
  // includes inherited enumerable properties — use hasOwnProperty if needed
  console.log(`${key}: ${obj[key]}`);
}

for (const key of Object.keys(obj))    console.log(key);
for (const val of Object.values(obj))  console.log(val);
for (const [key, val] of Object.entries(obj)) console.log(key, val);

// Big-O summary
// access by key                                  O(1)
// add / remove property                          O(1)
// search for value                               O(n)
// Object.keys / .values / .entries              O(n)
