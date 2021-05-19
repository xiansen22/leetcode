/**
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
 */

var permuteUnique = function(nums) {
  const res = [];
  const track = [];
  const cache = {};
  const trackIndex = [];
  backtrack(nums, trackIndex, track, res, cache);
  return res;
};

function backtrack(nums, trackIndex, track, res, cache) {
  const len = nums.length;
  if (track.length === len) {
    const trackSlice = track.slice();
    const trackString = track.toString();
    if (cache[trackString]) {
      return;
    }
    res.push(trackSlice);
    cache[trackString] = true;
    return;
  }
  for (let i = 0; i < len; i++) {
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

const res = permuteUnique([1,1,3]);
console.log(res);


function permuteUnique(nums) {
  const res = [];
  const cache = {};
  return backtrack(nums, cache)
}
function backtrack(nums, cache) {
  
}