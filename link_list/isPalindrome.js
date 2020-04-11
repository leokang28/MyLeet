const LinkList = require('./design')

const link = new LinkList()
link.addAtHead(1)
link.addAtHead(2)
link.addAtHead(2)
link.addAtHead(1)
var isPalindrome = function (head) {
  if (!head || !head.next) return true
  let fast = head
  let slow = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  if (fast) {
    slow = slow.next
  }

  slow = reverse(slow)
  while (slow) {
    if (slow.val !== head.val) return false
    slow = slow.next
    head = head.next
  }
  return true
};

function reverse(head) {
  let h = head
  while (h && h.next) {
    let next = h.next
    h.next = next.next
    next.next = head
    head = next
  }
  return head
}

isPalindrome(link.head)

console.log(link.values())