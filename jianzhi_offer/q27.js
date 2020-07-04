/**
 * 输入一个字符串，打印出该字符串中字符的所有排列。
 */

var permutation = function (str) {
  if (str.length < 2) return [str];
  return [...new Set(str.split('').reduce((acc, letter, i) => acc.concat(permutation(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []))]
};

/**
 * dfs剪枝
 */

function Permutation(str) {
  let res = []
  str = str.split('')
  dfs(0, str, res)
  return res
}

function dfs(index, str, result) {
  if (index === str.length - 1) {
    result.push(str.join(''))
    return
  }
  let set = new Set()
  for (let i = index; i < str.length; i++) {
    if (set.has(str[i])) continue
    set.add(str[i])
    swap(i, index, str)
    dfs(index + 1, str, result)
    swap(i, index, str)
  }
}

function swap(x, y, str) {
  const temp = str[x]
  str[x] = str[y]
  str[y] = temp
}

