class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let sum = 0;
  if (root === null) return sum;

  if (root.val >= low && root.val <= high) sum += root.val;

  return (
    sum + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
  );
}
