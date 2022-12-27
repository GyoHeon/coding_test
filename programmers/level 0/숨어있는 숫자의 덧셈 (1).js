function solution(my_string) {
  return my_string.split("").reduce((acc, cur) => acc + toNum(cur), 0);
}

const toNum = (n) => {
  if (isNaN(n)) return 0;
  return Number(n);
};
