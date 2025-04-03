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



Time Complexity: O(n)

The slow pointer (slow) moves one step at a time.
The fast pointer (fast) moves two steps at a time.
In the worst case (if there's a cycle), fast catches slow in at most n iterations.
If there’s no cycle, fast will reach null in O(n).
Since each node is visited at most once, the total time complexity is O(n).

Space Complexity: O(1)

The solution uses only two pointers (slow and fast).
No extra data structures (like arrays, hash sets, or recursion) are used.
Therefore, the space complexity is O(1).

*/