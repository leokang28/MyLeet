/**
 * Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.
 */

var findMaxLength = function (nums) {
  let hash = { 0: -1 };
  let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) count--;
    else count++;

    if (hash[count] != null) max = Math.max(max, i - hash[count]);
    else hash[count] = i
  }
  return max;
};