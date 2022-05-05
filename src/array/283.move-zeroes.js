/**
 * 
 * Given an integer array nums, move all 0's to the end of 
 * it while maintaining the relative order of the non-zero elements.
 * 
 * Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  if (nums.length === 1) return nums
  let point1 = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[point1] === 0) {
      if (nums[i] !== 0) {
        const tmp = nums[point1]
        nums[point1] = nums[i]
        nums[i] = tmp
        point1++
      }
    } else {
      point1++
    }
  }
  return nums
}

export { moveZeroes }
