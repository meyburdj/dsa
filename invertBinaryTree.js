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

