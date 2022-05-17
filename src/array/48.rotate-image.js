// 48. Rotate Image
// 矩阵反转
// Medium

/**
 * 找规律
 * 
 * 0 0 -> 0 2
  0 1 -> 1 2
  0 2 -> 2 2
  1 0 -> 0 1
  1 1 -> 1 1
  1 2 -> 2 1

  90度旋转，从最外层开始遍历到最中间
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix[0].length
  // 每圈遍历
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - i - 1; j++) {
      const tRow = i
      const tCol = j
      const rRow = tCol
      const rCol = n - 1 - tRow
      const bRow = rCol
      const bCol = n - 1 - rRow
      const lRow = bCol
      const lCol = n - 1 - bRow

      const top = matrix[tRow][tCol]
      const right = matrix[rRow][rCol]
      const bottom = matrix[bRow][bCol]
      const left = matrix[lRow][lCol]

      matrix[tRow][tCol] = left
      matrix[rRow][rCol] = top
      matrix[bRow][bCol] = right
      matrix[lRow][lCol] = bottom
    }
  }
  return matrix
}

const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

// [[1,2,3],[4,5,6],[7,8,9]]
// [[7,4,1],[8,5,2],[9,6,3]]

console.log(rotate(input))
