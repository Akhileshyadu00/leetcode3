/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    while (slow !== null && fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true; 
        }
    }
    return false; 
};

/*
Time Complexity: O(n) → Each node is visited at most once.

Space Complexity: O(1) → Uses only two pointers, No extra space is used.
*/