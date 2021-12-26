function solution(s) {
  s = s.split("");
  if (s.length % 2) return 0;
  const regExp = /(.)\1/;
  for (let i = 0; i < s.length - 1; i) {
    if (s[i] === s[i + 1]) {
    }
  }
  return s ? 0 : 1;
}

console.log(solution("baabaa"));
