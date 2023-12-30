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

const memo = new Map<TreeNode, number>();

function rob(root: TreeNode | null): number {
  if (root === null) return 0;

  if (memo.has(root)) return memo.get(root);

  const doRob =
    root.val +
    (root.left ? rob(root.left.left) + rob(root.left.right) : 0) +
    (root.right ? rob(root.right.right) + rob(root.right.left) : 0);

  const dontRob = rob(root.left) + rob(root.right);

  const res = Math.max(doRob, dontRob);

  memo.set(root, res);

  return res;
}
