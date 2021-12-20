function solution(citations) {
  var answer = 0;

  for (let i = 0; i <= citations.length; i++) {
    citations.filter((x) => x >= i).length >= i ? (answer = i) : null;
  }

  return answer;
}
