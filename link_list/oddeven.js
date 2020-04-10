/**
 * Given a singly linked list, group all odd nodes together followed by the even nodes.
 * Please note here we are talking about the node number and not the value in the nodes.
 */

const LinkList = require('./design')

var oddEvenList = function (head) {
  if (!head) return head
  let odd = head
  let even = head.next
  const evenHead = even
  while (even && even.next) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = evenHead
  return head
};

const list = new LinkList()
list.addAtHead(5)
list.addAtHead(4)
list.addAtHead(3)
list.addAtHead(2)
list.addAtHead(1)
console.log(list.values())
oddEvenList(list.head)
console.log(list.values())