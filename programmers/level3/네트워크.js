function solution(n, computers) {
  const visit = computers.reduce((acc, cur, idx) => {
    acc[idx] = false;
    return acc;
  }, {});
  const networks = [];
  let temp = [];

  function dp(idx) {
    if (visit[idx]) return;
    visit[idx] = true;
    temp.push(idx);
    for (let i = 0; i < n; i++) {
      if (computers[idx][i]) dp(i);
    }
  }

  for (let i = 0; i < n; i++) {
    if (visit[i]) continue;
    dp(i);
    if (temp.length) {
      networks.push(temp);
      temp = [];
    }
  }

  return networks.length;
}
