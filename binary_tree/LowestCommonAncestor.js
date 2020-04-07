/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 */

var lowestCommonAncestor = function (root, p, q) {
  let result = null
  function help(node, p, q) {
    if (!node) return false
    const left = help(node.left, p, q) ? 1 : 0
    const right = help(node.right, p, q) ? 1 : 0
    const self = (node.val === p.val || node.val === q.val) ? 1 : 0
    if (left + right + self >= 2) {
      result = node
    }
    return left + right + self > 0
  }
  help(root, p, q)
  return result
};