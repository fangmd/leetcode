/**
 * Easy
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  const result = [];

  while (p1 < m || p2 < n) {
    const curr1 = nums1[p1];
    const curr2 = nums2[p2];

    if (curr1 < curr2) {
      if (p1 < m) result.push(curr1);
      p1++;
    } else if (curr1 > curr2) {
      if (p2 < n) result.push(curr2);
      p2++;
    } else {
      if (p1 < m) result.push(curr1);
      if (p2 < n) result.push(curr2);
      p1++;
      p2++;
    }
  }

  for (let i = 0; i < result.length; i++) {
    nums1[i] = result[i];
  }
};

/**
 * Input:
nums1 = [1,2,3,0,0,0], m = 3
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