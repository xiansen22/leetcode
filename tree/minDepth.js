/**
 * 给定一个二叉树，找出其最小深度。
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 */

var minDepth = function(root) {
  if (!root) {
    return 0;
  }

  const leftMinDepth = minDepth(root.left);
  const rightMinDepth = minDepth(root.right);
  if (root.left === null && root.right !== null) {
    return  rightMinDepth + 1;
  }
  if (root.right === null && root.left !== null) {
    return leftMinDepth + 1;
  }
  return Math.min(leftMinDepth, rightMinDepth) + 1;
}