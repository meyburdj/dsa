// https://leetcode.com/problems/valid-palindrome/

/** take a string. Create a left pointer and right pointer. Use a while loop to
 * go left and right. If it isn't a valid letter continue that pointer. if it is
 * a valid letter, then compare the two letters. If they are the same contiue,
 * else return false.
 */

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    const lettersValid = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i",
        "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
        "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);

    while (left < right) {
        let leftLetter = s[left].toLowerCase();
        let rightLetter = s[right].toLowerCase();

        //if not valid then continue
        if (!lettersValid.has(leftLetter)) {
            left++;
            continue;
        }
        if (!lettersValid.has(rightLetter)) {
            right--;
            continue;
        }

        //if valid letters are found in left and right then compare
        if (leftLetter === rightLetter) {
            right--;
            left++;
            continue;

        }
        else return false;
    }
    return true;
};