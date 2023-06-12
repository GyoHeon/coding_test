function solution(elements) {
  const answer = new Set();
  const arr = [...elements, ...elements];
  let idx = 0;
  while (idx < elements.length) {
    let sum = 0;
    for (let i = 0; i < elements.length; i++) {
      sum += arr[idx + i];
      answer.add(sum);
    }
    idx++;
  }
  return answer.size;
}
