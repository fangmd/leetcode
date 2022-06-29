/**
 * 把合适的字符串组合在一起
 * 
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 */

/**
 * 时间复杂度: O(n^n)
 * 超时了
 */
const groupAnagrams = function (strs) {
  const ret = []
  for (let j = 0; j < strs.length; j++) {
    const item = strs[j]
    let index = -1
    for (let i = 0; i < ret.length; i++) {
      if (
        ret[i][0].split("").sort().join("") === item.split("").sort().join("")
      ) {
        index = i
        break
      }
    }
    if (index === -1) {
      ret.push([item])
    } else {
      ret[index].push(item)
    }
  }
  return ret
}

/**
 * 时间复杂度: O(n)
 */
const groupAnagrams2 = function (strs) {
  const obj = {}
  for (let str of strs) {
    const sortStr = str.split("").sort().join("")
    if (obj[sortStr]) {
      obj[sortStr].push(str)
    } else {
      obj[sortStr] = [str]
    }
  }
  return Object.values(obj)
}

console.log(groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"]))
// export default groupAnagrams
