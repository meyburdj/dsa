/**
 * BST will always be ordered. As such, if both p and q are less than the root
 * you can always know you need to move to the left of the root. If both p and q
 * are greater than the root you can move to the right of the root. If this isn't true
 * then either p and q are the left and right of the root or the root is one of p
 * and q and the left or right is the other.
 * 
 * Use recursive DFS to find this root instance 
 */

function lowestCommonAncestor(root, p, q) {
    if (root === null) return null;

    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);

    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);

    } else {
        return root;
    }
}