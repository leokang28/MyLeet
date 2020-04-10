/**
 * Reverse a singly linked list.
 */
// 迭代
var reverseList = function (head) {
  let h = head
  while (h && h.next) {
    let next = h.next
    h.next = next.next
    next.next = head
    head = next
  }
  return head
};

// 递归
var reverseListRecursively = function (head) {
  if (!head || !head.next) return head
  const h = reverseListRecursively(head.next)
  head.next.next = head
  head.next = null
  return h
}