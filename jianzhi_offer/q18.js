/**
 * 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
 */

var mirrorTree = function (root) {
  if (!root) return root
  const queue = []
  queue.push(root)
  while (queue.length) {
    const node = queue.shift()
    const left = node.left
    node.left = node.right
    node.right = left
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }
  return root
};