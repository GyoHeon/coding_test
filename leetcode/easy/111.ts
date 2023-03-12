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

function minDepth(root: TreeNode | null): number {
  let answer = 0;
  if (!root) return 0;

  let queue = [root];
  while (queue.length) {
    answer++;
    const temp = [...queue];
    queue = [];
    for (let node of temp) {
      if (!node.left && !node.right) return answer;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return answer;
}
