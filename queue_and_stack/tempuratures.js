/**
 * Given a list of daily temperatures T, return a list such that, for each day in the input,
 * tells you how many days you would have to wait until a warmer temperature. If there is no
 * future day for which this is possible, put 0 instead.
 */

var dailyTemperatures = function (T) {
  const stack = []
  const days = Array.from(new Int32Array(T.length))
  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]])
      days[stack[stack.length - 1]] = i - stack.pop()
    stack.push(i)
  }
  return days
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])