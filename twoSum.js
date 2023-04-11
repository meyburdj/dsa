/**iterate through array. subtract that index from target and do a lookup in 
dictionary. if it's there give that index + the value of the key/value pair
otherwise add that entry*/
function twoSum(nums, target) {
    const numberDict = {};
    for (let i = 0; i < nums.length; i += 1) {
        let remainder = target - nums[i];
        if (numberDict[remainder] !== undefined) {
            return [i, numberDict[remainder]];
        }
        numberDict[nums[i]] = i;
    }
};

console.log("this should be [0, 1]", twoSum([2, 7, 11, 15], 9));;

