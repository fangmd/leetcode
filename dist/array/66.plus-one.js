"use strict";

/**
 * Easy
 * 
 * Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

数组代表的数值 + 1，
比如 [9] => [1, 0]
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function plusOne(digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      if (i == 0) {
        // digits.length + 1,  100000
        var ret = [];
        ret.push(1);

        for (var j = 0; j < digits.length; j++) {
          ret.push(0);
        }

        return ret;
      } else {
        digits[i] = 0;
      }
    } else {
      digits[i] = digits[i] + 1;
      break;
    }
  }

  return digits;
}; // [9] => [1, 0]
//# sourceMappingURL=66.plus-one.js.map