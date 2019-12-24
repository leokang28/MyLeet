/**
 * leetcode #709
 *
 * To Lower Case
 *
 * Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
 *
 */

function toLowerCase(str) {
  str = str.split('')
  str.map((letter, index) => {
    const charCode = letter.charCodeAt()
    if (charCode >= 65 && charCode <= 90) {
      str.splice(index, 1, String.fromCharCode(charCode + 32))
    }
  })
  return str.join('')
}
