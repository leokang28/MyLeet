/**
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 */

var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) return null

  const rootVal = postorder[postorder.length - 1]
  const rootIndex = inorder.indexOf(rootVal)
  const leftTree = inorder.slice(0, rootIndex)
  const rightTree = inorder.slice(rootIndex + 1)
  const root = new TreeNode(rootVal)

  root.left = buildTree(leftTree, postorder.slice(0, leftTree.length))
  root.right = buildTree(rightTree, postorder.slice(leftTree.length, postorder.length - 1))
  return root
};