/**
 * Track a curr sum against a max sum. If at any point a number by itself is greater
 * than the curr sum, turn curr sum into only that number, otherwise keep incrementing
 * the index to the curr sum. 
 */
function maxSubArray(nums) {
    let currSum = nums[0];
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(nums[i], currSum + nums[i]);
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
}