/**
 * 寻找两个正序数组的中位数
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。
 * 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
 * 
 * 示例 1：
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;

  if (n < m) {
    let temp = nums2;
    nums2 = nums1;
    nums1 = temp;

    let t = m;
    m = n;
    n = t;
}

  let min = 0;
  let max = m;
  let i;
  let j;
  let halfLen = Math.ceil((m + n) / 2);

  while (min <= max) {
    i = Math.ceil((min + max) / 2);
    j = halfLen - i;

    if ( i > min && nums1[i - 1] > nums2[j]) {
      max = i - 1;
    } else if ( i < max && nums2[j - 1] > nums1[i]) {
      min = i + 1;
  } else {
      let maxLeft;
      if (i === 0) {
        maxLeft = nums2[j - 1];
      } else if (j === 0) {
        maxLeft = nums1[i - 1]
      } else {
        maxLeft = Math.max(nums1[i - 1] , nums2[j - 1]);
      }
      if ((m + n) % 2 === 1) {
        return maxLeft;
      }
      let minRight;
      if (i === m) {
        minRight = nums2[j]
      } else if (j === n) {
        minRight = nums1[i]
      } else {
        minRight = Math.min(nums1[i] , nums2[j]);
      }
      return (minRight + maxLeft) / 2;
    }
  }
  return 0;
};

nums1 = [1,3], nums2 = [2]
const result = findMedianSortedArrays(nums1, nums2);
console.log(result);