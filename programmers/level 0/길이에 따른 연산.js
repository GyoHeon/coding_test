function solution(num_list) {
  const math = num_list.length > 10 ? "+" : "*";
  return num_list.reduce((acc, cur) => eval(`${acc} ${math} ${cur}`));
}
