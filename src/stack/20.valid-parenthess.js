/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//   var stack = []
//   for (var i = 0; i < s.length; i++) {
//     var temp = s[i]
//     if (temp === "(" || temp === "[" || temp === "{") {
//       stack.push(temp)
//     } else {
//       if (temp === ")") {
//         if (stack.pop() !== "(") {
//           return false
//         }
//       } else if (temp === "]") {
//         if (stack.pop() !== "[") {
//           return false
//         }
//       } else if (temp === "}") {
//         if (stack.pop() !== "{") {
//           return false
//         }
//       } else {
//         return false
//       }
//     }
//   }
//   return stack.length === 0
// }

// var ret = isValid("()")
// console.log(ret);

var isValid2 = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i])
    } else {
      if (s[i] === ")" && stack.pop() !== "(") {
        return false
      } else if (s[i] === "}" && stack.pop() !== "{") {
        return false
      } else if (s[i] === "]" && stack.pop() !== "[") {
        return false
      }
    }
  }
  return stack.length === 0
}

export default isValid2

// "["
// false

// "()"
// true
