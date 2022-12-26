function solution(before, after) {
  let answer = 1;
  const newAfter = after.split("");
  before.split("").forEach((x) => {
    const isIndex = newAfter.indexOf(x);
    if (isIndex !== -1) {
      newAfter.splice(isIndex, 1);
    } else {
      answer = 0;
    }
  });
  return answer;
}
