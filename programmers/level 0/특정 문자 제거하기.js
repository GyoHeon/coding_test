function solution(my_string, letter) {
  return my_string
    .split("")
    .filter((x) => x !== letter)
    .join("");
}
