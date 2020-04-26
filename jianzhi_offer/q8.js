/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 */

var numWays = function (n) {
  if (n < 2) return 1
  let a = 1
  let b = 1
  for (let i = 1; i < n; i++) {
    a = a + b;
    b = a - b;
    a %= 1000000007;
  }
  return a;
};