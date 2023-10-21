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

/**using sliding windows instead */
function maxSubarraySum(nums) {
    if (nums.length === 0) return 0;

    let maxSum = nums[0];
    let currSum = nums[0];
    let left = 0;

    for (let right = 1; right < nums.length; right++) {
        if (currSum < 0 && nums[right] > currSum) {
            left = right;
            currSum = nums[right];
        } else {
            currSum += nums[right];
        }
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
}
