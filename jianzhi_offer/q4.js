/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 */

var buildTree = function (pre, vin) {
  if (!pre.length || !vin.length) return null
  const rootVal = pre[0] // 通过先续确定根节点
  const rootIndex = vin.indexOf(rootVal) //根节点在中序的位置
  // 左右子树
  const leftTree = vin.slice(0, rootIndex)
  const rightTree = vin.slice(rootIndex + 1)

  const root = new TreeNode(rootVal)

  //递归构建左右子树
  root.left = buildTree(pre.slice(1, leftTree.length + 1), leftTree)
  root.right = buildTree(pre.slice(leftTree.length + 1), rightTree)
  return root
};