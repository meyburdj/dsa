function maxProdSub(nums) {
    let min = nums[0];
    let max = nums[0];
    let maxProd = nums[0];

    for (let i = 1; i < nums.length; i++) {
        min = Math.min(nums[i], min);
        max = Math.max(nums[i], max);
        maxProd = Math.max(maxProd, max * nums[i], min * nums[i]);
    }
    return maxProd;
}