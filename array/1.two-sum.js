/**
 * 双重 for 循环
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var ret = [];
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; i < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(i, j);
        ret.push(i, j);
        return ret;
      }
    }
  }
};

var res = twoSum([2, 7, 11, 15], 9);
console.log(res);
