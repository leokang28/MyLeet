/**
 * leetcode #1266
 *
 * Minimum Time Visiting All Points
 *
 * On a plane there are n points with integer coordinates points[i] = [xi, yi].
 * Your task is to find the minimum time in seconds to visit all points.
 * You can move according to the next rules:
 *    In one second always you can either move vertically, horizontally by one unit or
 *    diagonally (it means to move one unit vertically and one unit horizontally in one second).
 *
 *    You have to visit the points in the same order as they appear in the array.
 */

function minTimeToVisitAllPoints(points) {
  return points.reduce((pre, cur, index, arr) => {
    if (index === arr.length - 1) return pre
    return pre + p2pTime(cur, arr[index + 1])
  }, 0)
}

function p2pTime(p1, p2) {
  if (p1[0] - p2[0] === p1[1] - p2[1]) {
    return Math.abs(p1[0] - p2[0])
  } else {
    return Math.max(Math.abs(p1[0] - p2[0]), Math.abs(p1[1] - p2[1]))
  }
}

console.log(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]]))

// console.log(p2pTime([1, 1], [3, 3]), p2pTime([1, 2], [4, 6]))