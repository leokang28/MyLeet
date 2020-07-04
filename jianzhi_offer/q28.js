/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 */

var majorityElement = function (nums) {
  if (nums.length === 0) return 0
  let v = 0
  let res = 0
  for (const i of nums) {
    if (v === 0) res = i
    v += i === res ? 1 : -1
  }
  let count = 0
  for (const i of nums) {
    if (res === i) count++
  }
  return count > nums.length / 2 ? res : 0
};