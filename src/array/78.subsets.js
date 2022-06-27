/**
 * 
 * Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

求数组的所有子串，数据不重复
 */

/**
 * 回溯算法，遍历
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const ret = []

  const backtrack = (arr, index, tmp) => {
    ret.push([...tmp])

    for (let i = index; i < arr.length; i++) {
      tmp.push(arr[i])
      backtrack(arr, i + 1, tmp)
      tmp.pop()
    }
  }

  backtrack(nums, 0, [])
  return ret
}

export default subsets
