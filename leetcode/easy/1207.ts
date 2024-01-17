function uniqueOccurrences(arr: number[]): boolean {
  let answer = true;
  const numMap = new Map();
  arr
    .reduce((acc, cur) => {
      acc.set(cur, acc.has(cur) ? acc.get(cur) + 1 : 1);
      return acc;
    }, new Map())
    .forEach((v, k) => {
      if (!numMap.has(v)) numMap.set(v, []);
      numMap.get(v).push(k);
    });
  numMap.forEach((v) => {
    if (v.length >= 2) answer = false;
  });

  return answer;
}
