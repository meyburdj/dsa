function singleNumber(nums) {

    let freqCounter = {};

    for (let num of nums) {
        if (num in freqCounter) {
            freqCounter[num]++;
        } else {
            freqCounter[num] = 1;
        }
    }

    for (let num in freqCounter) {
        if (freqCounter[num] === 1) return num;
    }

}