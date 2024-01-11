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

function maxAncestorDiff(root: TreeNode | null): number {
  let res = 0;

  function recur(root: TreeNode | null, max: number, min: number) {
    if (root === null) return;

    const newMin = Math.min(min, root.val);
    const newMax = Math.max(max, root.val);

    res = Math.max(res, newMax - newMin);

    recur(root.left, newMax, newMin);
    recur(root.right, newMax, newMin);
  }

  recur(root, root.val, root.val);

  return res;
}
