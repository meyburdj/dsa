//use set and recursion to see if you hit something you've already done
function hasCycle(head, nodes = new Set()) {
    if (!head) return false;
    if (nodes.has(head)) return true;

    nodes.add(head);

    return hasCycle(head.next, nodes);
};

//fast/slow pointers solution
function hasCycleTwo(head) {
    if (!head) return false;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}