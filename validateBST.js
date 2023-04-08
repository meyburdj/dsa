/**
 * recursively DFS. 
 * base case: make it to end of tree path and return true
 * recursively progress while resetting the lower and upper limits of the tree
 * if the ndoe breaks the BST structure of lower and upper limits then return false.
 */

function isValidBST(root, lower = -Infinity, upper = Infinity) {
    if (!root) return true;

    if (root.val <= lower || root.val >= upper) return false;

    return (
        isValidBST(root.left, lower, root.val) &&
        isValidBST(root.right, root.val, upper)
    );
}