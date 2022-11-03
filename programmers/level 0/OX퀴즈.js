function solution(quiz) {
  return quiz
    .map((x) => x.split(" = "))
    .map((x) => {
      if (eval(x[0]) == x[1]) return "O";
      return "X";
    });
}
