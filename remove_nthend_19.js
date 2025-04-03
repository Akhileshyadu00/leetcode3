/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let dm = new ListNode(0);
    dm.next = head;
    let first = dm;
    let second = dm;
    for(i=0; i<=n; i++) {
      first = first.next;
    }  
    while(first !== null) {
      first = first.next;
      second = second.next;
    }
  
    second.next = second.next.next;
  
    return dm.next;
  };

  /* 
  
Time Complexity: O(n)

The algorithm traverses the linked list once using the two-pointer technique.
The first pointer moves n + 1 steps forward → O(n).
Then, both first and second move together until first reaches null, covering the rest of the list → O(n).
Since each node is visited at most once, the total time complexity is O(n).

Space Complexity: O(1)

The solution only uses a few pointers (dm, first, second), which require constant space.
No extra data structures (like arrays or recursion stacks) are used.
Therefore, the space complexity is O(1).
  
  */