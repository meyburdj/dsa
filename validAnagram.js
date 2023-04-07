/**
 * Create frequency counter of s1. If s2 has all the same letters and no more
 * it's an anagram
 */

function isAnagram(string1, string2) {
    if (string1.length !== string2.length) return false;
    const freqCounterString1 = freqCounter(string1);

    for (let char of string2) {
        if (!freqCounterString1[char]) return false;
        freqCounterString1[char]--;
    }
    return true;
}

function freqCounter(string) {
    const letters = {};
    for (let char of string) {
        if (letters[char] === undefined) {
            letters[char.toLowerCase()] = 1;
        } else {
            letters[char]++;
        }
    }
    return letters;
}