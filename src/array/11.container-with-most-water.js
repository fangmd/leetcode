/**
 * 
 * Container With Most Water
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
 */

/**
 * 暴力破解
 */
const maxArea = function (height) {
  if (!height || height.length < 2) return 0
  let max = 0
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const temp = (j - i) * Math.min(height[i], height[j])
      max = Math.max(max, temp)
    }
  }
  return max
}

/**
 * 贪心算法
 * 这个贪心算法,为什么最优解不会被错过？
 *
 *         假设最优解是横坐标为x1,x2(x2在右边)的这两个点组成的
 *               只考虑扫描到x2时,x1被错过的情况(x2被错过同理)：
 *         被错过指的是 当右指针向左扫描经过x2之后,左指针还在x1的左边P处时,x1被错过。
 *
 *                     情况一   x2>p:  x2会被保留,然后左指针向右移动到x1,x1不会被错过
 *                     情况二   x2<p:  小情况一：height[p]>height[x1]    则最优解为 p,x2而不是 x1,x2。  假设不成立
 *                                   小情况二：p<=x1  最优解还是p,x2。 假设不成立
 *                             //因为x2比p和x1都小,所以容器高度取决于x2,而p比x1偏左,所以p,x2比x1,x2面积大
 */
const maxArea2 = function (height) {
  if (!height || height.length < 2) return 0
  let max = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left)
    max = Math.max(max, area)

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return max
}

export { maxArea2 }
