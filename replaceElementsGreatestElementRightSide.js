function replaceElements(nums) {

    let tempNumBefore = nums[nums.length - 1];
    let tempNumAfter = nums[nums.length - 1];
    let max = nums[nums.length - 1];
    for (let i = nums.length - 2; i > -1; i--) {
        tempNumBefore = nums[i];
        nums[i] = Math.max(tempNumAfter, max);
        tempNumAfter = tempNumBefore;
        max = Math.max(max, tempNumAfter);
    }
    nums[nums.length - 1] = -1;
    return nums;
}