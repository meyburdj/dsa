function findMode(root) {
    let count = {};
    traverseAndCount(root, count);

    let maxCount = 0;
    let modes = [];

    for (let val in count) {
        if (count[val] > maxCount) {
            maxCount = count[val];
            modes = [Number(val)];
        } else if (count[val] === maxCount) {
            modes.push(Number(val));
        }
    }

    return modes;
}

function traverseAndCount(node, count) {
    if (!node) return;

    count[node.val] = (count[node.val] || 0) + 1;

    traverseAndCount(node.left, count);
    traverseAndCount(node.right, count);
}
