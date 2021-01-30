/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
  return this;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return helper(nums, 0, nums.length - 1);
};

function helper(nums, left, right) {
  if (left > right) {
    return null;
  }
  const mid = Math.ceil((right + left) / 2);
  const data = nums[mid];
  const node = new TreeNode(data);
  node.left = helper(nums, left, mid - 1);
  node.right = helper(nums, mid + 1, right);
  return node;
}

console.log(sortedArrayToBST([-10,-3,0,5,9]));
