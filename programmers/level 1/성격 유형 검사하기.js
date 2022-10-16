function solution(survey, choices) {
  const RFMA = [
    ["R", "T"],
    ["F", "C"],
    ["M", "J"],
    ["A", "N"],
  ];
  const score = {
    RT: [0, 1],
    TR: [0, -1],
    FC: [1, 1],
    CF: [1, -1],
    MJ: [2, 1],
    JM: [2, -1],
    AN: [3, 1],
    NA: [3, -1],
  };
  const answer = [0, -0.5, -0.5, 0];
  survey.forEach((item, index) => {
    answer[score[item][0]] -= (choices[index] - 4) * score[item][1];
  });
  const str = answer.map((item, index) => {
    if (item >= 0) return RFMA[index][0];
    else return RFMA[index][1];
  });
  return str.join("");
}
