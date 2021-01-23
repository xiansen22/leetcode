/**
 * 给定一个二叉树，检查它是否是镜像对称的。
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function sameNode(p, q) {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
  return p.val === q.val && sameNode(p.left, q.right) && sameNode(p.right, q.left);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return sameNode(root, root);
};