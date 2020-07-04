/**
 * Given a string, find the length of the longest substring without repeating characters.
 */

function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let right = 0;
  let max_len = 0;
  const window: Map<string, number> = new Map<string, number>();
  while (right < s.length) {
    const char_r = s[right];
    right++;
    window.set(char_r, mapGet(window, char_r) + 1);

    while (mapGet(window, char_r) > 1) {
      const char_l = s[left];
      left++;
      if (window.has(char_l)) {
        window.set(char_l, mapGet(window, char_l) - 1);
      }
    }

    max_len = Math.max(max_len, right - left);
  }

  return max_len;
};

function mapGet(map: Map<string, number>, key: string): number {
  return map.get(key) || 0;
}