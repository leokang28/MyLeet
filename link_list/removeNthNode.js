/**
 * Given a linked list, remove the n-th node from the end of list and return its head.
 */

var removeNthFromEnd = function (head, n) {
  let front = head
  let after = head
  while (n && after) {
    after = after.next
    n--
  }
  if (n) {
    throw new Error('out of range')
  }
  if (!after) return head.next
  while (after.next) {
    front = front.next
    after = after.next
  }
  front.next = front.next.next
  return head
};
