function solution(rsp) {
  const arr = ["2", "0", "5", "2"];
  return rsp
    .split("")
    .map((x) => arr[arr.indexOf(x) + 1])
    .join("");
}
