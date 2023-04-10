/**recursively dfs. send parameter as the max number and increment each time. at end 
 * return Math.max of left and right
 */

function maxDepth(root, count = 0) {
    if (!root) return count;
    count++;
    return Math.max(maxDepth(root.left, count), maxDepth(root.right, count));
}