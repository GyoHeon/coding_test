function solution(my_string) {
  const answer = my_string.split("").reduce((acc, cur) => {
    if (isNum(cur) === false) return acc;
    return acc.concat(isNum(cur));
  }, []);
  return answer.sort((a, b) => a - b);
}

const isNum = (n) => {
  if (isNaN(n)) return false;
  return Number(n);
};
