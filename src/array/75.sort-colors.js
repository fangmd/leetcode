/**
 *
 *
 */

/**
 * 冒泡排序
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        const tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
      }
    }
  }
  return nums
}

export { sortColors }
