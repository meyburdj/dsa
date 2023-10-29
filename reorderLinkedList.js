function reorderLinkedList(root) {
    if (!root) return null;

    let nodes = [];
    while (root) {
        nodes.push(root);
        root = root.next;
    }

    let left = 1;
    let right = nodes.length - 1;

    let tempRoot = nodes[0];

    while (left <= right) {
        // First attach a node from the right.
        if (left <= right) {
            tempRoot.next = nodes[right];
            right--;
            tempRoot = tempRoot.next;
        }

        // Then attach a node from the left.
        if (left <= right) {
            tempRoot.next = nodes[left];
            left++;
            tempRoot = tempRoot.next;
        }
    }

    tempRoot.next = null;
}
