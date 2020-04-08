/**
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 * push(x) -- Push element x onto stack.
 * pop() -- Removes the element on top of the stack.
 * top() -- Get the top element.
 * getMin() -- Retrieve the minimum element in the stack.
 */

var MinStack = function () {
  this._stack = []
  this._min = Number.MAX_SAFE_INTEGER
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this._stack.push(x)
  this._min = Math.min(x, this._min)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const pop = this._stack.pop()
  if (pop === this._min) {
    this._min = Number.MAX_SAFE_INTEGER
    for (const element of this._stack) {
      console.log(element)
      this._min = Math.min(element, this._min)
    }
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this._stack[this._stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this._min
};