////////TRAVERSALS///////////

/******Depth-First:
 * The three variatiosn of Depth-first transversal only differ insofar as the order
 * for processing the node is different. 
 * All Depth-first algorithms are last in first out, so a stack is ideal. You can
 * create a stack with an array or use the natural call-stack accessible via 
 * recurssion
 * ********/

//Pre-order traversal
function preOrderTraversal(node) {
    if (!node) {
        return;
    }

    console.log(node.val); // Process the current node
    preOrderTraversal(node.left); // Traverse the left subtree
    preOrderTraversal(node.right); // Traverse the right subtree
}

//In-order traversal:
function inOrderTraversal(node) {
    if (!node) {
        return;
    }

    inOrderTraversal(node.left); // Traverse the left subtree
    console.log(node.val); // Process the current node
    inOrderTraversal(node.right); // Traverse the right subtree
}

//Post-order traversal:
function postOrderTraversal(node) {
    if (!node) {
        return;
    }

    postOrderTraversal(node.left); // Traverse the left subtree
    postOrderTraversal(node.right); // Traverse the right subtree
    console.log(node.val); // Process the current node
}

/**Breadth First Search: This is a first in, first out algorithm so recurssion
 * is not as useful. Here we use a queu instead.
 */

//basic implementation. Uses shift which is a o(n) operation, but is relatively
//effecient in memory usage
function levelOrderTraversal(root) {
    if (!root) {
        return;
    }

    const queue = [root];

    while (queue.length > 0) {
        const currentNode = queue.shift(); // Dequeue the first node in the queue

        console.log(currentNode.val); // Process the current node

        if (currentNode.left) {
            queue.push(currentNode.left); // Enqueue the left child
        }
        if (currentNode.right) {
            queue.push(currentNode.right); // Enqueue the right child
        }
    }
}

//index implementation. There is a custon two queu approach that is complicated.
//this avoids the use of shift, but does use more memory.

/**Create a queu and index counter. Build the queue based on lefts and rights, but
 * do the analysis based on the incrementing index position. While loop ends when 
 * index is out of bounds of the queu length
 */

function levelOrderTraversal(root) {
    if (!root) {
        return;
    }

    const queue = [root];
    let index = 0;

    while (index < queue.length) {
        const currentNode = queue[index]; // Get the current node using the index pointer
        index++; // Increment the index pointer

        console.log(currentNode.val); // Process the current node

        if (currentNode.left) {
            queue.push(currentNode.left); // Enqueue the left child
        }
        if (currentNode.right) {
            queue.push(currentNode.right); // Enqueue the right child
        }
    }
}