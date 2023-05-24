function solution(arr, k) {
  const temp = [...new Set(arr)].slice(0, k);
  const len = k - temp.length;
  temp.push(...Array(len).fill(-1));
  return temp;
}
