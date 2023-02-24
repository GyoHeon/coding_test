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

function levelOrder(root: TreeNode | null): number[][] {
  const answer: number[][] = [];
  if (!root) return answer;
  let queue: TreeNode[] = [root];
  while (queue.length) {
    const temp: TreeNode[] = [...queue];
    const tempAnswer: number[] = [];
    queue = [];
    temp.forEach((node: TreeNode) => {
      tempAnswer.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    });
    answer.push(tempAnswer);
  }

  return answer;
}
