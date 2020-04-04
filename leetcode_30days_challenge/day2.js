/**
 * Write an algorithm to determine if a number is "happy".
 * A happy number is a number defined by the following process: Starting with any positive integer,
 * replace the number by the sum of the squares of its digits,
 * and repeat the process until the number equals 1 (where it will stay),
 * or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy numbers.
 */
const isHappy = function (n) {
  if (typeof n !== 'number' || isNaN(n)) return false
  const set = new Set()
  while (true) {
    n = String(n).split('').reduce((pre, cur) => pre + (parseInt(cur) ** 2), 0)
    if (n === 1) return true
    if (set.has(n)) {
      return false
    }
    set.add(n)
  }
}

console.log(isHappy(13123213))