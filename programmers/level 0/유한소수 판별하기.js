function solution(a, b) {
  a = divide2(divide1(a));
  b = divide2(divide1(b));
  for (let i = 0; i < a.length; i++) {
    const index = b.indexOf(a[i]);
    if (index >= 0) b.splice(index, 1);
  }
  return b.length === 0 ? 1 : 2;
}
const divide1 = (num) => {
  const arr = [2, 5];
  for (const i of arr) while (!(num % i)) num /= i;
  return num;
};
const divide2 = (num) => {
  const arr = [];
  for (let i = 2; i <= num; i++)
    while (!(num % i)) {
      arr.push(i);
      num /= i;
    }
  return arr;
};
