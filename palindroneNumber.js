//https://leetcode.com/problems/palindrome-number/
/**
 * Convert number type to string type. Split and reverse. Compare copies of the 
 * two joined arrays.
 */
var isPalindrome = function (num) {
    if (num < 0) {
        return false;
    }
    let arr = num.toString().split("");
    let reversedArr = arr.slice().reverse(); // Create a new array with reversed contents
    return arr.join("") === reversedArr.join(""); // Compare the string representation of both arrays
};

/**
 * Keep as a number. deconstruct the number from ones to tens etc. Reconstruct it
 * as a new number by multiplying by 10 and adding remainder
 */

function isPalindromeNumber(num) {
    if (num < 0) {
        return false;
    }
    let original = num;
    let reversed = 0;

    while (num > 0) {
        let remainder = num % 10;
        reversed = reversed * 10 + remainder;
        num = Math.floor(num / 10);
    }

    return original === reversed;
}

