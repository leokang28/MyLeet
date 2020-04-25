/**
 * Given a binary tree, you need to compute the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
 * This path may or may not pass through the root.
 */

var diameterOfBinaryTree = function (root) {
  let result = 0
  const height = function (tree) {
    if (!tree) return 0
    let right = height(tree.right)
    let left = height(tree.left)
    result = Math.max(result, right + left)
    return Math.max(right, left) + 1
  }
  height(root)
  return result
};