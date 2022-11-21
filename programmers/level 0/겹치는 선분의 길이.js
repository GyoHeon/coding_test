function solution(lines) {
  let sum = 0;
  const answer = {};
  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0]; j < lines[i][1]; j++) {
      if (answer[j]) answer[j] += 1;
      else answer[j] = 1;
    }
  }
  for (let k in answer) {
    if (answer[k] >= 2) sum++;
  }
  return sum;
}
