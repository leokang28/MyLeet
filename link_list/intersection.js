/**
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 */

var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null
  let a = headA
  let b = headB
  while (a !== b) {
    a = a ? a.next : headB
    b = b ? b.next : headA
  }
  return a
};


// another solution with 2 stacks
function solution2(headA, headB) {
  let node = null
  const stackA = []
  const stackB = []
  let a = headA
  let b = headB
  while (a || b) {
    // stackA.push(a)
    if (a) {
      stackA.push(a)
      a = a.next
    }
    if (b) {
      stackB.push(b)
      b = b.next
    }
  }
  while (stackB.length && stackB.length) {
    const na = stackA.pop()
    const nb = stackB.pop()
    if (na !== nb) break
    node = na
  }
  return node
}