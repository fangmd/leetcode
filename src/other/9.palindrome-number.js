/**
 * Determine whether an integer is a palindrome. 
 * An integer is a palindrome when it reads the same backward as forward.
 */

/**
 * 头尾指针
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var arr = x.toString().split('');
    if(arr.length <= 1) return true;
    var end = arr.length - 1;
    var start = 0;
    for(start; start<end; start++){
        if(arr[start] !== arr[end]){
            return false;
        }
        end--;
    }
    return true;
};

var res = isPalindrome(121);
console.log(`Expected: true, Output: ${res}`);