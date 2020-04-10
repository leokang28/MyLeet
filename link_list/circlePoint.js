/**
 * Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
 * 
 * To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) 
 * in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.
 */


var detectCycle = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      while (slow !== head) {
        slow = slow.next
        head = head.next
      }
      return head
    }
  }
  return null
};