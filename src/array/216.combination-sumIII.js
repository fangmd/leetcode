/**
 * 
 * 
 * 
 * Input: k = 3, n = 7
Output: [[1,2,4]]
Explanation:
1 + 2 + 4 = 7
There are no other valid combinations.

Input: k = 3, n = 9
Output: [[1,2,6],[1,3,5],[2,3,4]]
Explanation:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.

 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const ret = []

  const equalValue = (arr) => {
    const sum = arr.reduce((v1, v2) => {
      return v1 + v2
    }, 0)
    return sum === n
  }

  const backtrack = (index, tmp) => {
    if (tmp.length === k) {
      if (equalValue(tmp)) {
        ret.push([...tmp])
        return
      }
    }

    for (let i = index; i < 10; i++) {
      tmp.push(i)
      backtrack(i + 1, tmp)
      tmp.pop()
    }
  }

  backtrack(1, [])

  return ret
}

// console.log(combinationSum3(3, 7))
console.log(combinationSum3(3, 9))

// export { moveZeroes }
