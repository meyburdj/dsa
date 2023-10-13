class TreeNode {
    val: number
    left: TreeNode | null = null
    right: TreeNode | null = null

    constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val
        this.left = left || null
        this.right = right || null
    }
}
function validateBinarySearchTree(
    root: TreeNode | null,
    lower: number = -Infinity,
    upper: number = Infinity
): boolean {
    if (!root) return true;

    if (root.val <= lower || root.val >= upper) return false;

    return (
        validateBinarySearchTree(root.left, lower, root.val) &&
        validateBinarySearchTree(root.right, root.val, upper)
    );
}