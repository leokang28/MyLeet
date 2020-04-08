/**
 * You are given a list of non-negative integers, a1, a2, ..., an, and a target, 
 * S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
 * 
 * Find out how many ways to assign symbols to make sum of integers equal to target S.
 */

var findTargetSumWays = function (nums, S) {
  if (!nums || nums.length === 0) return 0
  return DFS(0, 0, new Map(), nums, S)
};

function DFS(i, sum, hash, nums, S) {
  const key = `${i}->${sum}`
  if (hash.get(key)) return hash.get(key)
  if (i === nums.length) {
    return sum === S
      ? 1
      : 0
  }
  let add = DFS(i + 1, sum + nums[i], hash, nums, S)
  let minus = DFS(i + 1, sum - nums[i], hash, nums, S)
  hash.set(key, add + minus)
  return hash.get(key)
}