let n = 5;
let answer = [];
while (n) {
  if (n / 4 >= 1) {
    const value = Math.floor(n / 3);
    answer.push(value);
    n -= n % 3;
  } else {
    answer.push(n);
    n = 0;
  }
}
console.log(answer);
answer = answer.map((x) => {
  if (x === 1) return 1;
  else if (x === 2) return 2;
  else return 4;
});
console.log(answer);

1, 1;
2, 2;
3, 4;

3 + 1, 11;
3 + 2, 12;
3 + 3, 14;

6 + 1, 21;
6 + 2, 22;
6 + 3, 24;

9 + 1, 41;
9 + 2, 42;
9 + 3, 44;

12 + 1, 111;
