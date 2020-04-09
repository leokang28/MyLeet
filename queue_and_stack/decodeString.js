/**
 * Given an encoded string, return its decoded string.
 * 
 * he encoding rule is: k[encoded_string], where the encoded_string inside the square brackets
 * is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
 * 
 * You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
 * 
 * Furthermore, you may assume that the original data does not contain any digits and that digits
 * are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const chars = []
  const numbers = []
  let temp = 0
  for (const char of s) {
    if (char.match(/\d/)) {
      temp = temp * 10 + parseInt(char)
    } else {
      temp && numbers.push(temp)
      temp = 0
      if (char.match(/\]/)) {
        let str = ''
        let c = chars.pop()
        while (!c.match(/\[/)) {
          str = c + str
          c = chars.pop()
        }
        const num = numbers.pop()
        chars.push(str.repeat(num))
      } else {
        chars.push(char)
      }
    }
  }
  return chars.join('')
}

console.log(decodeString('3[a2[b]]'))
console.log(decodeString('3[a]2[bc]'))
console.log(decodeString('2[abc]3[cd]ef'))
console.log(decodeString("3[a]2[b4[F]c]"))
console.log(decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef"))