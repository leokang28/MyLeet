/**
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 */

var replaceSpace = function (s) {
  if (!s) return s
  const reg = /\s/g
  const SPACE = '%20'
  return s.replace(reg, SPACE)
};