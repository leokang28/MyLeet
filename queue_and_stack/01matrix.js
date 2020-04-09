/**
 * Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.
 * 
 * The distance between two adjacent cells is 1.
 */

var updateMatrix = function (matrix) {
  if (!matrix || !matrix.length || !matrix[0]) return matrix
  // const queue = []
  const answer = []
  for (let i = 0; i < matrix.length; i++) {
    const row = []
    for (let j = 0; j < matrix[i].length; j++) {
      row.push(BFS(matrix, i, j))
    }
    answer.push(row)
  }
  return answer
};

function BFS(matrix, x, y) {
  const queue = []
  queue.push([x, y])
  let distance = 0
  while (queue.length) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const [x, y] = queue.shift()
      if (matrix[x][y] === 0) {
        return distance
      }
      check(x + 1, y, matrix, queue)
      check(x - 1, y, matrix, queue)
      check(x, y - 1, matrix, queue)
      check(x, y + 1, matrix, queue)
    }
    distance++
  }
}

function check(x, y, matrix, queue) {
  if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[x].length) return
  queue.push([x, y])
}

console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]]))