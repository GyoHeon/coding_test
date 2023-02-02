function solution(t, p) {
  let answer = 0;
  const len = p.length;
  for (let i = 0; i < t.length - len + 1; i++) {
    const temp = +t.slice(i, i + len);
    answer += temp <= Number(p);
  }
  return answer;
}
