function hasCycle(head, nodes = new Set()) {
    if (!head) return false;
    if (nodes.has(head)) return true;

    nodes.add(head);

    return hasCycle(head.next, nodes);
};

//Tortoise and the Hare
function hasCycleTwo(head) {
    if (!head) return false;

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}