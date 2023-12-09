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

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  function recur(left: TreeNode | null, right: TreeNode | null) {
    if (left === right) return true;
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;
    return recur(left.left, right.right) && recur(left.right, right.left);
  }

  return recur(root.left, root.right);
}
