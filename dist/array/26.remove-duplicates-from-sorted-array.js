"use strict";

/**
 * Easy
 * 要求
 * Given a sorted array nums, remove the duplicates in-place such that each element appear 
 * only once and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 * 
 * example 1:
 * Given nums = [1,1,2],
 * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
 * It doesn't matter what you leave beyond the returned length.
 */

/**
 * 版本一：循环，不符合要求
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function removeDuplicates(nums) {
  var removeItems = [];

  for (i = 0; i < nums.length; i++) {
    if (nums[i + 1] && nums[i] === nums[i + 1]) {
      removeItems.push(i + 1);
    }
  }

  for (j = 0; j < nums.length; j++) {
    nums.splice(j, 1);
  }

  return nums.length;
};
/**
 * Two Pointers 双指针
 * 把不同的值都往前移
 * @param {number[]} nums
 * @return {number}
 */


var removeDuplicates2 = function removeDuplicates2(nums) {
  if (nums.length == 0) return 0;
  var i = 0;

  for (j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};

var res = removeDuplicates2([1, 1, 2]);
console.log(res);
//# sourceMappingURL=26.remove-duplicates-from-sorted-array.js.map