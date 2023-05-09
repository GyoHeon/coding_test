function solution(num_list) {
  const arr = num_list.reduce(
    (acc, cur) => {
      acc[cur % 2] += cur.toString();
      return acc;
    },
    ["", ""]
  );

  return Number(arr[0]) + Number(arr[1]);
}
