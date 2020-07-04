/**
 * You are given coins of different denominations and a total amount
 * of money amount. Write a function to compute the fewest number of
 * coins that you need to make up that amount. If that amount of money
 * cannot be made up by any combination of the coins, return -1.
 * 
 */

function coinChange(coins: number[], amount: number): number {
  if (amount < 0) return -1;
  if (amount === 0) return 0;
  const dp: number[] = [...Array(amount + 1)].map(_ => amount + 1);
  dp[0] = 0

  for (let i: number = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};