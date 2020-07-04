/**
 * 二叉搜索树 => 双向循环链表
 * 左节点指向前驱，右节点指向后继
 */

function Convert(root) {
  if (!root) return root
  let pre = null
  let head = null

  function dfs(node) {
    if (!node) return
    dfs(node.left)
    if (!pre) head = node
    else pre.right = node
    node.left = pre
    pre = node
    dfs(node.right)
  }

  dfs(root)
  pre.right = head
  head.left = pre
  return head
}