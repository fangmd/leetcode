/**
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 */

/**
 * 解法1: hash桶
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 */
export const containsDuplicate = function (nums) {
  const a = {}
  for (let i = 0; i < nums.length; i++) {
    if (a[nums[i]]) {
      return true
    } else {
      a[nums[i]] = "1"
    }
  }
  return false
}
