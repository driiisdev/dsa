// hash table

// A hash table is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

// The hash table is a collection of key-value pairs, where each key is unique. It provides efficient insertion, deletion, and lookup operations. The average time complexity for these operations is O(1), making hash tables very efficient for many applications.

// The main operations of a hash table are:
// 1. Insertion: Adding a new key-value pair to the hash table.
// 2. Deletion: Removing a key-value pair from the hash table based on the key.
// 3. Lookup: Retrieving the value associated with a specific key in the hash table.


class HashTable {
  constructor(size) {
    this.table = new Array(size); // Initialize the key map with a specified size
    this.size = size; // Store the size of the hash table
  }

  // Hash Function: A function that takes a key and returns an index in the key map
  _hash(key) {
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      total += key.charCodeAt(i); // Add the character code of each character in the key to the total
    }

    return (total % this.size); // Return the index by taking the modulus of the total with the size of the hash table
  }

  // Set: Add a new key-value pair to the hash table
  set(key, value) {
    const index = this._hash(key); // Get the index for the key using the hash function

    if (!this.table[index]) {
      this.table[index] = []; // If no bucket exists at that index, create one
    }

    this.table[index].push([key, value]); // Add the key-value pair to the bucket
  }

  // Get: Retrieve the value associated with a specific key in the hash table
  get(key) {
    const index = this._hash(key); // Get the index for the key using the hash function

    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1]; // Return the value if the key is found
        }
      }
    }

    return undefined; // Return undefined if the key is not found
  }

  // Remove: Delete a key-value pair from the hash table based on the key
  remove(key) {
    const index = this._hash(key); // Get the index for the key using the hash function

    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1); // Remove the key-value pair if the key is found
          return true; // Return true to indicate successful removal
        }
      }
    }

    return false; // Return false if the key is not found
  }

  // Keys: Retrieve all the keys stored in the hash table
  keys() {
    const keysArray = [];

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        for (let j = 0; j < this.table[i].length; j++) {
          keysArray.push(this.table[i][j][0]); // Add the key to the keys array
        }
      }
    }

    return keysArray; // Return the array of keys
  }

  // Values: Retrieve all the values stored in the hash table
  values() {
    const valuesArray = [];

    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        for (let j = 0; j < this.table[i].length; j++) {
          valuesArray.push(this.table[i][j][1]); // Add the value to the values array
        }
      }
    }

    return valuesArray; // Return the array of values
  }

  // display: Print the contents of the hash table
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]); // Print the index and the bucket contents
      }
    }
  }

}

/** Example usage */
const hashTable = new HashTable(53);

hashTable.set("name", "John");
hashTable.set("age", 30);
hashTable.set("city", "New York");

console.log(hashTable.get("name")); // Output: John
console.log(hashTable.get("age")); // Output: 30
console.log(hashTable.get("city")); // Output: New York

/** 
 * keys()/values()/display() walk the underlying array by bucket index, not insertion
 * order, so the results come back ordered by hash value (city, age, name), not by
 * the order they were set. Unlike JS's Map/Object, this hash table makes no
 * insertion-order guarantee.
 */

console.log(hashTable.keys()); // Output: ["city", "age", "name"]
console.log(hashTable.values()); // Output: ["New York", 30, "John"]

hashTable.remove("age");
console.log(hashTable.keys()); // Output: ["city", "name"]
console.log(hashTable.values()); // Output: ["New York", "John"]
hashTable.display(); // Output: 17 [["city", "New York"]]  36 []  46 [["name", "John"]]
