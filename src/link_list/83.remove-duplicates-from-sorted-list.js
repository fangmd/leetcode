/**
 * Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head === null) {
    return head;
  }
  var point = head;
  while (point.next !== null) {
    if (point.val === point.next.val) {
      point.next = point.next.next;
    } else {
      point = point.next;
    }
  }
  return head;
};

export default deleteDuplicates;
