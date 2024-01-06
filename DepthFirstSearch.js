// In-Order Depth-First Search (DFS) Traversal
DFSInOrder() {
    return traverseInOrder(this.root, []);
}

// Post-Order DFS Traversal
DFSPostOrder() {
    return traversePostOrder(this.root, []);
}

// Pre-Order DFS Traversal
DFSPreOrder() {
    return traversePreOrder(this.root, []);
}

// Function to perform In-Order DFS Traversal
function traverseInOrder(node, list) {
    // Visit the left subtree
    if (node.left) {
        traverseInOrder(node.left, list);
    }

    // Process the current node
    console.log(node.value);
    list.push(node.value);

    // Visit the right subtree
    if (node.right) {
        traverseInOrder(node.right, list);
    }

    return list;
}

// Function to perform Pre-Order DFS Traversal
function traversePreOrder(node, list) {
    // Process the current node
    console.log(node.value);
    list.push(node.value);

    // Visit the left subtree
    if (node.left) {
        traversePreOrder(node.left, list);
    }

    // Visit the right subtree
    if (node.right) {
        traversePreOrder(node.right, list);
    }

    return list;
}

// Function to perform Post-Order DFS Traversal
function traversePostOrder(node, list) {
    // Visit the left subtree
    if (node.left) {
        traversePostOrder(node.left, list);
    }

    // Visit the right subtree
    if (node.right) {
        traversePostOrder(node.right, list);
    }

    // Process the current node
    console.log(node.value);
    list.push(node.value);

    return list;
}
