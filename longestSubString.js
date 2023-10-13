function lengthOfLongestSubstring(s) {
    let left = 0;
    let maxLen = 0;
    const charIndexMap = {};

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        if (charIndexMap[currentChar] != null && charIndexMap[currentChar] >= left) {
            left = charIndexMap[currentChar] + 1;
        }
        charIndexMap[currentChar] = right;
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}