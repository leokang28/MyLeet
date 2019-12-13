/**
 * leetcode #771
 * 
 * Jewels and Stones
 * 
 * You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
 * Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
 * The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, 
 * so "a" is considered a different type of stone from "A".
 */

function numJewelsInStones(J, S) {
  if (J.length === 0 || S.length === 0) return 0
  const ar_j = J.split('')
  const ar_s = S.split('')
  let count = 0
  ar_j.map(jewel => {
    ar_s.map(stone => {
      if (jewel === stone) {
        count++
      }
    })
  })
  return count
}