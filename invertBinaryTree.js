/**
 * Depth first search using recursion and pre-order depth first search 
 */

function invertTree(root) {
    if (!root) {
        return null;
    }

    [root.left, root.right] = [root.right, root.left];
    invertTree(root.left);
    invertTree(root.right);

    return root;
}



/**If I want to return an inverted tree without altering the initial tree */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function invertTree(root) {
    if (!root) {
        return null;
    }

    // Create a new TreeNode with the same value as the original node
    const newNode = new TreeNode(root.val);

    // Recursively invert the left and right subtrees and assign them to the new node
    newNode.left = invertTree(root.right);
    newNode.right = invertTree(root.left);

    return newNode;
}

