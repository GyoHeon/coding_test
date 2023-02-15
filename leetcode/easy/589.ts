class CustomNode {
  val: number;
  children: CustomNode[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

function preorder(root: CustomNode | null): number[] {
  const answer: number[] = [];
  const dfs = (node: CustomNode | null) => {
    if (node) {
      answer.push(node.val);
      for (let i of node.children) {
        dfs(i);
      }
    } else {
      return;
    }
  };
  dfs(root);
  return answer;
}
