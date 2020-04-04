/**
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 */

/**
* @param {number[]} nums
* @return {number}
*/

const singleNumber = function (nums) {
  return nums.reduce((pre, cur) => pre ^ cur, 0)
}

console.log(singleNumber([1, 2, 1, 4, 2]))