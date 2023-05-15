function solution(arr, intervals) {
  return intervals.reduce(
    (acc, x) => [...acc, ...arr.slice(x[0], x[1] + 1)],
    []
  );
}
