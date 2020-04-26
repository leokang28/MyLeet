/**
 * 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 */

function Merge(l1, l2) {
  let dummyhead = new ListNode(null)
  let pointer = dummyhead
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      pointer.next = l1
      l1 = l1.next
    } else {
      pointer.next = l2
      l2 = l2.next
    }
    pointer = pointer.next
  }
  pointer.next = l1 || l2
  return dummyhead.next
}