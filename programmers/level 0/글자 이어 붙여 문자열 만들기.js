function solution(my_string, index_list) {
  return index_list.reduce((acc, cur) => acc + my_string[cur], "");
}
