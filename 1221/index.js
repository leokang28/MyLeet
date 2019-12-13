/**
 * leetcode #1221
 * 
 * Split a String in Balanced Strings
 * 
 * Balanced strings are those who have equal quantity of 'L' and 'R' characters.
 * Given a balanced string s split it in the maximum amount of balanced strings.
 * Return the maximum amount of splitted balanced strings.
 * 
 */

function balancedStringSplit(s) {
  let balanced = 0
  let count = 0
  for (const char of s) {
    if (char === 'L') balanced--
    if (char === 'R') balanced++
    if (balanced === 0) count++
  }
  return count
}

console.log(balancedStringSplit('LLRRRLLR'))