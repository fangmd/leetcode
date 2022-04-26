/**
 * Easy
 *
 * Given a sorted array and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * [https://leetcode.com/problems/search-insert-position/](https://leetcode.com/problems/search-insert-position/)
 *
 * 从有序数组中查找数值插入位置
 */

/**
 * 1. 从头到尾循环
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  var ret = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
    } else if (nums[i] == target) {
      ret = i
      break
    } else {
      ret = i
      break
    }
  }
  ret = ret < 0 ? nums.length : ret
  return ret
}

/**
 * 2. 二分法查找
 * 适合大量数据的时候使用
 */
var searchInsertBinary = function (nums, target) {
  var mid = 0
  var start = 0
  var end = nums.length - 1
  while (start <= end) {
    mid = Math.floor((start + end) / 2)
    if (nums[mid] > target) {
      end = mid - 1
    } else if (nums[mid] == target) {
      start = mid
      break
    } else {
      start = mid + 1
    }
  }
  return start
}

// [1,3,5,6]
// 5
// 2

//[1,3,5,6]
//7
//4
searchInsertBinary([1, 3, 5, 6], 4)

//[1,3,5,6]
//0
