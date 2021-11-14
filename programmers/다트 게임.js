function solution(dartResult) {
  dartResult = dartResult.split("");
  for (let i = 0; i < dartResult.length - 1; i++) {
    if (dartResult[i] === "1" && dartResult[i + 1] == 0) {
      dartResult[i] = "10";
      dartResult.splice(i + 1, 1);
    }
  }
  let score = 0;
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "S") {
      dartResult[i - 1] = dartResult[i - 1] * 1;
      dartResult.splice(i, 1);
    } else if (dartResult[i] === "D") {
      dartResult[i - 1] = dartResult[i - 1] ** 2;
      dartResult.splice(i, 1);
    } else if (dartResult[i] === "T") {
      dartResult[i - 1] = dartResult[i - 1] ** 3;
      dartResult.splice(i, 1);
    }
  }
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "#") {
      dartResult[i - 1] = dartResult[i - 1] * -1;
      dartResult.splice(i, 1);
    }
  }
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "*") {
      if (dartResult.indexOf("*") === 1) {
        dartResult[i - 1] = dartResult[i - 1] * 2;
        dartResult.splice(1, 1);
      } else {
        dartResult[i - 1] = dartResult[i - 1] * 2;
        dartResult[i - 2] = dartResult[i - 2] * 2;
        dartResult.splice(i, 1);
      }
    }
  }
  score = dartResult.reduce((a, b) => a + b);
  return score;
}
