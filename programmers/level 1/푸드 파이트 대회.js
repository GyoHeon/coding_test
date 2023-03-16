function solution(food) {
  let answer = food.map((x, idx) => {
    const len = Math.floor(x / 2);
    return idx.toString().repeat(len);
  });
  return answer.join("") + "0" + answer.reverse().join("");
}
