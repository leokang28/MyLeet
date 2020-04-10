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
// list.addAtHead(6)
// list.addAtHead(5)
// list.addAtHead(4)
// list.addAtHead(3)
list.addAtHead(2)
list.addAtHead(1)
// console.log(list.values())
// oddEvenList(list.head)
// console.log(list.values())
var middleNode = function (head) {
  let one_step = head
  let two_step = head
  while (two_step && two_step.next) {
    two_step = two_step.next.next
    one_step = one_step.next
  }
  return one_step
};

let node = middleNode(list.head)
console.log(node)