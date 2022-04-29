/**
 * 
 * 找出数组中缺失的数字
 * Input: nums = [3,0,1]
    Output: 2
    n = nums.length
 */

/**
 * space complexity: O(n)
 * runtime complexity: O(3n)
 */
export const missingNumber = function (nums) {
  let ret
  const temp = Array(nums.length + 1).fill("-")
  for (let i = 0; i < nums.length; i++) {
    temp[nums[i]] = nums[i]
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "-") {
      ret = i
      break
    }
  }
  return ret
}

/**
 * [3,0,1]
 * 0 1 2 3
 * space complexity: O(1)
 * runtime complexity: O(n)
 */
export const missingNumber2 = function (nums) {
  const temp = ((0 + nums.length) * (nums.length + 1)) / 2

  let sum = nums.reduce((i, i2) => {
    return i + i2
  })
  return temp - sum
}
