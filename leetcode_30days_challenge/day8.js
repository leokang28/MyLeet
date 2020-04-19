/**
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list.
 * 
 * If there are two middle nodes, return the second middle node.
 */

var middleNode = function (head) {
  let one_step = head
  let two_step = head
  while (two_step && two_step.next) {
    two_step = two_step.next.next
    one_step = one_step.next
  }
  return one_step
}