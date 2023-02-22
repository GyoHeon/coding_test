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

function isValidBST(root: TreeNode | null): boolean {
  let answer = true;
  let before = -Infinity;

  const checkTree = (node: TreeNode | null) => {
    if (!node) return;

    checkTree(node.left);
    if (node.val <= before) {
      answer = false;
      return;
    }
    before = node.val;

    checkTree(node.right);
  };

  checkTree(root);
  return answer;
}
