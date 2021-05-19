/**
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 */

var inorderTraversal = function(root) {
  if (root == null) {
    return [];
  }
  const res = [];
  inorder(root, res);
  return res;
};

function inorder(root, res) {
  if (!root) {
    return;
  }
  inorder(root.left, res);
  res.push(root.val);
  inorder(root.right, res);
}
