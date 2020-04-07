/**
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 */

var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) return null
  const rootVal = preorder[0]
  const rootIndex = inorder.indexOf(rootVal)
  const leftTree = inorder.slice(0, rootIndex)
  const rightTree = inorder.slice(rootIndex + 1)
  const root = new TreeNode(rootVal)
  root.left = buildTree(preorder.slice(1, leftTree.length + 1), leftTree)
  root.right = buildTree(preorder.slice(leftTree.length + 1), rightTree)
  return root
};