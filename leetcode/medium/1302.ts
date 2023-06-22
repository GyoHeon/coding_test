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

function deepestLeavesSum(root: TreeNode): number {
  const visited: number[][] = [];

  function bfs(node: TreeNode, floor: number) {
    if (!visited[floor]) {
      visited[floor] = [];
    }
    visited[floor].push(node.val);

    if (node.left) {
      bfs(node.left, floor + 1);
    }
    if (node.right) {
      bfs(node.right, floor + 1);
    }
    return;
  }

  bfs(root, 0);

  return visited[visited.length - 1].reduce((acc, cur) => acc + cur);
}
