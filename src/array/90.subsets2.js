/**
 * 
 * Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

求数组的所有子串，数据不重复
 */

/**
 * 回溯算法，遍历
 * 需要先对 nums 做个排序
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
  const ret = []

  const container = (arr1, arr2) => {
    for (let item of arr1) {
      if (item.length !== arr2.length) continue
      let tmp = true
      for (let i = 0; i < item.length; i++) {
        if (item[i] !== arr2[i]) {
          tmp = false
          break
        }
      }
      if (tmp) {
        return true
      }
    }
    return false
  }

  const backtrack = (arr, index, tmp) => {
    if (!container(ret, tmp)) {
      ret.push([...tmp])
    }

    for (let i = index; i < arr.length; i++) {
      tmp.push(arr[i])
      backtrack(arr, i + 1, tmp)
      tmp.pop()
    }
  }

  backtrack(nums.sort(), 0, [])
  return ret
}

// subsetsWithDup([1, 2, 2])
console.log(subsetsWithDup([4, 4, 4, 1, 4]))

// export default subsetsWithDup
