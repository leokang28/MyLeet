/**
 * 输入一个链表，反转链表后，输出新链表的表头。
 */

function ReverseList(head) {
  let h = head
  while (h && h.next) {
    let next = h.next
    h.next = next.next
    next.next = head
    head = next
  }
  return head
}