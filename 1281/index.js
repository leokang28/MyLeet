/**
 *  leetcode #1281
 * 
 *  Subtract the Product and Sum of Digits of an Integer
 * 
 *  Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 */


function subtractProductAndSum(n) {
  if (n / 10 < 1) return 0
  n = String(n).split('')
  console.log(n)
  const sum = n.reduce((pre, next) => parseInt(pre) + parseInt(next))
  const product = n.reduce((pre, next) => pre * next)
  return product - sum
}

subtractProductAndSum(234)