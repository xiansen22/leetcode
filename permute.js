/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 */
var permute = function(nums) {
  const res = [];
  const track = [];
  const trackIndex = [];
  backtrack(nums, trackIndex, track, res);
  return res;
};

function backtrack(nums, trackIndex, track, res) {
  if (track.length === nums.length) {
    res.push(track.slice());
    return;
  }
  for (let i = 0, len = nums.length; i < len; i++) {
    const item = nums[i];
    if (trackIndex.indexOf(i) !== -1) {
      continue;
    }
    track.push(item);
    trackIndex.push(i);
    backtrack(nums, trackIndex, track, res, cache);
    track.pop();
    trackIndex.pop();
  }
}

const res = permute([1,2,3]);
console.log(res);