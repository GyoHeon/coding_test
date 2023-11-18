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

function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  const answer = [];

  function trace(node: TreeNode) {
    if (node.left) {
      trace(node.left);
    }
    answer.push(node.val);
    if (node.right) {
      trace(node.right);
    }
  }

  trace(root);

  return answer;
}
