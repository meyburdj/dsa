/**
 * Do DFS on p and q simultaneously. Base case is where either you reach the end
 * and they've been the same the whole time, or where there is a time where they
 * are different from eachother. Return the recursive left and right so that if either
 * is false it returns false
 */

function isSameTree(p, q) {
    if (!p && !q) return true;
    if ((!p && q) || (p && !q)) return false;
    if (p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}