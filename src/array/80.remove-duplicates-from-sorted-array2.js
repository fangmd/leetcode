/**
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. 
 * The relative order of the elements should be kept the same.
 * 删除重复>2次的数
 * 
 * Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length
  let point1 = 1
  for (let point2 = 2; point2 < nums.length; point2++) {
    if (nums[point2] === nums[point1] && nums[point2] === nums[point1 - 1]) {
      continue
    }
    point1++
    nums[point1] = nums[point2]
  }
  for (let i = point1 + 1; i < nums.length; i++) {
    nums[i] = "_"
  }
  return point1 + 1
}

export { removeDuplicates }

