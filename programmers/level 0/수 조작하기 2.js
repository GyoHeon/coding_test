const obj = {
  1: "w",
  "-1": "s",
  10: "d",
  "-10": "a",
};

function solution(numLog) {
  return numLog.reduce((acc, cur, idx) => {
    if (!idx) return acc;
    acc += obj[cur - numLog[idx - 1]];
    return acc;
  }, "");
}
