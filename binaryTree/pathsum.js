/**
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf
 * path such that adding up all the values along the path equals the given sum.
 */

var hasPathSum = function (root, sum) {
  if (!root) return false
  if (!root.left && !root.right && root.val === sum) {
    return true
  }
  else {
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
  }
};