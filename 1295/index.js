/**
 *  leetcode #1295
 *
 *  Given an array nums of integers, return how many of them contain an even number of digits.
 * 
 */

const findNumbers = function (nums) {
  let count = 0
  nums.map(num => {
    (String(num).length % 2) ? null : count++
  })
  return count
}