/**
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针random指向一个随机节点），请对此链表进行深拷贝，
 * 并返回拷贝后的头结点。(注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 */

function Clone(pHead) {
  const map = new Map()
  let pointer = pHead
  while (pointer) {
    map.set(pointer, new RandomListNode(pointer.label))
    pointer = pointer.next
  }
  pointer = pHead
  while (pointer) {
    map.get(pointer).next = map.get(pointer.next)
    map.get(pointer).random = map.get(pointer.random)
    pointer = pointer.next
  }
  return map.get(pHead)
  // write code here
}