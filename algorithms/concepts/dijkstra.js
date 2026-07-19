// Dijkstra's Algorithm: shortest path from a start vertex to every other vertex

// The original version of this file called a `MinPriorityQueue` that was never defined
// or imported anywhere, so calling dijkstra() threw `ReferenceError: MinPriorityQueue
// is not defined`. This file provides a small priority queue so the algorithm actually
// runs, and expects a *weighted* adjacency list (each neighbor is `{ node, weight }`) --
// with every edge weight fixed at 1, Dijkstra degenerates into plain BFS, which is what
// algorithms/concepts/graphTraversal.js already covers.

/** Minimal array-backed min-priority-queue: not heap-based, fine for learning/demo use */
class MinPriorityQueue {
  constructor() {
    this.values = []; // [{ element, priority }, ...]
  }

  enqueue(element, priority) {
    this.values.push({ element, priority });
    this.values.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.values.shift();
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

/**
 * dijkstra: Compute the shortest distance from `start` to every vertex in `graph`.
 * `graph` is a weighted adjacency list: { vertex: [{ node, weight }, ...], ... }
 * Returns a map of vertex -> shortest distance from start (Infinity if unreachable).
 */
function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  const priorityQueue = new MinPriorityQueue();

  for (const vertex in graph) {
    distances[vertex] = vertex === start ? 0 : Infinity;
  }
  priorityQueue.enqueue(start, 0);

  while (!priorityQueue.isEmpty()) {
    const { element: current } = priorityQueue.dequeue();
    if (visited.has(current)) {
      continue; // Already finalized via a shorter path -- skip this stale queue entry
    }
    visited.add(current);

    for (const { node: neighbor, weight } of graph[current]) {
      if (visited.has(neighbor)) {
        continue;
      }
      const newDistance = distances[current] + weight;
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        priorityQueue.enqueue(neighbor, newDistance);
      }
    }
  }

  return distances;
}

/** Example usage */
const weightedGraph = {
  A: [{ node: 'B', weight: 4 }, { node: 'C', weight: 1 }],
  B: [{ node: 'A', weight: 4 }, { node: 'C', weight: 2 }, { node: 'D', weight: 5 }],
  C: [{ node: 'A', weight: 1 }, { node: 'B', weight: 2 }, { node: 'D', weight: 8 }],
  D: [{ node: 'B', weight: 5 }, { node: 'C', weight: 8 }],
  E: [], // Disconnected -- unreachable from A
};

console.log(dijkstra(weightedGraph, 'A'));
// Output: { A: 0, B: 3, C: 1, D: 8, E: Infinity }
// Shortest path to B is via C (A->C->B = 1+2 = 3), not the direct A->B edge (weight 4)

console.log(dijkstra(weightedGraph, 'D'));
// Output: { A: 8, B: 5, C: 7, D: 0, E: Infinity }
// Shortest path to A is D->B->C->A (5+2+1 = 8), cheaper than the direct-ish D->C->A (8+1 = 9)
