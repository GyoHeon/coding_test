let s = "MCMXCIV";

var romanToInt = function (s) {
  const obj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const li = s.split("").map((roman) => obj[roman]);
  let sum = 0;
  for (let i = 0; i < li.length - 1; i++) {
    li[i] >= li[i + 1] ? (sum += li[i]) : (sum -= li[i]);
  }
  return sum + li[li.length - 1];
};

console.log(romanToInt(s));
