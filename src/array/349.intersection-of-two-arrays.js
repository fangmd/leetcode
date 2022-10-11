/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must be unique and you may return the result in any order.
 *
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 */

/**
 * 数组取并集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const ret = []
  const retMap = new Map() // ret 去重
  const map = new Map()

  nums2.map((value) => {
    map.set(value, 1)
  })

  nums1.map((value) => {
    if (map.get(value) && !retMap.get(value)) {
      ret.push(value)
      retMap.set(value, 1)
    }
  })

  return ret
}

export { intersection }
