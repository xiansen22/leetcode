/**
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
 * 如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 */

var minWindow = function(s, t) {
  const len = s.length;
  let right = 0;
  let left = 0;
  let res = '';
  let result = '';

  while (right < len) {
    right++;
    let str = s.substr(left, right - left);
    if (hasown(str, t)) {
      while (hasown(str, t)) {
        left++;
        res = str;
        str = s.substr(left, right - left);
      }
      if (result !== '' && result.length < res.length) {
        res = result;
      }
      result = res;
    }
  }
  return res;
};

function hasown(s, t) {
  if (s.length < t.length) {
    return false;
  }
  s = s.split('');
  for (let i = 0, len = t.length; i < len; i++) {
    const index = s.indexOf(t[i]);
    if (index === -1) {
      return false;
    }
    s.splice(index, 1);
  }
  return true;
}

const res = minWindow("cabwefgewcwaefgcf", "cae");
console.log(res);