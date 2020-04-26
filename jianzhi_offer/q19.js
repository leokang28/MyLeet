/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。


 */

var spiralOrder = function (matrix) {
  if (!matrix || !matrix.length) return matrix
  let l = 0
  let t = 0
  let r = matrix[0].length - 1
  let b = matrix.length - 1
  let res = []
  while (true) {
    for (let i = l; i <= r; i++) res.push(matrix[t][i]) // left to right.
    if (++t > b) break
    for (let i = t; i <= b; i++) res.push(matrix[i][r]) // top to bottom.
    if (l > --r) break
    for (let i = r; i >= l; i--) res.push(matrix[b][i]) // right to left.
    if (t > --b) break
    for (let i = b; i >= t; i--) res.push(matrix[i][l]) // bottom to top.
    if (++l > r) break
  }
  return res

}