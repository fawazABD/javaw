function dijkstra(graph, start) {
    // Initialize distances with Infinity for all vertices except the start vertex
    const distances = {};
    for (let vertex in graph) {
        distances[vertex] = vertex === start ? 0 : Infinity;
    }

    // Initialize priority queue with start vertex
    const queue = [start];

    while (queue.length > 0) {
        // Get the vertex with the smallest distance from the queue
        const currentVertex = queue.shift();

        // Iterate through its neighbors
        for (let neighbor in graph[currentVertex]) {
            const distanceToNeighbor = distances[currentVertex] + graph[currentVertex][neighbor];

            // Update distance if it's shorter than the previously known distance
            if (distanceToNeighbor < distances[neighbor]) {
                distances[neighbor] = distanceToNeighbor;
                
                // Add the neighbor to the queue for further exploration
                queue.push(neighbor);
            }
        }
    }

    return distances;
}

// Example usage:
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

const shortestDistances = dijkstra(graph, 'A');
console.log(shortestDistances);
