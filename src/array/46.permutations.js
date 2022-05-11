/**
 * 
 * Given an array nums of distinct integers, return all the possible permutations. 
 * You can return the answer in any order.
 * 
 * Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const permute = function (nums) {
  const ret = []
  const dfs = (arr, tmp) => {
    if (tmp.length === arr.length) {
      ret.push([...tmp])
      return
    }

    for (let i = 0; i < arr.length; i++) {
      if (tmp.includes(arr[i])) {
        continue
      }
      tmp.push(arr[i])
      dfs(nums, tmp)
      tmp.pop()
    }
  }

  dfs(nums, [])
  return ret
}
