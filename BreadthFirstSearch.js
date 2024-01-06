BreadthFirstSearch() {
    // Start from the root node
    let currentNode = this.root;

    // List to store the values in BFS order
    let list = [];

    // Queue to keep track of nodes to be visited
    let queue = [];

    // Add the root node to the queue to start the traversal
    queue.push(currentNode);

    // Continue until the queue is not empty
    while (queue.length > 0) {
        // Dequeue the front node from the queue
        currentNode = queue.shift();

        // Add the value of the dequeued node to the result list
        list.push(currentNode.value);

        // Enqueue the left child if it exists
        if (currentNode.left) {
            queue.push(currentNode.left);
        }

        // Enqueue the right child if it exists
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }

    // Return the final list containing the BFS traversal order
    return list;
}
