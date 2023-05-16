function solution(myString) {
  return myString
    .split("x")
    .filter((x) => x)
    .sort();
}
