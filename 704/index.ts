/**
 * Given a sorted (in ascending order) integer array nums of n elements and a target
 * value, write a function to search target in nums. If target exists, then return its
 * index, otherwise return -1.
 */

function search(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;

  if (right < 0) return -1;
  while (left <= right) {
    let mid: number = (right + left) >> 1;
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
  }
  return -1;
};