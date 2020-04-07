/**
 * Given an integer array arr, count element x such that x + 1 is also in arr.
 * If there're duplicates in arr, count them seperately.
 */

var countElements = function (arr) {
  let total = 0
  for (element of arr) {
    if (arr.indexOf(element + 1) > -1) total++
  }
  return total
};