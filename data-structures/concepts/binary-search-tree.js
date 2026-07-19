// Binary Search Tree

// A binary search tree (BST) is a data structure that maintains a sorted order of elements, allowing for efficient insertion, deletion, and lookup operations. Each node in the tree has at most two children, referred to as the left and right child. The left child's value is less than its parent's value, while the right child's value is greater than its parent's value.

// The main operations of a binary search tree are:
// 1. Insertion: Adding a new value to the tree while maintaining the sorted order.
// 2. Deletion: Removing a value from the tree while maintaining the sorted order.
// 3. Lookup: Searching for a specific value in the tree.

class Node {
  constructor(value) {
    this.value = value; // Store the value of the node
    this.left = null; // Initialize the left child as null
    this.right = null; // Initialize the right child as null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null; // Initialize the root of the tree as null
  }

  // isEmpty: Check if the tree is empty
  isEmpty() {
    return this.root === null; // Return true if the root is null, indicating the tree is empty
  }

  // insert: Add a new value to the tree while maintaining the sorted order
  insert(value) {
    const newNode = new Node(value); // Create a new node with the given value
    if (this.isEmpty()) {
      this.root = newNode; // If the tree is empty, set the new node as the root
    } else {
      this._insertNode(this.root, newNode); // Otherwise, call the helper function to insert the node
    }
  }

  // search: Search for a specific value in the tree
  search(value) {
    return this._searchNode(this.root, value); // Call the helper function to search for the value starting from the root
  }

  /** DFS (Depth-First Search) Traversal: Pre-order, In-order, Post-order */

  // Pre-order Traversal: Visit root, left subtree, right subtree
  preOrderTraversal(node = this.root) {
    if (node !== null) {
      console.log(node.value); // Visit the root
      this.preOrderTraversal(node.left); // Visit the left subtree
      this.preOrderTraversal(node.right); // Visit the right subtree
    }
  }

  // In-order Traversal: Visit left subtree, root, right subtree
  inOrderTraversal(node = this.root) {
    if (node !== null) {
      this.inOrderTraversal(node.left); // Visit the left subtree
      console.log(node.value); // Visit the root
      this.inOrderTraversal(node.right); // Visit the right subtree
    }
  }

  // Post-order Traversal: Visit left subtree, right subtree, root
  postOrderTraversal(node = this.root) {
    if (node !== null) {
      this.postOrderTraversal(node.left); // Visit the left subtree
      this.postOrderTraversal(node.right); // Visit the right subtree
      console.log(node.value); // Visit the root
    }
  }

  /** BFS (Breadth-First Search) Traversal: Level-order traversal */
  levelOrderTraversal() {
    if (this.isEmpty()) {
      return; // If the tree is empty, return
    }

    const queue = []; // Initialize a queue to hold nodes for level-order traversal
    queue.push(this.root); // Start with the root node

    while (queue.length > 0) {
      const currentNode = queue.shift(); // Dequeue the front node
      console.log(currentNode.value); // Visit the current node
      if (currentNode.left !== null) {
        queue.push(currentNode.left); // Enqueue the left child if it exists
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right); // Enqueue the right child if it exists
      }
    }
  }

  // minValue: Find the minimum value in the tree
  minValue(node = this.root) {
    if (node === null) {
      return null; // Return null if the node is null, indicating the tree is empty
    }

    while (node.left !== null) {
      node = node.left; // Traverse to the leftmost node to find the minimum value
    }
    return node.value; // Return the minimum value found
  }

  // maxValue: Find the maximum value in the tree
  maxValue(node = this.root) {
    if (node === null) {
      return null; // Return null if the node is null, indicating the tree is empty
    }

    while (node.right !== null) {
      node = node.right; // Traverse to the rightmost node to find the maximum value
    }
    return node.value; // Return the maximum value found
  }

  // delete: Remove a value from the tree while maintaining the sorted order
  delete(value) {
    this.root = this._deleteNode(this.root, value); // Call the helper function to delete the node starting from the root
  }

  // height: Calculate the height of the tree
  height(node = this.root) {
    if (node === null) {
      return -1; // Return -1 if the node is null, indicating the height of an empty tree
    }
    const leftHeight = this.height(node.left); // Recursively calculate the height of the left subtree
    const rightHeight = this.height(node.right); // Recursively calculate the height of the right subtree
    return Math.max(leftHeight, rightHeight) + 1; // Return the maximum height of the two subtrees plus one for the current node
  }

  // size: Calculate the number of nodes in the tree
  size(node = this.root) {
    if (node === null) {
      return 0; // Return 0 if the node is null, indicating there are no nodes in the tree
    }
    return this.size(node.left) + this.size(node.right) + 1; // Return the total size of the left and right subtrees plus one for the current node
  }

  // depth: Calculate the depth of a specific value in the tree
  depth(value, node = this.root, currentDepth = 0) {
    if (node === null) {
      return -1; // Return -1 if the node is null, indicating the value is not found
    }

    if (value === node.value) {
      return currentDepth; // Return the current depth if the value is found
    }

    if (value < node.value) {
      return this.depth(value, node.left, currentDepth + 1); // Recursively search in the left subtree and increment the depth
    }

    return this.depth(value, node.right, currentDepth + 1); // Recursively search in the right subtree and increment the depth
  }

  // balanceFactor: Calculate the balance factor of a node
  balanceFactor(node) {
    if (node === null) {
      return 0; // Return 0 if the node is null, indicating the balance factor is zero
    }
    return this.height(node.left) - this.height(node.right); // Return the difference in height between the left and right subtrees
  }

  // isFull: Check if the tree is a full binary tree
  isFull(node = this.root) {
    if (node === null) {
      return true; // Return true if the node is null, indicating the tree is full
    }
    if (node.left === null && node.right === null) {
      return true; // Return true if the node is a leaf, indicating the tree is full
    }
    if (node.left !== null && node.right !== null) {
      return this.isFull(node.left) && this.isFull(node.right); // Recursively check if both subtrees are full
    }
    return false; // Return false if the node has only one child, indicating the tree is not full
  }

  // isBalanced: Check if the tree is balanced
  isBalanced(node = this.root) {
    if (node === null) {
      return true; // Return true if the node is null, indicating the tree is balanced
    }
    const leftHeight = this.height(node.left); // Calculate the height of the left subtree
    const rightHeight = this.height(node.right); // Calculate the height of the right subtree
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false; // Return false if the height difference between the left and right subtrees is greater than 1
    }
    return this.isBalanced(node.left) && this.isBalanced(node.right); // Recursively check if the left and right subtrees are balanced
  }

  // isBST: Check if the tree is a valid binary search tree
  isBST(node = this.root, min = null, max = null) {
    if (node === null) {
      return true; // Return true if the node is null, indicating the tree is a valid BST
    }
    if (min !== null && node.value <= min) {
      return false; // Return false if the node's value is less than or equal to the minimum allowed value
    }
    if (max !== null && node.value >= max) {
      return false; // Return false if the node's value is greater than or equal to the maximum allowed value
    }
    return this.isBST(node.left, min, node.value) && this.isBST(node.right, node.value, max); // Recursively check the left and right subtrees
  }


  // _insertNode: Helper function to insert a node into the tree
  _insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode; // Insert the new node as the left child if it's null
      } else {
        this._insertNode(root.left, newNode); // Recursively insert the new node into the left subtree
      }
    } else {
      if (root.right === null) {
        root.right = newNode; // Insert the new node as the right child if it's null
      } else {
        this._insertNode(root.right, newNode); // Recursively insert the new node into the right subtree
      }
    }
  }

  // _searchNode: Helper function to search for a value in the tree
  _searchNode(root, value) {
    if (root === null) {
      return false; // Return false if the root is null, indicating the value is not found
    }

    if (value < root.value) {
      return this._searchNode(root.left, value); // Recursively search in the left subtree if the value is less than the root's value
    }

    if (value > root.value) {
      return this._searchNode(root.right, value); // Recursively search in the right subtree if the value is greater than the root's value
    }

    return true; // Return true if the value is found
  }

  // _deleteNode: Helper function to delete a node from the tree
  _deleteNode(root, value) {
    if (root === null) {
      return root; // Return null if the root is null, indicating the value is not found
    }

    if (value < root.value) {
      root.left = this._deleteNode(root.left, value); // Recursively delete the node from the left subtree if the value is less than the root's value
    } else if (value > root.value) {
      root.right = this._deleteNode(root.right, value); // Recursively delete the node from the right subtree if the value is greater than the root's value
    } else {
      // Node with only one child or no child
      if (root.left === null) {
        return root.right; // Return the right child if the left child is null
      } else if (root.right === null) {
        return root.left; // Return the left child if the right child is null
      }

      // Node with two children: Get the inorder successor (smallest in the right subtree)
      root.value = this.minValue(root.right);
      root.right = this._deleteNode(root.right, root.value); // Delete the inorder successor
    }

    return root; // Return the updated root after deletion
  }

}

/** usage */
const bst = new BinarySearchTree();
console.log("Tree is empty?", bst.isEmpty()); // Output: true
console.log("Search for 5:", bst.search(5)); // Output: false
console.log("Search for 10:", bst.search(10)); // Output: false

// Build a tree: insert values to test insertion, search, and traversal
[50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45].forEach((value) => bst.insert(value));

console.log("Tree is empty?", bst.isEmpty()); // Output: false
console.log("Search for 45:", bst.search(45)); // Output: true
console.log("Search for 100:", bst.search(100)); // Output: false

console.log("Pre-order traversal:");
bst.preOrderTraversal(); // Output: 50 30 20 10 25 40 35 45 70 60 80

console.log("In-order traversal (sorted output):");
bst.inOrderTraversal(); // Output: 10 20 25 30 35 40 45 50 60 70 80

console.log("Post-order traversal:");
bst.postOrderTraversal(); // Output: 10 25 20 35 45 40 30 60 80 70 50

console.log("Level-order (BFS) traversal:");
bst.levelOrderTraversal(); // Output: 50 30 70 20 40 60 80 10 25 35 45

console.log("Min value:", bst.minValue()); // Output: 10
console.log("Max value:", bst.maxValue()); // Output: 80

console.log("Height of tree:", bst.height()); // Output: 3
console.log("Size of tree:", bst.size()); // Output: 11

console.log("Depth of 45:", bst.depth(45)); // Output: 3
console.log("Depth of 50 (root):", bst.depth(50)); // Output: 0
console.log("Depth of 999 (missing):", bst.depth(999)); // Output: -1

console.log("Balance factor of root:", bst.balanceFactor(bst.root)); // Output: 1
console.log("Is tree full?", bst.isFull()); // Output: true
console.log("Is tree balanced?", bst.isBalanced()); // Output: true
console.log("Is tree a valid BST?", bst.isBST()); // Output: true

// Deletion: leaf node
bst.delete(10);
console.log("Search for 10 after delete:", bst.search(10)); // Output: false
console.log("Size after deleting leaf (10):", bst.size()); // Output: 10

// Deletion: node with one child (20 is left with only its right child, 25)
bst.delete(20);
console.log("Search for 20 after delete:", bst.search(20)); // Output: false
console.log("Search for 25 (promoted child) after delete:", bst.search(25)); // Output: true
console.log("Size after deleting one-child node (20):", bst.size()); // Output: 9

// Deletion: node with two children (30 has 25 and 40 as children)
bst.delete(30);
console.log("Search for 30 after delete:", bst.search(30)); // Output: false
console.log("Size after deleting two-child node (30):", bst.size()); // Output: 8
console.log("In-order after deleting 30 (still sorted):");
bst.inOrderTraversal(); // Output: 25 35 40 45 50 60 70 80

// Deletion: value not in the tree (no-op)
bst.delete(999);
console.log("Size unchanged after deleting a missing value:", bst.size()); // Output: 8

// Deletion: root with two children
bst.delete(50);
console.log("Search for 50 (old root) after delete:", bst.search(50)); // Output: false
console.log("New root value:", bst.root.value); // Output: 60
console.log("Size after deleting root:", bst.size()); // Output: 7
console.log("Is tree still a valid BST after all deletions?", bst.isBST()); // Output: true

// Duplicate values: insert() allows them (routed into the right subtree),
// but isBST() enforces *strict* ordering with no duplicates -- so a tree
// built with a duplicate value reports itself as an invalid BST.
const dupTree = new BinarySearchTree();
dupTree.insert(10);
dupTree.insert(10);
console.log("Search for duplicate value 10:", dupTree.search(10)); // Output: true
console.log("isBST() with a duplicate value:", dupTree.isBST()); // Output: false

