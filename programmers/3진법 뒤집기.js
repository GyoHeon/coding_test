function solution(n) {
  n = parseInt((n.toString(3) + "").split("").reverse().join(""), 3);
  return n;
}

console.log(solution(45));
