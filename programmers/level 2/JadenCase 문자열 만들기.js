function solution(s) {
  const regEx2 = / [a-z]/g;
  const regEx3 = /^[a-z]/g;
  answer = s.toLowerCase();
  answer = answer.replace(regEx2, (x) => x.toUpperCase());
  answer = answer.replace(regEx3, (x) => x.toUpperCase());
  return answer;
}

let s = "3people unFollowed me";

console.log(solution(s));
