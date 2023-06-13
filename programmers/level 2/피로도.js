function solution(k, dungeons) {
  let answer = 0;

  function dfs(n, rest, restDungeons) {
    restDungeons.forEach(([h, s], idx) => {
      if (h <= rest) {
        dfs(n + 1, rest - s, [
          ...restDungeons.slice(0, idx),
          ...restDungeons.slice(idx + 1),
        ]);
        answer = Math.max(answer, n + 1);
      }
    });
  }

  dfs(0, k, dungeons);

  return answer;
}
