/**
 * Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
 * 
 * Strings consists of lowercase English letters only and the length of both strings s and p
 * will not be larger than 20,100.
 * 
 * The order of output does not matter.
 */
function findAnagrams(s: string, p: string): number[] {
  const target: Map<string, number> = new Map<string, number>();
  const window: Map<string, number> = new Map<string, number>();

  for (const char of p) {
    target.set(char, mapGet(target, char) + 1);
  }

  let left = 0;
  let right = 0;
  let valid = 0;

  const res: number[] = [];

  while (right < s.length) {
    const char = s[right];
    right++;

    if (target.has(char)) {
      window.set(char, mapGet(window, char) + 1)
      if (window.get(char) === target.get(char)) {
        valid++;
      }
    }

    while (right - left === p.length) {
      if (valid === target.size) res.push(left);
      const char = s[left];
      left++;
      if (target.has(char)) {
        if (target.get(char) === window.get(char)) {
          valid--;
        }
        window.set(char, mapGet(window, char) - 1);
      }
    }
  }

  return res;
};

function mapGet(map: Map<string, number>, key: string): number {
  return map.get(key) || 0;
}