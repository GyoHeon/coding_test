function solution(want, number, discount) {
  let answer = 0;
  const tempObj = discount.slice(0, 10).reduce((acc, cur) => {
    if (acc[cur]) acc[cur]++;
    else acc[cur] = 1;
    return acc;
  }, {});
  const obj = want.reduce((acc, cur, idx) => {
    acc[cur] = number[idx];
    return acc;
  }, {});

  for (let i = 10; i <= discount.length; i++) {
    if (isCorrect(obj, tempObj)) answer++;
    tempObj[discount[i]] = tempObj[discount[i]] ? tempObj[discount[i]] + 1 : 1;
    tempObj[discount[i - 10]]--;
  }

  return answer;
}

const isCorrect = (first, second) => {
  for (const key of Object.keys(first)) {
    if (first[key] !== second[key]) return false;
  }
  return true;
};
