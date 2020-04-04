/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 */

const maxSubArray = function (nums) {
  let cur = nums[0]
  let max = nums[0]
  for (element of nums.slice(1)) {
    cur = Math.max(cur + element, element)
    max = Math.max(cur, max)
  }
  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))