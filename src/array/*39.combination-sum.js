/**
 *
 * combinationSum
 * 求和， 用 DFS（深度优先搜索）,递归法，回溯法求解
 */

/**
 * 不会*****
 * https://juejin.cn/post/6844903879826489358
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  let ret = []
  const dfs = (index, sum, tmp) => {
    // console.log(tmp);
    if (sum === target) {
      ret.push(tmp.slice())
      return
    }
    if (sum > target) {
      return
    }
    for (let i = index; i < candidates.length; i++) {
      tmp.push(candidates[i])
      dfs(i, sum + candidates[i], tmp)
      tmp.pop()
    }
  }

  dfs(0, 0, [])
  return ret
}

export { combinationSum }
