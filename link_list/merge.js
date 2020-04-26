/**
 * Merge two sorted linked lists and return it as a new list. The new list should be made by
 * splicing together the nodes of the first two lists.
 * 
 */

var mergeTwoLists = function (l1, l2) {
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
};