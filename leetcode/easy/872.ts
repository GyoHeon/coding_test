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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  return makeLeafArr(root1) === makeLeafArr(root2);
}

function makeLeafArr(root: TreeNode | null) {
  let answer = "";
  if (!root) return;
  function recur(node: TreeNode) {
    if (node.left) {
      recur(node.left);
    }
    if (node.right) {
      recur(node.right);
    }
    if (!(node.left || node.right)) {
      answer += node.val + " ";
    }
  }

  recur(root);

  return answer;
}
