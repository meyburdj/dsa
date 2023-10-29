function reverseLinkedList(root) {
    //base case. no root or end of linked list
    if (!root || !root.next) return root;

    //save tail as head
    let newHead = reverseLinkedList(root.next);
    //change curr from prev to next
    root.next.next = root;
    //clear out curr next as it's now prev
    root.next = null;

    return newHead;
}