/**
 * The highest profit will be when the current price minus the lowest previous price
 * is higher than the current maximum possible profit. We can set a minimum price
 * and a maximum profit then iterate through the prices updating min and max as 
 * we go. We then return the maxProfit
 */

function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
}