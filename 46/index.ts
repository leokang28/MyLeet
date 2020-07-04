/**
 * Given a collection of distinct integers, return all possible permutations.
 */

function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const track: number[] = [];
  backtrack(nums, track, res);
  return res;
};

function backtrack(nums: number[], track: number[], res: number[][]): void {
  if (track.length === nums.length) {
    res.push([...track]);
    return;
  }
  for (const num of nums) {
    if (track.indexOf(num) > -1) {
      continue;
    }
    track.push(num);
    backtrack(nums, track, res);
    track.pop();
  }
}