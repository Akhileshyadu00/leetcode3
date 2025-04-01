/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(0);
    let temp = head;

    while(list1 !== null && list2 !== null) {
        if(list1.val <= list2.val) {
            temp.next = list1;
            list1 = list1.next
        }else {
            temp.next = list2;
            list2 = list2.next
        }
        temp = temp.next;
    }
    temp.next = list1 !== null ? list1 : list2;

    return head.next
};

/*
Time Complexity: O(n + m)
We traverse through both linked lists once.
n and m are the lengths of list1 and list2, respectively.
Best case (one list is empty): O(1).
Worst case (both lists fully traversed): O(n + m).


Space Complexity: O(1)
We only use a few pointers (head, temp).
No additional space is used except for the output linked list, which is just the input lists rearranged.
Thus, space complexity is O(1).
*/