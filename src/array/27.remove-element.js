/**
 * Easy
 * 
 * 删除数组中的指定元素
 * Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 */

/**
 * 重要是换一种思路
 * 双指针，一个指针指向用于放置合法数的位置，另一个指针遍历数组
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  var i = 0;
  for(j=0; j<nums.length; j++){
    if(nums[j] !== val){
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

// var input = [3, 2, 2, 3];
// var input = [3, 2, 3, 4];
// var res = removeElement(input, 3);

var input = [3, 3];
var res = removeElement(input, 5);
console.log({ res, input });
