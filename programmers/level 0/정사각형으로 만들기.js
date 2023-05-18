function solution(arr) {
  const max = Math.max(arr.length, Math.max(...arr.map((x) => x.length)));
  const answer = arr.map((x) => {
    if (x.length < max) {
      x.push(...Array(max - x.length).fill(0));
    }
    return x;
  });
  while (answer.length < max) {
    answer.push(Array(max).fill(0));
  }
  return answer;
}
