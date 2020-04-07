/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * 
 * Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy
 * one and sell one share of the stock multiple times).
 * 
 * Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
 */

var maxProfit = function (prices) {
  return prices.reduce((pre, cur, i) => {
    const next = prices[i + 1]
    return pre += next > cur ? next - cur : 0
  }, 0)
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))