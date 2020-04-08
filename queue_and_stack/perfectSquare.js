/**
 * Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.
 */

var numSquares = function (n) {
  let counts = 1
  // if (isSquare(n)) return counts
  const queue = []
  const set = new Set()
  queue.push(n)
  while (queue.length) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const number = queue.shift()
      if (isSquare(number)) return counts
      for (let j = 1; j * j < number; j++) {
        if (!set.has(number - j * j)) {
          queue.push(number - j * j)
          set.add(number - j * j)
        }
      }
    }
    counts++
  }
};

function isSquare(n) {
  return Math.floor(Math.sqrt(n)) ** 2 === n
}

// for (let i = 1; i < 100; i++) {
//   console.log(i, isSquare(i))
// }

console.log('15---', numSquares(13))