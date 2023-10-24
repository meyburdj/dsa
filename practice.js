function maxDepthBinaryTree(root, depth = 1) {
    if (!root) return depth;

    depth++;

    return Math.max(maxDepthBinaryTree(root.left, depth),
        maxDepthBinaryTree(root.right, depth)
    );
}