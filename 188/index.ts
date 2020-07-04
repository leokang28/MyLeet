function maxProfit(k: number, prices: number[]): number {
  if (prices.length < 1 || k < 1) return 0;
  if (k > prices.length / 2) {
    const dp = Array(prices.length).fill(Array(2).fill(0));
    for (let i = 0; i < prices.length; i++) {
      if (i === 0) {
        dp[i][1] = -prices[i];
        continue;
      }
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    }
    return dp[prices.length - 1][0]
  }
  const dp = Array(prices.length).fill(Array(k + 1).fill(Array(2).fill(0)));
  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j <= k; j++) {
      if (i === 0) {
        dp[i][j][1] = -prices[i];
        continue;
      }
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
    }
  }
  return dp[prices.length - 1][k][0];
}