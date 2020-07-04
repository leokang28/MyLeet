/**
 * Given two strings s1 and s2, write a function to return true if s2 contains
 * the permutation of s1. In other words, one of the first string's permutations
 * is the substring of the second string.
 */
function checkInclusion(s1: string, s2: string): boolean {
  const target: Map<string, number> = new Map<string, number>();
  const window: Map<string, number> = new Map<string, number>();

  for (const char of s1) {
    target.set(char, mapGet(target, char) + 1);
  }
  let left: number = 0;
  let right: number = 0;
  let valid: number = 0;
  while (right <= s2.length) {
    const char = s2[right];
    right++;
    if (target.has(char)) {
      window.set(char, mapGet(window, char) + 1);
      if (target.get(char) === window.get(char)) {
        valid++;
      }
    }
    while (right - left === s1.length) {
      if (valid === target.size) return true;
      const char = s2[left];
      left++;
      if (target.has(char)) {
        if (target.get(char) === window.get(char)) {
          valid--;
        }
        window.set(char, mapGet(window, char) - 1);
      }
    }
  }
  return false;
};


function mapGet(map: Map<string, number>, key: string): number {
  return map.get(key) || 0;
}

