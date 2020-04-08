/**
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 * 
 * Valid operators are +, -, *, /. Each operand may be an integer or another expression.
 */

var evalRPN = function (tokens) {
  if (!tokens || tokens.length < 1) return 0
  const calc = {
    '+': (n1, n2) => n2 + n1,
    '-': (n1, n2) => n2 - n1,
    '*': (n1, n2) => n2 * n1,
    '/': (n1, n2) => (n2 / n1) | 0
  }
  const stack = []
  for (const element of tokens) {
    if (!calc[element]) {
      stack.push(+element)
    } else {
      const ans = calc[element](stack.pop(), stack.pop())
      console.log(ans)
      stack.push(ans)
    }
  }
  return stack.pop()
};