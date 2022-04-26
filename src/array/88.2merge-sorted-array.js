/**
 * 合并已经排序的数组
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var merge = function (nums1, nums2) {
  const ret = []
  let p1 = 0
  let p2 = 0
  while (p1 < nums1.length || p2 < nums2.length) {
    if (p1 >= nums1.length) {
      ret.push(nums2[p2])
      p2++
      continue
    }
    if (p2 >= nums2.length) {
      ret.push(nums1[p1])
      p1++
      continue
    }

    if (nums1[p1] < nums2[p2]) {
      ret.push(nums1[p1])
      p1++
    } else {
      ret.push(nums2[p2])
      p2++
    }
  }

  return ret
}

export default merge

/**
 * Input:
nums1 = [1,2,3], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
 */

/**
  * [1,2,3,0,0,0]
    3
    [2,5,6]
    3
  */

/**
 * [1]
    1
    []
    0
 */

/**
  * [2,0]
    1
    [1]
    1
  */

/**
   * [1,2,3,0,0,0]
3
[2,5,6]
3
   */

// 解法二：arr.sort
// 解法三：使用排序算法
