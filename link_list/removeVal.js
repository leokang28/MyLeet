/**
 * Remove all elements from a linked list of integers that have value val.
 */

var removeElements = function (head, val) {
  const vnode = new ListNode(null)
  vnode.next = head
  let p = vnode
  while (p.next) {
    if (p.next.val === val) {
      const next = p.next
      p.next = next.next
      next.next = null
    } else p = p.next
  }
  return vnode.next
};