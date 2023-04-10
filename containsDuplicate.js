/**
 * Create frequency counter. If at any point it's already there return false
 */

function containsDuplicate(nums) {
    let freqCounter = {};

    for (let num of nums) {
        if (!freqCounter[num]) {
            freqCounter[num] = true;
        } else {
            return true;
        }

    } return false;
}
/**alternative approach comparing set size */
// const containsDuplicate = function (nums) {
//     return !(new Set(nums).size === nums.length);
// };