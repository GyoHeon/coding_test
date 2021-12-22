var convert = function (s, numRows) {
  if (numRows === 1) return s;
  let answer = [];
  for (let i = 0; i < numRows; i++) {
    answer.push([]);
  }
  s = s.split("");
  s.forEach((x, i) => {
    let index = i % (2 * numRows - 2);
    if (index >= numRows) index = 2 * numRows - index - 2;
    answer[index].push(x);
  });
  answer = answer.map((x) => x.join(""));
  return answer.join("");
};

const s = "PAYPALISHIRING";

console.log(convert(s, 4));

// 1:1(0)
// 2:2(0~1)
// 3:4(0~3)
// 4:6(0~5)
// 5:8(0~7)
// 6:10(0~9)
