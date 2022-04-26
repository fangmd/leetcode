/**
 * Easy
 * 双重 for 循环
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   let ret = []
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (target === nums[i] + nums[j]) {
//         ret.push(i)
//         ret.push(j)
//         return ret
//       }
//     }
//   }
// }

var twoSum2 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

// var res = twoSum([2, 7, 11, 15], 9);
// console.log(res);

export default twoSum2

// exports.twoSum = twoSum;
