/**
 * 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 */


// n&(n-1)会消去最右边的1。有多少1就可以执行多少次循环
function NumberOf1(n) {
  let count = 0
  while (n) {
    n = n & (n - 1)
    count++
  }
  return count
}