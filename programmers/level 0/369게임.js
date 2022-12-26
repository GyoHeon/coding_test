function solution(order) {
  return order
    .toString()
    .split("")
    .reduce((acc, cur) => {
      if (cur != 0 && cur % 3 == 0) return acc + 1;
      return acc;
    }, 0);
}
