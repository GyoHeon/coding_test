var fizzBuzz = function (n) {
  const answer = Array.from(Array(n).fill(0)).map((item, idx) => {
    if (!((idx + 1) % 15)) return "FizzBuzz";
    else if (!((idx + 1) % 5)) return "Buzz";
    else if (!((idx + 1) % 3)) return "Fizz";
    else return (idx + 1).toString();
  });
  return answer;
};
