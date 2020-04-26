/**
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 */

var levelOrder = function (root) {
  if (!root) return []
  const res = []
  const queue = []
  queue.push(root)
  while (queue.length) {
    const node = queue.shift()
    res.push(node.val)
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }
  return res
};