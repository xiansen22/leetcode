/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (root === null) {
    return [];
  }
  const que = [root];
  const array = [];
  while (que.length !== 0) {
    let list = [];
    const queCopy = que.slice();
    for (let i = 0, len = queCopy.length; i < len; i++) {
      const node = queCopy[i];
      list.push(node.val);

      const leftNode = node.left;
      const rightNode = node.right;
      if (leftNode !== null) {
        que.push(leftNode);
      }

      if (rightNode !== null) {
        que.push(rightNode);
      }
      que.shift();
    }
    list.length !== 0 && array.unshift(list);
  }
  return array;
};
// @lc code=end

const tree = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
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
console.log(levelOrderBottom(tree));