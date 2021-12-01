const n = 3;

function solution(n) {
  let i = 1;
  while (true) {
    if (n * 2 < (i + 2) * (i + 1)) return i;
    i++;
  }
}

console.log(solution(n));
