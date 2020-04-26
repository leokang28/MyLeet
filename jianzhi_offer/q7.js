/**
 * 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项。
 * 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 */

var fib = function (n) {
  if (n < 2) return n
  let a = 1
  let b = 0
  for (let i = 1; i < n; i++) {
    a = a + b;
    b = a - b;
    a %= 1000000007;
  }
  return a;
};