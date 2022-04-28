/**
 * 
 * 找返回连续的数组
 * Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
 */

/**
 *
 */
export const summaryRanges = function (nums) {
  const ret = []
  if (nums.length === 0) return []
  let start
  let last
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      start = nums[0]
      last = nums[0]
    } else {
      // console.log(
      //   "nums[i] - last !== 1",
      //   nums[i] - last !== 1,
      //   "last:",
      //   last,
      //   "start:",
      //   start,
      //   "nums[i]:",
      //   nums[i]
      // )
      if (nums[i] - last !== 1) {
        if (last === start) {
          // console.log("push", `${start}`)
          ret.push(`${start}`)
        } else {
          // console.log("push", `${start}->${last}`)
          ret.push(`${start}->${last}`)
        }
        start = nums[i]
      }
      last = nums[i]
    }
  }

  // 最后一个
  if (last === start) {
    // console.log("push", `${start}`)
    ret.push(`${start}`)
  } else {
    // console.log("push", `${start}->${last}`)
    ret.push(`${start}->${last}`)
  }

  return ret
}

// console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))
