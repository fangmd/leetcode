/**
 * 
 * Given a collection of numbers, nums, that might contain duplicates, 
 * return all possible unique permutations in any order.
 * 
 * 返回所有可能的排列方式, 数据可能有重复
 * 输入: nums = [1,2,3]
输出: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const ret = []

  /** 判断 arr1 数组中是否存在 arr2 */
  const exists = (arr1, arr2) => {
    let ret = false
    for (let i = 0; i < arr1.length; i++) {
      let tmp = true
      const arr1A = arr1[i]
      for (let j = 0; j < arr1A.length; j++) {
        if (arr1A[j] !== arr2[j]) {
          tmp = false
          break
        }
      }
      if (tmp) {
        ret = true
        break
      }
    }
    return ret
  }

  const backtrack = (arrs, tmp, indexArr) => {
    if (tmp.length === nums.length) {
      if (!exists(ret, tmp)) {
        ret.push([...tmp])
      }
      return
    }

    for (let i = 0; i < arrs.length; i++) {
      // 避免取重复的index，
      if (indexArr.includes(i)) {
        continue
      }
      indexArr.push(i)
      tmp.push(arrs[i])
      backtrack(arrs, tmp, indexArr)
      indexArr.pop()
      tmp.pop()
    }
  }

  backtrack(nums, [], [])

  return ret
}

// console.log(permute([1, 2, 3]))
console.log(permute([1, 1, 2]))
