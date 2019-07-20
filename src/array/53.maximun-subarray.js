/**
 * Easy
 * 
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 * 获取 sum  最大的子数组
 */

/**
 *
 * 不合格，对于数据量大的时候太耗费时间
 * O(n^3)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var max = nums[0];
  for (i = 0; i < nums.length; i++) {
    for (j = i; j < nums.length; j++) {
      var temp = getSum(nums, i, j);
      if (temp > max) {
        max = temp;
      }
    }
  }
  return max;
};

function getSum(nums, i, j) {
  var sum = 0;
  for (i; i <= j; i++) {
    sum += nums[i];
  }
  return sum;
}

/**
 * Dynamic Programming
 * Time: O(n)
 * Space: O(n)
 * input array: [1, 0, -5, 3]
 * dp: [1, 1, -4, 3], 最大值会存储在 dp 中
 * @param {array} nums
 */
var maxSubArray2 = function(nums) {
  if (!nums) {
    throw 'error';
  }
  var dp = [];
  dp[0] = nums[0];
  var maxSum = nums[0];
  for (var i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    maxSum = Math.max(maxSum, dp[i]);
  }
  return maxSum;
};
// var ret = maxSubArray2([1,5,-1,-1,3]);
// console.log(ret);

/**
 * Dynamic Programming ？？？？ TODO 不会
 * Time: O(n)
 * Space: O(n)
 * input array: [1, 0, -5, 3]
 * dp: [1, 1, -4, 3], 最大值会存储在 dp 中
 * @param {array} nums
 */
var maxSubArray3 = function(nums) {
  if (!nums) {
    throw 'error';
  }

  var maxEndingHere = nums[0];
  var maxSum = nums[0];
  for (var i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
    maxSum = Math.max(maxSum, maxEndingHere);
  }
  return maxSum;
};
var ret2 = maxSubArray3([0, 5, -1, -1, 3]);
console.log(ret2);

// [1]
// 1

//[-1]
// -1

var max = function(x, y) {
  return x > y ? x : y;
};

/**
 * Dynamic Programming 2: 给数组，求不相连的元素和最大值
 * 递归
 * 选或不选，从末尾开始思考
 * i=8, 如果 OPT(i) = max{ OPT(7) ; OPT(6) + nums[7] }
 * @param {array} nums
 */
var maxSubArray4 = function(nums, i) {
  if (i == 0) return nums[0];
  if (i == 1) {
    return nums[0] > nums[1] ? nums[0] : nums[1];
  }

  var a = maxSubArray4(nums, i - 2) + arr[i]; // 不相连 i-2
  var b = maxSubArray4(nums, i - 1);
  return a > b ? a : b;
};
//非递归解法
var maxSubArray5 = function(nums) {
  var pd = [];
  pd[0] = nums[0];
  pd[1] = max(nums[0], nums[1]);
  for (var i; i < nums.length; i++) {
    var a = pd[i - 2] + arr[i];
    var b = pd[i - 1];
    dp[i] = max(a, b);
  }
  return db[db.length - 1];
};
