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

function maxDepth(root: TreeNode | null): number {
  let answer = 0;
  const dfs = (node: TreeNode | null, floor: number) => {
    if (node === null) return floor;
    answer = Math.max(floor, answer);
    dfs(node.left, floor + 1);
    dfs(node.right, floor + 1);
  };
  dfs(root, 1);
  return answer;
}
