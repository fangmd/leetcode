/**
 * 
 * Given a non-empty array of integers nums, every element appears twice except for one. 
 * Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
 * 
Input: nums = [2,2,1]
Output: 1

Input: nums = [4,1,2,1,2]
Output: 4
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const singleNumber = function (nums) {
  let map = new Map()
  nums.forEach((i) => {
    if (map.get(i)) {
      map.set(i, -1)
    } else {
      map.set(i, 1)
    }
  })
  let ret
  for (const [key, value] of map) {
    if (value === 1) {
      ret = key
      break
    }
  }

  return ret
}

export { singleNumber }
