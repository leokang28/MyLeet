/**
 * Given a reference of a node in a connected undirected graph.
 * 
 * Return a deep copy (clone) of the graph.
 * 
 * Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
 * 
 * class Node {
 *    public int val;
 *    public List<Node> neighbors;
 * }
 */

var cloneGraph = function (node) {
  if (!node) return null
  const stack = []
  const map = new Map()
  map.set(node.val, new Node(node.val, []))
  stack.push(node)
  while (stack.length) {
    const node = stack.pop()
    for (const neighbor of node.neighbors) {
      if (!map.has(neighbor.val)) {
        const newNode = new Node(neighbor.val, [])
        stack.push(neighbor)
        map.set(newNode.val, newNode)
      }
      map.get(node.val).neighbors.push(map.get(neighbor.val))
    }
  }
  return map.get(node.val)
};