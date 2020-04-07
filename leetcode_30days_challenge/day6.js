/**
 * Given an array of strings, group anagrams together.
 */

var groupAnagrams = function (strs) {
  const map = new Map()
  for (element of strs) {
    const _s = element.split('').sort().join('')
    // map.has('a')
    if (map.has(_s)) {
      map.get(_s).push(element)
    } else {
      map.set(_s, [element])
    }
  }
  return [...map.values()]
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))