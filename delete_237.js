/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

/* 
Time Complexity: O(1)

The algorithm performs a constant number of operations:
Copying the value of the next node (node.val = node.next.val).
Updating the next pointer (node.next = node.next.next).
Since these operations do not depend on the size of the linked list, the time complexity remains O(1).

Space Complexity: O(1)

The function does not use any extra space—no recursion, no additional data structures.
It only modifies the given node in place.
Therefore, the space complexity is O(1).
*/