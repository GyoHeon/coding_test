function solution(num_list) {
  const oddNum = num_list.filter((x) => x % 2).length;
  return [num_list.length - oddNum, oddNum];
}
