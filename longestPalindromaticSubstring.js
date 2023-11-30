/**
 * begin iterating from the 0 position. For each one, do a while loop
 * where a pointer from length-1 goes down looking for a match. if find
 * a match then contniue trying to find the palindrome and use a maxLength
 */

function longPalindSub(chars) {

    let maxPal = 0;

    for (let i = 0; i < chars.length; i++) {
        maxPal = Math.max(maxPal, findPalindrone(chars, i));
    }
    return maxPal;

}

function findPalindrone(chars, left) {
    let count = 0;

    for (let right = chars.length - 1; i > left; right--) {
        let rightChar = chars[right];
        if (chars[left] === chars[right]) {
            //do some kind of while loop that checks if it's a palindrone the whole way
            // and records the count
        }
    }
}