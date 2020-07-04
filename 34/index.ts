/**
 * Given an array of integers nums sorted in ascending order, find the
 * starting and ending position of a given target value.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * If the target is not found in the array, return [-1, -1].
 */

function searchRange(nums: number[], target: number): number[] {
  return [searchLeft(nums, target), searchRight(nums, target)];
};

function searchLeft(nums: number[], target: number): number {
  if (nums.length === 0) return -1;
  let left: number = 0;
  let right: number = nums.length - 1;
  while (left <= right) {
    let mid: number = (left + right) >> 1;
    if (nums[mid] === target) right = mid - 1;
    else if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
  }
  if (left >= nums.length || nums[left] !== target) return -1
  return left;
}

function searchRight(nums: number[], target: number): number {
  if (nums.length === 0) return -1;
  let left: number = 0;
  let right: number = nums.length - 1;
  while (left <= right) {
    let mid: number = (left + right) >> 1;
    if (nums[mid] === target) left = mid + 1;
    else if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
  }
  if (right < 0 || nums[right] !== target) return -1;
  return right;
}