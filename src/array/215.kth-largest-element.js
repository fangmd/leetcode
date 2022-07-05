/**
 * 
 * 215. Kth Largest Element in an Array

 * Given an integer array nums and an integer k, return the kth largest element in the array.

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
 */

/**
 * 返回第 k 大的数字
 * 方法1: 普通排序，然后找到第 k 大的数字
 * 方法2: 冒泡排序，可以提前退出排序
 */
const findKthLargest = function (nums, k) {
  for (let i = 0; i < k; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        const tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
      }
    }
  }
  return nums[k - 1]
}

export { findKthLargest }
