function minWindow(s: string, t: string): string {
  if (!s || !t) return '';

  const target: Map<string, number> = new Map<string, number>();
  const window: Map<string, number> = new Map<string, number>();

  for (const char of t) {
    target.set(char, mapGet(target, char) + 1);
  }
  let left: number = 0;
  let right: number = 0;
  let start: number = 0;
  let valid: number = 0;
  let len: number = s.length + 1;
  while (right <= s.length) {
    const char = s[right];
    right++;
    if (target.has(char)) {
      window.set(char, mapGet(window, char) + 1);
      if (target.get(char) === window.get(char)) {
        valid++;
      }
    }
    while (valid === target.size) {
      if (right - left < len) {
        len = right - left;
        start = left;
      }
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
  return len === s.length + 1 ? '' : s.substr(start, len);
};


function mapGet(map: Map<string, number>, key: string): number {
  return map.get(key) || 0;
}