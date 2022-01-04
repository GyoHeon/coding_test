let bitwiseComplement1 = function (n) {
  let length = n.toString(2).length;
  const answer = 2 ** length - 1 - n;
  return answer;
};

let bitwiseComplement2 = function (n) {
  let string = n
    .toString(2)
    .split("")
    .map((x) => (x === "1" ? 0 : 1))
    .join("");
  return parseInt(string, 2);
};
