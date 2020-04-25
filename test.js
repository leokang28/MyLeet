var findTargetSumWays = function (nums, S) {
  if (!nums || nums.length === 0) { return count; }

  return helper(0, 0, {}, nums, S);
};

var helper = function (pos, sum, hash, nums, S) {
  let key = `${pos}->${sum}`;
  if (hash.hasOwnProperty(key)) { return hash[key]; }
  if (pos === nums.length) { return sum === S ? 1 : 0; }

  let add = helper(pos + 1, sum + nums[pos], hash, nums, S);
  let minus = helper(pos + 1, sum - nums[pos], hash, nums, S);
  hash[key] = add + minus;

  return add + minus;
};


findTargetSumWays([], 5)