/**
 * You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:
 * 
 *    direction can be 0 (for left shift) or 1 (for right shift).
 *    amount is the amount by which string s is to be shifted.
 *    A left shift by 1 means remove the first character of s and append it to the end.
 *    Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
 * 
 * Return the final string after all operations.
 */

var stringShift = function (s, shift) {
  return shift.reduce((pre, cur) => {
    const temp = []
    const strs = pre.split('')
    let [dir, amount] = cur
    if (dir) {
      while (amount) {
        temp.unshift(strs.pop())
        amount--
      }
      return [...temp, ...strs].join('')
    } else {
      while (amount) {
        temp.push(strs.shift())
        amount--
      }
      return [...strs, ...temp].join('')
    }
  }, s)
};