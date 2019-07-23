/**
 * Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

import { ListNode } from '../common';
/**
 * 不修改 l1, l2 的方法
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
    // l1 is empty
    return l2;
  }
  if (l2 === null) {
    // l2 is empty
    return l1;
  }

  var pointRet;
  var point1 = l1;
  var point2 = l2;

  if (point1.val <= point2.val) {
    pointRet = new ListNode(point1.val);
    point1 = point1.next;
  } else {
    pointRet = new ListNode(point2.val);
    point2 = point2.next;
  }
  var ret = pointRet;

  while (point2 || point1) {
    if (point1 === null) {
      pointRet.next = new ListNode(point2.val);
      pointRet = pointRet.next;
      point2 = point2.next;
      continue;
    }
    if (point2 === null) {
      pointRet.next = new ListNode(point1.val);
      pointRet = pointRet.next;
      point1 = point1.next;
      continue;
    }

    if (point1.val <= point2.val) {
      pointRet.next = new ListNode(point1.val);
      pointRet = pointRet.next;
      point1 = point1.next;
    } else {
      pointRet.next = new ListNode(point2.val);
      pointRet = pointRet.next;
      point2 = point2.next;
    }
  }
  return ret;
};

export default mergeTwoLists;
