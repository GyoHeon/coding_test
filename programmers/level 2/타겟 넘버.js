function solution(numbers, target) {
  let answer = 0;

  function dfs(n, rest) {
    if (n === numbers.length) {
      if (rest === target) answer++;
      return;
    }

    const num = numbers[n];

    dfs(n + 1, rest + num);
    dfs(n + 1, rest - num);
  }

  dfs(0, 0);

  return answer;
}
