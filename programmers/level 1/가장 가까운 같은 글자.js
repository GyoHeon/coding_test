function solution(s) {
  const obj = {};
  return s.split("").map((str, idx) => {
    if (obj[str] === undefined) {
      obj[str] = idx;
      return -1;
    }
    const answer = idx - obj[str];
    obj[str] = idx;
    return answer;
  });
}
