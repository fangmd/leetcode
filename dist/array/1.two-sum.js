"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Easy
 * 双重 for 循环
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function twoSum(nums, target) {
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
}; // var res = twoSum([2, 7, 11, 15], 9);
// console.log(res);


var _default = twoSum; // exports.twoSum = twoSum;

exports["default"] = _default;
//# sourceMappingURL=1.two-sum.js.map