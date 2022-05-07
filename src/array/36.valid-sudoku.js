/**
 * 
 *  1. Each row must contain the digits 1-9 without repetition.
    2. Each column must contain the digits 1-9 without repetition.
    3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * 
 */

/**
 * 遍历二维数组
 * 每一行，一列不能有重复的数字
 * 每3*3不能有重复数字
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const role3 = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
  }
  for (let i = 0; i < board.length; i++) {
    const nums1 = []
    const nums2 = []

    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== ".") {
        if (nums1.includes(board[i][j])) {
          return false
        }
        nums1.push(board[i][j])
      }

      if (board[j][i] !== ".") {
        if (nums2.includes(board[j][i])) {
          return false
        }
        nums2.push(board[j][i])
      }

      if (i < 3 && j < 3 && board[i][j] !== ".") {
        if (role3["0"].includes(board[i][j])) {
          return false
        }
        role3["0"].push(board[i][j])
      } else if (i < 6 && j < 3 && board[i][j] !== ".") {
        if (role3["1"].includes(board[i][j])) {
          return false
        }
        role3["1"].push(board[i][j])
      } else if (i < 9 && j < 3 && board[i][j] !== ".") {
        if (role3["2"].includes(board[i][j])) {
          return false
        }
        role3["2"].push(board[i][j])
      } else if (i < 3 && j < 6 && board[i][j] !== ".") {
        if (role3["3"].includes(board[i][j])) {
          return false
        }
        role3["3"].push(board[i][j])
      } else if (i < 6 && j < 6 && board[i][j] !== ".") {
        if (role3["4"].includes(board[i][j])) {
          return false
        }
        role3["4"].push(board[i][j])
      } else if (i < 9 && j < 6 && board[i][j] !== ".") {
        if (role3["5"].includes(board[i][j])) {
          return false
        }
        role3["5"].push(board[i][j])
      } else if (i < 3 && j < 9 && board[i][j] !== ".") {
        if (role3["6"].includes(board[i][j])) {
          return false
        }
        role3["6"].push(board[i][j])
      } else if (i < 6 && j < 9 && board[i][j] !== ".") {
        if (role3["7"].includes(board[i][j])) {
          return false
        }
        role3["7"].push(board[i][j])
      } else if (i < 9 && j < 9 && board[i][j] !== ".") {
        if (role3["8"].includes(board[i][j])) {
          return false
        }
        role3["8"].push(board[i][j])
      }
    }
  }

  return true
}

export { isValidSudoku }
