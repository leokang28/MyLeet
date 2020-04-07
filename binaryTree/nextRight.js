/**
 * You are given a perfect binary tree where all leaves are on the same level, 
 * and every parent has two children. The binary tree has the following definition:
 * struct Node {
 *   int val;
 *   Node *left;
 *   Node *right;
 *   Node *next;
 * }
 * Populate each next pointer to point to its next right node. If there is no next right node,
 * the next pointer should be set to NULL.
 * Initially, all next pointers are set to NULL.
 */
var connect = function (root) {
  const queue = []
  if (root) queue.push(root)
  while (queue.length) {
    const length = queue.length
    for (i = 0; i < length; i++) {
      const node = queue.shift()
      const nextNode = queue[0]
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      node.next = i === length - 1 ? null : nextNode
    }
  }
  return root
};