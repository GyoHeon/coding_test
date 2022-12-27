function solution(my_string) {
  const obj = { a: true, e: true, i: true, o: true, u: true };
  return my_string
    .split("")
    .filter((x) => !obj[x])
    .join("");
}
