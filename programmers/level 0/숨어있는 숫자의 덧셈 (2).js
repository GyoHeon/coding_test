function solution(my_string) {
  return eval(
    my_string
      .replace(/([a-zA-Z])+/g, " ")
      .trim()
      .replace(/ /g, "+") + "+0"
  );
}
