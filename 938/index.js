/**
 * leetcode #938
 *
 * Range Sum of BST
 *
 * Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
 * The binary search tree is guaranteed to have unique values.
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function rangeSumBST(root, L, R) {
  if (!root) return 0
  let sum = 0
  if (root.val > L) {
    sum += rangeSumBST(root.left, L, R)
  }
  if (root.val >= L && root.val <= R) {
    sum += root.val
  }
  if (root.val < R) {
    sum += rangeSumBST(root.right, L, R)
  }
  return sum
}