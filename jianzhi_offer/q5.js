/**
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。
 * (若队列中没有元素，deleteHead 操作返回 -1 )
 */

var CQueue = function () {
  this.s1 = []
  this.s2 = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.s1.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  let ele = -1
  if (!this.s1.length) return ele
  while (this.s1.length) {
    this.s2.push(this.s1.pop())
  }
  ele = this.s2.pop()
  while (this.s2.length) {
    this.s1.push(this.s2.pop())
  }
  return ele
};