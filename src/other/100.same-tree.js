/**
 * https://leetcode.com/problems/same-tree/
 * 
 * Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

import { TreeNode } from '../common';
/**
 * 遍历对比
 * 递归，深度遍历，前序
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  if (p.val !== q.val) return false;
  var t1 = isSameTree(p.left, q.left);
  var t2 = isSameTree(p.right, q.right);
  if (!t1 || !t2) {
    return false;
  }
  return true;
};
