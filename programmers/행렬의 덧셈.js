function sum(a, b) {
  let len = a[0].length;
  let c = [];
  for (let i in a) {
    c[i] = new Array(len);
    for (let j = 0; j < len; j++) {
      c[i][j] = a[i][j] + b[i][j];
    }
  }
}
