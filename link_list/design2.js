class MyDoubleLinkedList {
  constructor() {
    this.count = 0;
    this.dummyHead = new Node(-1);
    this.dummyTail = new Node(-1);
    this.dummyHead.next = this.dummyHead.prev = this.dummyTail;
    this.dummyTail.next = this.dummyTail.prev = this.dummyHead;
  }

  get(index) { //O(min(index, count-index))
    index = Math.min(index, this.count);
    return this.getNode(index).val;
  }

  getNode(index) {
    if (index < this.count - index) {
      return this.getFromHead(index);
    }
    return this.getFromTail(this.count - index - 1);
  }

  getFromHead(index) {
    let node = this.dummyHead;

    for (let i = 0; i <= index; i++) {
      node = node.next;
    }

    return node;
  }

  getFromTail(index) {
    let node = this.dummyTail;

    for (let i = 0; i <= index; i++) {
      node = node.prev;
    }

    return node;
  }

  addAtHead(val) {//O(1)
    this.addAtIndex(0, val);
  }

  addAtTail(val) {//O(1)
    this.addAtIndex(this.count, val);
  }

  addAtIndex(index, val) {//O(min(index, count-index))
    if (index > this.count) {
      return;
    }

    let target = this.getNode(index);
    let node = new Node(val);

    node.next = target;
    node.prev = target.prev;
    node.next.prev = node;
    node.prev.next = node;

    this.count++;
  }

  deleteAtIndex(index) {//O(min(index, count-index))
    if (index >= this.count) {
      return;
    }

    let target = this.getNode(index);
    console.log(target)
    target.next.prev = target.prev;
    target.prev.next = target.next;
    this.count--;
  }

  values() {
    const values = []
    let node = this.dummyHead.next
    while (node.val !== -1) {
      values.push(node.val)
      node = node.next
    }
    return values
  }

}

class Node {
  constructor(val) {
    this.val = val;
    this.next = this.prev = null;
  }
}

const list = new MyDoubleLinkedList()

function compose(obj, fucs, props) {
  for (let i = 0; i < fucs.length; i++) {
    obj[fucs[i]](...props[i])
  }
}

// compose(
//   list,
//   ["addAtHead", "addAtHead", "addAtHead", "addAtIndex", "deleteAtIndex", "addAtHead", "addAtTail", "get", "addAtHead", "addAtIndex", "addAtHead"],
//   [[7], [2], [1], [3, 0], [2], [6], [4], [4], [4], [5, 0], [6]]
// )
list.addAtHead(3)
list.addAtHead(2)
list.addAtHead(1)
// console.log(list.values())
list.deleteAtIndex(-3)
