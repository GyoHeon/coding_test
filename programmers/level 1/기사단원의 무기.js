function getDivisor(n) {
  let answer = 2;
  if (n === 1) return 1;
  for (let i = 2; i < n ** 0.5; i++) {
    if (!(n % i)) answer += 2;
  }
  if (parseInt(n ** 0.5) === n ** 0.5) answer++;

  return answer;
}

function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    const divisor = getDivisor(i);
    answer += divisor > limit ? power : divisor;
  }
  return answer;
}
