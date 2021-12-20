function solution(n, m) {
  let answer = [];
  for (let i = n; i >= 1; i--) {
    if (!(n % i) && !(m % i)) {
      answer.push(i);
      break;
    }
  }
  for (let i = m; true; i++) {
    if (!(i % n) && !(i % m)) {
      answer.push(i);
      break;
    }
  }
  return answer;
}
