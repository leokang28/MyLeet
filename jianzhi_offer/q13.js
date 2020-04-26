/**
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分。
 */

var exchange = function (nums) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    while (nums[left] % 2 && left < right) {
      left++
    }
    while (!(nums[right] % 2) && left < right) {
      right--
    }
    if (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
    }
  }
  return nums
};