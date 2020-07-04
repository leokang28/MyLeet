/**
 * 输入整数数组 arr ，找出其中最小的 k 个数。
 */

var getLeastNumbers = function (arr, k) {
  if (!k || k > arr.length) return []
  arr = quick(arr)
  return arr.slice(0, k + 1)
};



function quick(arr) {
  if (arr.length < 2) return arr
  const left = []
  const right = []
  let pivot = arr.pop()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return [...quick(left), pivot, ...quick(right)]
}

getLeastNumbers([3, 2, 1], 2)
// console.log(quick([3, 2, 1]))