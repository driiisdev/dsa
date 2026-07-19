// Graph Traversal: DFS & BFS

// These operate on a plain adjacency-list object (vertex -> array of neighbor names),
// rather than the Graph class in data-structures/concepts/graph.js -- useful when a
// graph is already represented as a plain object, e.g. from parsed JSON.

/**
 * dfs: Depth-first traversal starting from a given vertex.
 * Visits as far as possible down one branch before backtracking, returns visit order.
 */
function dfs(graph, start, visited = new Set(), result = []) {
  if (!graph[start] || visited.has(start)) {
    return result;
  }

  visited.add(start);
  result.push(start);

  for (const neighbor of graph[start]) {
    dfs(graph, neighbor, visited, result);
  }

  return result;
}

/**
 * bfs: Breadth-first traversal starting from a given vertex.
 * Visits all vertices at the current depth before moving to the next, returns visit order.
 */
function bfs(graph, start) {
  const result = [];
  if (!graph[start]) {
    return result;
  }

  const visited = new Set([start]);
  const queue = [start];

  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current);

    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}

/** Example usage */

// Undirected graph
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};

console.log('DFS (undirected) from A:', dfs(graph, 'A')); // Output: ['A', 'B', 'D', 'E', 'F', 'C']
console.log('BFS (undirected) from A:', bfs(graph, 'A')); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
console.log('DFS from a missing vertex:', dfs(graph, 'Z')); // Output: []
console.log('BFS from a missing vertex:', bfs(graph, 'Z')); // Output: []

// Directed graph
const directedGraph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};

console.log('DFS (directed) from A:', dfs(directedGraph, 'A')); // Output: ['A', 'B', 'D', 'E', 'F', 'C']
console.log('BFS (directed) from A:', bfs(directedGraph, 'A')); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
console.log('DFS (directed) from D (dead end):', dfs(directedGraph, 'D')); // Output: ['D']

// Disconnected graph: BFS/DFS only reach vertices connected to the start
const disconnectedGraph = {
  A: ['B'],
  B: ['A'],
  C: ['D'],
  D: ['C'],
};

console.log('DFS from A (cannot reach C/D):', dfs(disconnectedGraph, 'A')); // Output: ['A', 'B']
console.log('BFS from A (cannot reach C/D):', bfs(disconnectedGraph, 'A')); // Output: ['A', 'B']
