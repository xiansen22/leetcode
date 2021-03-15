/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const size = preorder.length;
  return build(preorder, inorder, 0, size - 1, 0, size - 1);
};

function build(preorder, inorder, preorder_left, preorder_right, inorder_left, inorder_right) {
  if (preorder_left > preorder_right) {
    return null;
  }
  // 先从前序遍历中找出根结点
  const preorder_root = preorder[preorder_left];
  //  再从中序遍历中找出左子树、右子树数量
  const inorder_root_index = inorder.indexOf(preorder_root);
  const leftCount = inorder_root_index - inorder_left;
  const root = new TreeNode(preorder_root);
  root.left = build(preorder, inorder, preorder_left + 1, preorder_left + leftCount, inorder_left, inorder_root_index - 1);
  root.right = build(preorder, inorder, preorder_left + leftCount + 1, preorder_right, inorder_root_index + 1, inorder_right);
  return root;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))