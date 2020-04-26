/**
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 */

//还是斐波那契。。
function rectCover(n) {
  if (n < 2) return n
  let a = 1
  let b = 0
  for (let i = 0; i < n; i++) {
    a = a + b;
    b = a - b;
  }
  return a;
}