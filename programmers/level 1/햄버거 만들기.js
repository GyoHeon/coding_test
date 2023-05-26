function solution(ingredient) {
  let answer = 0;
  const temp = [];

  for (let i = 0; i < ingredient.length; i++) {
    temp.push(ingredient[i]);
    if (temp.slice(-4).join("") === "1231") {
      for (let j = 0; j < 4; j++) {
        temp.pop();
      }
      answer++;
    }
  }

  return answer;
}
