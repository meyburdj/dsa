/**
 * uses recurssion with memoization to track previous instances of the sequence
 * as you progress. This is the top-down approach to this algorithm 
 */

function fibonacci(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }
    if (n <= 1) {
        return n;
    }
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

