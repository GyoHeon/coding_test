function solution(arr) {
  let num = Math.min(...arr);
  for (let i in arr) {
    if (arr[i] === num) {
      arr.splice(i, 1);
    }
  }
  return arr.length ? arr : [-1];
}
