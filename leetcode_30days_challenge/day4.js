/**
 * Given an array nums, write a function to move all 0's to the end of
 * it while maintaining the relative order of the non-zero elements.
 */

const moveZeroes = function (nums) {
  let length = nums.length
  let zeroes = []
  for (i = 0; i < length;) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      zeroes.push(0)
      length--
    } else {
      i++
    }
  }
  return nums.push(...zeroes)
}

console.log(moveZeroes([0, 1, 0, 3, 12]))