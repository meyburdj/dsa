function prodOfArrayExceptSelf(nums) {

    let leftProducts = new Array(nums.length);
    leftProducts[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
    }

    let rightProducts = new Array(nums.length);
    rightProducts[nums.length - 1] = 1;
    for (let i = nums.length - 2; i > 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
    }

    let finalArray = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        finalArray[i] = leftProducts[i] * rightProducts[i];
    }
    return finalArray;
}