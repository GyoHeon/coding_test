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

function binaryTreePaths(root: TreeNode | null, path = ""): string[] {
  const answer: string[] = [];
  if (root === null) {
    return [];
  }
  path += (path ? "->" : "") + root.val;
  if (!root.left && !root.right) {
    answer.push(path);
  } else {
    answer.push(...binaryTreePaths(root.left, path));
    answer.push(...binaryTreePaths(root.right, path));
  }

  return answer;
}
