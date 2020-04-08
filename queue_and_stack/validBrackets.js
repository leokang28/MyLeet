/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 *    Open brackets must be closed by the same type of brackets.
 *    Open brackets must be closed in the correct order.
 *    Note that an empty string is also considered valid.
 */

const SQUARE = '['
const SQUARE_CLOSE = ']'
const CURLY = '{'
const CURLY_CLOSE = '}'
const ROUND = '('
const ROUND_CLOSE = ')'

const map = new Map([
  [SQUARE, SQUARE_CLOSE],
  [CURLY, CURLY_CLOSE],
  [ROUND, ROUND_CLOSE]
])

const isValid = function (s) {
  const stack = []
  for (const char of s) {
    if (map.get(char)) {
      stack.push(char)
    } else {
      if (map.get(stack.pop()) !== char) return false
    }
  }
  return !stack.length
};