/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let values = [];
    while(head) {
        values.push(head.val);
        head = head.next;
    }
    return values.join("") === values.reverse().join("");
};


/*


Time Complexity:
Storing values: O(n)
Reversing: O(n)
Joining and Comparing: O(n)
Total: O(n)+O(n)+O(n) = O(n)


Space Complexity:
We use an array to store n values → O(n)
.reverse() and .join('') create additional space but still O(n)
Total: O(n)+O(n) = O(n)


*/