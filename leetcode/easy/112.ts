  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if(!root) return false;

  const remain = targetSum - root.val;
  if (!root.left && !root.right) {
      if (remain === 0) {
          return true;
      }
  }

  return hasPathSum(root.left, remain) || hasPathSum(root.right, remain);
};