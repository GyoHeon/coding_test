function solution(k, tangerine) {
  const obj = tangerine.reduce((acc, cur) => {
    if (acc[cur]) acc[cur] += 1;
    else acc[cur] = 1;
    return acc;
  }, {});
  const arr = Object.values(obj).sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum >= k) return i + 1;
  }
  return arr.length;
}
