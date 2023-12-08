class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  *constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sumOfLeftLeaves(root: TreeNode | null, isLeft = false): number {
  let sum = 0;
  if (root === null) {
    return 0;
  }
  if (!root.left && !root.right && isLeft) {
    sum += root.val;
  }
  sum += sumOfLeftLeaves(root.left, true);
  sum += sumOfLeftLeaves(root.right);

  return sum;
}
