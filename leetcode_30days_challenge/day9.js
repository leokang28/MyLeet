/**
 * Given two strings S and T, return if they are equal when both are typed into empty text editors. 
 * # means a backspace character.
 * 
 * Note that after backspacing an empty text, the text will continue empty.
 */

var backspaceCompare = function (S, T) {
  function reducer(pre, cur) {
    cur === '#' ? pre.pop() : pre.push(cur)
    return pre
  }
  return S.split('').reduce(reducer, []).join('') === T.split('').reduce(reducer, []).join('')
};