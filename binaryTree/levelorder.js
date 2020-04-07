/**
 *  Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
 */

var levelOrder = function (root) {
  const queue = []
  const result = []
  if (root) queue.push(root)
  while (queue.length) {
    let level = []
    let length = queue.length
    for (i = 0; i < length; i++) {
      const node = queue.shift()
      level.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    result.push(level)
  }
  return result
};