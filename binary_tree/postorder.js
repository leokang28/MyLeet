/**
 * Given a binary tree, return the postorder traversal of its nodes' values.
 */

var postorderTraversal = function (root) {
  const stack = []
  const result = []
  if (!root) return result
  stack.push(root)
  while (stack.length !== 0) {
    root = stack.pop()
    root.left && stack.push(root.left)
    root.right && stack.push(root.right)
    result.unshift(root.val)
  }
  return result
};