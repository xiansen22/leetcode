/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (root === null) {
    return 0;
  }
  const leftMinDepth = minDepth(root.left);
  const rightMinDepth = minDepth(root.right);
  if (root.left === null && root.right !== null) {
    return 1 + rightMinDepth;
  }
  if (root.right === null && root.left !== null) {
    return 1 + leftMinDepth;
  }
  return Math.min(leftMinDepth, rightMinDepth) + 1;
};

// @lc code=end

const treeB = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: {
      val: 15,
        left: null,
        right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}
console.log(minDepth(treeB));