/**
 * You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
 */

/**
 * 递归解法
 * 时间复杂度 O(2^n)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    // 1+1 , 2
    return 2;
  } else {
    return climbStairs(n - 1) + climbStairs(n - 2);
  }
};

/**
 * 递归解法 + 备忘录解法
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * @param {number} n
 * @return {number}
 */
const map = new Map();
var climbStairs2 = function(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    // 1+1 , 2
    return 2;
  }

  if (map.has(n)) {
    return map.get(n);
  }
  let value = climbStairs2(n - 1) + climbStairs2(n - 2);
  map.set(n, value);
  return value;
};

/**
 * 动态规划解法
 * 和递归解法正好相反(递归从n->1, 动态规划从1->n)
 * @param {number} n
 */
var climbStairs3 = function(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    // 1+1 , 2
    return 2;
  }

  let a = 1; // n - 1
  let b = 2; // n - 2
  let temp = a + b;
  for (let i = 3; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
};

export default climbStairs;
