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
var maxDepth = function(root) {
 return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

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
console.log(maxDepth(treeB))