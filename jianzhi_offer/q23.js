/**
 * 输入一个非空整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 */

function VerifySquenceOfBST(sequence) {
  if (!sequence.length) return false
  const root = sequence.pop()
  let i = 0
  for (i; i < sequence.length; i++) {
    if (root < sequence[i]) {
      break
    }
  }
  const leftTree = sequence.splice(0, i)
  const rightTree = sequence

  for (const i of rightTree) {
    if (i < root) return false
  }
  let left = true
  let right = true
  if (leftTree.length > 0) {
    left = VerifySquenceOfBST(leftTree)
  }
  if (rightTree.length > 0) {
    right = VerifySquenceOfBST(rightTree)
  }
  return left && right

  // write code here
}