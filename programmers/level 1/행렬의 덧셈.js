function solution(arr1, arr2, sign) {
  let len = arr1[0].length;
  let c = [];
  for (let i in arr1) {
    c[i] = new Array(len);
    for (let j = 0; j < len; j++) {
      c[i][j] = sign[i][j]
        ? arr1[i][j] + arr2[i][j]
        : -(arr1[i][j] + arr2[i][j]);
    }
  }
  return c;
}
console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ],
    [
      [true, true],
      [true, false],
    ]
  )
);
console.log(solution([[1], [2]], [[3], [4]], [[false], [false]]));
