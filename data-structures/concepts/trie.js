// Trie (Prefix Tree)

// A trie is a tree-shaped data structure specialized for storing strings, where each
// edge represents a single character and words sharing a common prefix share the same
// path from the root. This makes prefix-based lookups (autocomplete, spell-check) far
// more efficient than scanning a list of strings one by one.

// The main operations of a trie are:
// 1. Insertion: Adding a word, one character at a time, creating nodes as needed.
// 2. Search: Checking whether an exact word exists.
// 3. Prefix search: Checking whether any stored word starts with a given prefix.
// 4. Deletion: Removing a word and pruning nodes that no longer lead to any word.

class TrieNode {
  constructor() {
    this.children = new Map(); // character -> TrieNode
    this.isEndOfWord = false; // true if a word ends at this node
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // insert: Add a word to the trie, creating nodes for any characters not already present
  insert(word) {
    let current = this.root;

    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char);
    }

    current.isEndOfWord = true;
  }

  // search: Check whether an exact word exists in the trie
  search(word) {
    const node = this._traverse(word);
    return node !== null && node.isEndOfWord;
  }

  // startsWith: Check whether any stored word begins with the given prefix
  startsWith(prefix) {
    return this._traverse(prefix) !== null;
  }

  // getWordsWithPrefix: Return every stored word that starts with the given prefix
  getWordsWithPrefix(prefix) {
    const results = [];
    const node = this._traverse(prefix);

    if (node === null) {
      return results;
    }

    this._collectWords(node, prefix, results);
    return results;
  }

  // delete: Remove a word, pruning nodes left with no children and no other word ending
  // there. Returns whether the word was actually present.
  delete(word) {
    if (!this.search(word)) {
      return false;
    }

    this._deleteHelper(this.root, word, 0);
    return true;
  }

  // _traverse: Walk the trie along `str`, returning the ending node or null if the path breaks
  _traverse(str) {
    let current = this.root;

    for (const char of str) {
      if (!current.children.has(char)) {
        return null;
      }
      current = current.children.get(char);
    }

    return current;
  }

  // _collectWords: Depth-first walk from `node`, appending complete words to `results`
  _collectWords(node, prefix, results) {
    if (node.isEndOfWord) {
      results.push(prefix);
    }

    for (const [char, child] of node.children) {
      this._collectWords(child, prefix + char, results);
    }
  }

  // _deleteHelper: Unset the end-of-word flag and prune now-dead nodes on the way back up.
  // Returns whether the caller's edge to `node` can itself be deleted.
  _deleteHelper(node, word, depth) {
    if (depth === word.length) {
      node.isEndOfWord = false;
      return node.children.size === 0;
    }

    const char = word[depth];
    const child = node.children.get(char);
    const shouldPruneChild = this._deleteHelper(child, word, depth + 1);

    if (shouldPruneChild) {
      node.children.delete(char);
    }

    return node.children.size === 0 && !node.isEndOfWord;
  }
}

/** Example usage */
const trie = new Trie();

['cat', 'car', 'card', 'care', 'dog'].forEach((word) => trie.insert(word));

console.log('search("car"):', trie.search('car')); // Output: true
console.log('search("ca"):', trie.search('ca')); // Output: false ("ca" was never inserted as a whole word)
console.log('search("cars"):', trie.search('cars')); // Output: false

console.log('startsWith("ca"):', trie.startsWith('ca')); // Output: true
console.log('startsWith("do"):', trie.startsWith('do')); // Output: true
console.log('startsWith("z"):', trie.startsWith('z')); // Output: false

console.log('getWordsWithPrefix("ca"):', trie.getWordsWithPrefix('ca'));
// Output: ['cat', 'car', 'card', 'care']

console.log('getWordsWithPrefix("car"):', trie.getWordsWithPrefix('car'));
// Output: ['car', 'card', 'care']

console.log('getWordsWithPrefix("z"):', trie.getWordsWithPrefix('z')); // Output: []

console.log('delete("car"):', trie.delete('car')); // Output: true
console.log('search("car") after delete:', trie.search('car')); // Output: false
console.log('search("card") after deleting "car":', trie.search('card')); // Output: true (sibling word unaffected)
console.log('search("care") after deleting "car":', trie.search('care')); // Output: true

console.log('delete("dog"):', trie.delete('dog')); // Output: true
console.log('startsWith("d") after deleting "dog":', trie.startsWith('d')); // Output: false (whole branch pruned)

console.log('delete("car") again (already gone):', trie.delete('car')); // Output: false
console.log('delete("xyz") (never existed):', trie.delete('xyz')); // Output: false
