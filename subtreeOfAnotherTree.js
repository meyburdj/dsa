function isSame(root, otherRoot) {
    if (!root && !otherRoot) return true;
    if (!root || !otherRoot) return false;
    if (root.val !== otherRoot.val) return false;
    return (
        isSame(root.left, otherRoot.left) &&
        isSame(root.right, otherRoot.right)
    );
}

function isSubtree(root, subRoot) {
    if (!root) return false;

    if (isSame(root, subRoot)) return true;

    return (
        isSubtree(root.left, subRoot) ||
        isSubtree(root.right, subRoot)
    );
}