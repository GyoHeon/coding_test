function solution(my_string) {
  let obj = {};
  const answer = my_string
    .split("")
    .filter((x) => {
      if (!obj[x]) {
        obj[x] = true;
        return x;
      }
    })
    .join("");

  return answer;
}
