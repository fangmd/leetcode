/**
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 */

/**
 * 解法1: hash桶
 * 时间复杂度: O(n)
 * 空间复杂度: O(n)
 */
export const containsDuplicate = function (nums, k) {
  const a = {}
  for (let i = 0; i < nums.length; i++) {
    if (a[nums[i]] !== undefined) { // 排除 0的情况
      if (i - a[nums[i]] <= k) {
        return true
      } else {
        a[nums[i]] = i
      }
    } else {
      a[nums[i]] = i
    }
  }
  return false
}
