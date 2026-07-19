// graph

// A graph is a data structure that consists of a set of vertices (nodes) and a set of
// edges that connect pairs of vertices. In a directed graph, edges have a direction —
// they go from one vertex to another. In an undirected graph, edges are bidirectional.
//
// See DS-NOTE.md's "Graph" section for representation types (adjacency list, adjacency
// matrix), Big-O comparisons, and diagrams. The standalone traversal functions and
// Dijkstra's shortest-path algorithm live in algorithms/concepts/graphTraversal.js and
// algorithms/concepts/dijkstra.js respectively.

class Graph {
  constructor(directed = false) {
    this.adjacencyList = {};
    this.directed = directed; // Whether edges are one-directional
  }

  // addVertex: Add a vertex to the graph
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // addEdge: Connect two vertices. For undirected graphs, the edge is added both ways
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      if (!this.directed) {
        this.adjacencyList[vertex2].push(vertex1);
      }
    }
  }

  // removeEdge: Remove the edge from vertex1 to vertex2 (and back, if undirected)
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    }
    if (!this.directed && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
    }
  }

  // removeVertex: Remove a vertex and every edge connected to it, in either direction
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }

    for (const neighbor of [...this.adjacencyList[vertex]]) {
      this.removeEdge(vertex, neighbor);
    }

    // In a directed graph, other vertices may point at this one without it
    // appearing in this vertex's own outgoing list -- strip those too.
    if (this.directed) {
      for (const other in this.adjacencyList) {
        this.adjacencyList[other] = this.adjacencyList[other].filter((v) => v !== vertex);
      }
    }

    delete this.adjacencyList[vertex];
  }

  // hasEdge: Check whether an edge exists from vertex1 to vertex2
  hasEdge(vertex1, vertex2) {
    return Boolean(this.adjacencyList[vertex1] && this.adjacencyList[vertex1].includes(vertex2));
  }

  // dfs: Depth-first traversal starting from a given vertex, returns the visit order
  dfs(start, visited = new Set(), result = []) {
    if (!this.adjacencyList[start] || visited.has(start)) {
      return result;
    }

    visited.add(start);
    result.push(start);

    for (const neighbor of this.adjacencyList[start]) {
      this.dfs(neighbor, visited, result);
    }

    return result;
  }

  // bfs: Breadth-first traversal starting from a given vertex, returns the visit order
  bfs(start) {
    const result = [];
    if (!this.adjacencyList[start]) {
      return result;
    }

    const visited = new Set([start]);
    const queue = [start];

    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current);

      for (const neighbor of this.adjacencyList[current]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  // display: Print each vertex and its neighbors
  display() {
    for (const vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(', ') || '(none)'}`);
    }
  }
}

/** Example usage: undirected graph */
const undirectedGraph = new Graph();

['A', 'B', 'C', 'D', 'E', 'F'].forEach((v) => undirectedGraph.addVertex(v));
undirectedGraph.addEdge('A', 'B');
undirectedGraph.addEdge('A', 'C');
undirectedGraph.addEdge('B', 'D');
undirectedGraph.addEdge('B', 'E');
undirectedGraph.addEdge('C', 'F');
undirectedGraph.addEdge('E', 'F');

console.log('Undirected graph:');
undirectedGraph.display();
// Output:
// A -> B, C
// B -> A, D, E
// C -> A, F
// D -> B
// E -> B, F
// F -> C, E

console.log('Has edge A-B?', undirectedGraph.hasEdge('A', 'B')); // Output: true
console.log('Has edge A-D?', undirectedGraph.hasEdge('A', 'D')); // Output: false
console.log('DFS from A:', undirectedGraph.dfs('A')); // Output: ['A', 'B', 'D', 'E', 'F', 'C']
console.log('BFS from A:', undirectedGraph.bfs('A')); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
console.log('DFS from a missing vertex:', undirectedGraph.dfs('Z')); // Output: []

undirectedGraph.removeEdge('A', 'B');
console.log('Has edge A-B after removeEdge?', undirectedGraph.hasEdge('A', 'B')); // Output: false
console.log('Has edge B-A after removeEdge (undirected)?', undirectedGraph.hasEdge('B', 'A')); // Output: false

undirectedGraph.removeVertex('F');
console.log('C after removing F:', undirectedGraph.adjacencyList['C']); // Output: ['A']
console.log('E after removing F:', undirectedGraph.adjacencyList['E']); // Output: ['B']

/** Example usage: directed graph */
const directedGraph = new Graph(true);

['A', 'B', 'C', 'D', 'E', 'F'].forEach((v) => directedGraph.addVertex(v));
directedGraph.addEdge('A', 'B');
directedGraph.addEdge('A', 'C');
directedGraph.addEdge('B', 'D');
directedGraph.addEdge('B', 'E');
directedGraph.addEdge('C', 'F');
directedGraph.addEdge('E', 'F');

console.log('\nDirected graph:');
directedGraph.display();
// Output:
// A -> B, C
// B -> D, E
// C -> F
// D -> (none)
// E -> F
// F -> (none)

console.log('Has edge A-B?', directedGraph.hasEdge('A', 'B')); // Output: true
console.log('Has edge B-A (reverse, directed)?', directedGraph.hasEdge('B', 'A')); // Output: false
console.log('DFS from A:', directedGraph.dfs('A')); // Output: ['A', 'B', 'D', 'E', 'F', 'C']
console.log('BFS from A:', directedGraph.bfs('A')); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
console.log('DFS from D (no outgoing edges):', directedGraph.dfs('D')); // Output: ['D']

directedGraph.removeVertex('B');
console.log('A after removing B (directed, B was a target of A):', directedGraph.adjacencyList['A']); // Output: ['C']
console.log('D still exists but is now unreachable from A:', directedGraph.adjacencyList['D']); // Output: []
