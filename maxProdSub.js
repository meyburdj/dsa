/**
 *Initialize a maxProduct, a maxNum, and a minNum. 
in for loop have a temp max and temp min so that it won't update either right away.
do Math.max and Math.min on both the max and min to account for negatives. return
max product
 * 
 */

function maxProduct(nums) {
    let maxProduct = nums[0];
    let maxNum = nums[0];
    let minNum = nums[0];

    for (let i = 1; i < nums.length; i++) {

        tempMaxNum = maxNum;
        tempMinNum = minNum;
        maxNum = Math.max(nums[i], Math.max(tempMaxNum * nums[i], tempMinNum * nums[i]));
        minNum = Math.min(nums[i], Math.min(tempMaxNum * nums[i], tempMinNum * nums[i]));

        maxProduct = Math.max(maxNum, maxProduct);
    }
    return maxProduct;
}