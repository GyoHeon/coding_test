const obj = {
  N: [1, 0],
  S: [-1, 0],
  E: [0, 1],
  W: [0, -1],
};

function isPathCrossing(path: string): boolean {
  const dp = {
    "0,0": true,
  };
  const pos = [0, 0];

  for (let i of path) {
    const move = obj[i];
    pos[0] += move[0];
    pos[1] += move[1];
    const key = pos.join(",");
    if (dp[key]) return true;
    else dp[key] = true;
  }

  return false;
}
