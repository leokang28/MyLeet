/**
 * leetcode 1252
 *
 * Cells with Odd Values in a Matrix
 *
 * Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices
 * where indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.
 *
 * Return the number of cells with odd values in the matrix after applying the increment to all indices.
 */

function oddCells(n, m, indics) {
  const row = initArray(m)
  const matrix = initArray(n, row)
  console.log(matrix[0] === matrix[1])
  console.log(matrix)
  indics.map(([x, y]) => {
    console.log(x, y)
    matrix[x].forEach((_, index) => {
      matrix[x][index]++
    })
    console.log(matrix)
    matrix.forEach(item => {
      item[y]++
    })
    console.log(matrix)
  })
  let count = 0
  // console.log(matrix)
  matrix.reduce((acc, val) => acc.concat(val), []).map(v => v % 2 && count++)
  return count
}

function initArray(length, fillWith = 0) {
  if (!length) return null
  return Array.from(Array(length)).map(() => typeof fillWith === 'number' ? fillWith : Array.from(fillWith))
}

oddCells(2,
  3,
  [[0, 1], [1, 1]])