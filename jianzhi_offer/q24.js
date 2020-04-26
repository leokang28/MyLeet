/**
 * 输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。
 */

var pathSum = function (root, sum) {
  const res = []
  const path = []
  function inorder(node, target) {
    if (!node) return
    path.push(node.val)
    target = target - node.val
    if (target === 0 && !node.right && !node.left) {
      res.push([...path])
    }
    inorder(node.left, target)
    inorder(node.right, target)
    path.pop()
  }
  inorder(root, sum)
  return res
};