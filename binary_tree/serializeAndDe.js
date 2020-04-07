/**
 * Serialization is the process of converting a data structure or object into a
 * sequence of bits so that it can be stored in a file or memory buffer, or transmitted
 * across a network connection link to be reconstructed later in the same or another computer environment.
 *
 * Design an algorithm to serialize and deserialize a binary tree.
 * There is no restriction on how your serialization/deserialization algorithm should work.
 * You just need to ensure that a binary tree can be serialized to a string and this string can
 * be deserialized to the original tree structure.
 */

//level order

function treeHeight(root) {
  if (!root) return 0
  return Math.max(treeHeight(root.left), treeHeight(root.right)) + 1
}

var serialize = function (root) {
  if (!root) return '[]'
  const _maxHeight = treeHeight(root)
  let height = 1
  const queue = []
  const result = []
  queue.push(root)
  while (queue.length) {
    const length = queue.length
    for (i = 0; i < length; i++) {
      const node = queue.shift()
      result.push(node ? node.val : null)
      if (!node) continue
      if (height === _maxHeight) {
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
      } else {
        queue.push(node.left)
        queue.push(node.right)
      }
    }
    height++
  }
  return JSON.stringify(result)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  data = JSON.parse(data)
  if (!data || data.length === 0) return null
  const queue = []
  const rootVal = data[0]
  const root = rootVal !== null ? new TreeNode(rootVal) : rootVal
  queue.push(root)
  let i = 1
  while (i < data.length) {
    const node = queue.shift()
    if (data[i] !== null) {
      node.left = new TreeNode(data[i])
      queue.push(node.left)
    } else {
      node.left = null
    }
    i++
    if (data[i] !== null) {
      node.right = new TreeNode(data[i])
      queue.push(node.right)
    } else {
      node.right = null
    }
    i++
  }
  return root
};