function Node(val) {
  this.val = val
  this.next = null
}
var MyLinkedList = function () {
  this.head = null
  this.size = 0
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let node = this.head
  while (node && index) {
    node = node.next
    index--
  }
  return node ? node.val : -1
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val)
  if (this.head) {
    node.next = this.head
    this.head = node
  } else {
    this.head = node
  }
  this.size++
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val)
  if (!this.head) this.head = node
  else {
    let next = this.head
    while (next && next.next) {
      next = next.next
    }
    next.next = node
  }
  this.size++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size || index < 0) return
  if (index === this.size) return this.addAtTail(val)
  if (index === 0) return this.addAtHead(val)
  const node = new Node(val)
  let next = this.head
  const stack = []
  while (next && index) {
    stack.push(next)
    next = next.next
    index--
  }
  node.next = next
  stack.pop().next = node
  this.size++
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size || index < 0 || !this.size) return
  // if (this.size === 1) this.head = null
  if (index === 0) {
    this.head = this.head.next
  }
  else {
    let node = this.head
    const stack = []
    while (index) {
      stack.push(node)
      node = node.next
      index--
    }
    stack.pop().next = node.next
    node.next = null
  }
  this.size--
};

MyLinkedList.prototype.reverse = function () {
  let head = this.head
  while (head && head.next) {
    let next = head.next
    head.next = next.next
    next.next = this.head
    this.head = next
  }
}

MyLinkedList.prototype.reverseRecursively = function (h) {
  let head = h || this.head
  if (!head || !head.next) return
  let next = head.next
  head.next = next.next
  next.next = this.head
  this.head = next
  this.reverseRecursively(head)
}

MyLinkedList.prototype.values = function () {
  let node = this.head
  const list = []
  while (node) {
    list.push(node.val)
    node = node.next
  }
  return list
}


function help(link) {
  let node = link.head
  const list = []
  while (node) {
    list.push(node.val)
    node = node.next
  }
  console.log(list)
}

function compose(obj, fucs, props) {
  for (let i = 0; i < fucs.length; i++) {
    obj[fucs[i]](...props[i])
    help(obj)
  }
}

// const list = new MyLinkedList()
// compose(
//   list,
//   ["addAtHead", "addAtIndex", "get", "addAtHead", "get", "addAtHead", "get", "get", "addAtIndex", "addAtTail", "addAtHead"],
//   [[0], [1, 1], [2], [4], [2], [4], [2], [3], [1, 6], [1], [0]]
// )
// list.addAtHead(3)
// list.addAtHead(2)
// list.addAtHead(1)

// help(list)

// list.reverseRecursively()

// help(list)

module.exports = MyLinkedList