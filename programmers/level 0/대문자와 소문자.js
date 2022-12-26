function solution(my_string) {
  return my_string
    .split("")
    .map((str) => {
      if (str === str.toUpperCase()) return str.toLowerCase();
      return str.toUpperCase();
    })
    .join("");
}
