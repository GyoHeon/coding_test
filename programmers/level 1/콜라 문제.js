function solution(a, b, n) {
  let answer = 0;

  const cola = (x) => {
    console.log(answer, x);
    if (x < a) return;
    const temp = Math.floor(x / a);
    answer += temp * b;
    cola(x - temp * (a - b));
  };
  cola(n);

  return answer;
}
