/**
 * Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) {
    return '';
  }
  if (strs.length == 1) {
    return strs[0];
  }
  var ret = 0;
  var stopLoop = false;
  for (var i = 0; i < strs[0].length; i++) {
    let letter = strs[0].substr(0, i + 1);
    for (var j = 1; j < strs.length; j++) {
      if (strs[j].substr(0, i + 1) !== letter) {
        ret = i;
        stopLoop = true;
        break;
      }
      if (j == strs.length - 1) {
        ret = i + 1;
      }
    }

    if (stopLoop) break;
  }
  if (ret > 0) {
    return strs[0].substr(0, ret);
  }
  return '';
};
// var strs = ["flower","flow","flight"];
// var res = longestCommonPrefix(strs);

var strs = ['c', 'c'];
var res = longestCommonPrefix(strs);

export default longestCommonPrefix;
