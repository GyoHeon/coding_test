function solution(s) {
  s = s.split("},{");
  s[0] = s[0].slice(2);
  s[s.length - 1] = s[s.length - 1].slice(0, -2);
  s.sort((a, b) => a.length - b.length);
  s = s.map((x) => x.split(",").map(Number));
  let answer = [];
  for (let i of s) {
    for (let j of i) {
      if (answer.indexOf(j) < 0) {
        answer.push(j);
        break;
      }
    }
  }
  return answer;
}

console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
