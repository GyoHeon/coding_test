function solution(polynomial) {
  const arr = polynomial.split(" + ");
  const answer = arr.reduce(
    (acc, cur) => {
      if (cur === "x") {
        acc[0] += 1;
        return acc;
      }
      if (cur.includes("x")) {
        acc[0] += Number(cur.split("x")[0]);
        return acc;
      }
      acc[1] += Number(cur);
      return acc;
    },
    [0, 0]
  );
  if (answer[0] === 0) return answer[1].toString();
  if (answer[0] === 1) answer[0] = "";
  if (answer[1] === 0) return answer[0] + "x";
  return answer.join("x + ");
}
