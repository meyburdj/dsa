function strStr(haystack, needle) {
    let needleLength = needle.length;

    for (let i = 0; i + needleLength - 1 < haystack.length; i++) {
        let hay = haystack.slice(i, i + needleLength);
        if (hay === needle) return i;
    }
    return -1;
};