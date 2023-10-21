function valPalindrome(phrase) {
    //assume a set of valid characters here
    let valChars = new Set([]);

    let left = 0;
    let right = phrase.length - 1;

    while (left < right) {
        leftChar = phrase[left].toLowerCase();

        if (!valChars.has(leftChar)) {
            left++;
            continue;
        }
        rightChat = phrase[right].toLowerCase();
        if (!valChars.has(rightChar)) {
            right--;
            continue;
        }

        if (leftChar === rightChar) {
            left++;
            right--;
            continue;
        }
        return false;
    }
    return true;
}