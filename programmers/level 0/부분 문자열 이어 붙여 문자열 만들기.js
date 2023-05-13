function solution(my_strings, parts) {
  return my_strings.reduce(
    (acc, cur, idx) => acc + cur.slice(parts[idx][0], parts[idx][1] + 1),
    ""
  );
}
