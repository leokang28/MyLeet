/**
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 */

var reversePrint = function (head) {
  if (!head) return []
  const list = []
  // while()
  let pointer = head
  while (pointer) {
    list.unshift(pointer.val)
    pointer = pointer.next
  }

  return list

};