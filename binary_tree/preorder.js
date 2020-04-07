/**
 * 
 * Given a binary tree, return the preorder traversal of its nodes' values.
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var preorderTraversal = function (root) {
  const result = []
  if (root !== null) {
    result.push(root.val)
    result.push(...preorderTraversal(root.left))
    result.push(...preorderTraversal(root.right))
  }
  return result
};