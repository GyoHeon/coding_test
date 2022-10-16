function solution(X, Y) {
  const answer = {};
  X.split("").forEach((x) => (answer[x] ? answer[x]++ : (answer[x] = 1)));
  const result = Y.split("")
    .filter((x) => {
      if (answer[x] > 0) {
        answer[x]--;
        return true;
      }
      return false;
    })
    .sort((a, b) => b - a)
    .join("");
  if (!result.length) return "-1";
  else if (Number(result) === 0) return "0";
  return result;
}

console.log(solution("123", "321"));
