/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
  return this;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (root === null) {
    return true;
  }
  return Math.abs(helper(root.left) - helper(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

function helper(node) {
  if (node === null) {
    return 0;
  }
  return Math.max(helper(node.left), helper(node.right)) + 1;
}

// @lc code=end
const treeA = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4,
        left: null,
        right: null
      },
      right: null
    },
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: {
      val: 7,
      left: null,
      right: {
        val: 15,
        left: null,
        right: null
      }
    }
  }
}
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
console.log(isBalanced(treeB));