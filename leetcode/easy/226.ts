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

function tree2str(root: TreeNode | null, answer: string = ""): string {
  if (root === null) {
    return answer;
  }
  answer += root.val;
  if (root.left) {
    answer += "(";
    answer = tree2str(root.left, answer);
    answer += ")";
  }
  if (root.right) {
    if (!root.left) {
      answer += "()";
    }
    answer += "(";
    answer = tree2str(root.right, answer);
    answer += ")";
  }

  return answer;
}
