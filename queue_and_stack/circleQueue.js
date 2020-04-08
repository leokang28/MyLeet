
/**
 * Design your implementation of the circular queue. The circular queue is a linear data structure
 * in which the operations are performed based on FIFO (First In First Out) principle and the last
 * position is connected back to the first position to make a circle. It is also called "Ring Buffer".
 * 
 * One of the benefits of the circular queue is that we can make use of the spaces in front of the queue.
 * In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a
 * space in front of the queue. But using the circular queue, we can use the space to store new values.
 */

var MyCircularQueue = function (k) {
  this._queue = Array(k)
  this._head = -1
  this._rear = -1
  this._size = 0
  this._length = k
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false
  if (this.isEmpty()) this._head = 0

  this._rear = (++this._rear) % this._length
  this._queue[this._rear] = value
  ++this._size
  return true
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false

  this._size--
  if (this.isEmpty()) {
    this._head = this._rear = -1
  } else {
    this._head = (++this._head) % this._length
  }
  return true
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this._queue[this._head]
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.isEmpty() ? -1 : this._queue[this._rear]
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this._size === 0
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this._size === this._length
};