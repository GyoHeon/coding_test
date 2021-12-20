function solution(n) {
  n = Array.from(String(n), Number).sort().reverse();
  return n.join("") * 1;
}

console.log(solution(3122312));
