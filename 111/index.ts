/**
 * Given a binary tree, find its minimum depth.
 * 
 * The minimum depth is the number of nodes along the shortest
 * path from the root node down to the nearest leaf node.
 * 
 * Note: A leaf is a node with no children.
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const queue: TreeNode[] = [];
  let depth: number = 1;
  queue.push(root)
  while (queue.length > 0) {
    let length: number = queue.length;
    for (let i = 0; i < length; i++) {
      const node: TreeNode | undefined = queue.shift();
      if (node && !node.left && !node.right) return depth;
      if (node && node.left) queue.push(node.left);
      if (node && node.right) queue.push(node.right);
    }
    depth++;
  }
  return depth;
};