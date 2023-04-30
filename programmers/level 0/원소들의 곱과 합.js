function solution(num_list) {
  const [a1, a2] = num_list.reduce(
    (acc, cur) => {
      acc[0] *= cur;
      acc[1] += cur;
      return acc;
    },
    [1, 0]
  );
  return (a1 < a2 ** 2) * 1;
}
