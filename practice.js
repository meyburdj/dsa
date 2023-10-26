/**
 * create a memo to track the amount of steps possible at each n. 
 * each subsequent n adds to the memo. in end read off the memo.
 * 
 * whenever you add another step, it can either go up by 1 or up by 2 from previous
 */
function climbStairs(n, memo = {}) {
    if (n <= 1) return 1;

    if (n in memo) return memo[n];

    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);

    return memo[n];
}