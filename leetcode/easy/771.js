var numJewelsInStones = function (jewels, stones) {
  const stonesArr = stones.split("");
  let answer = 0;
  jewels.split("").map((jewel) => {
    stonesArr.forEach((stone) => {
      if (stone === jewel) answer++;
    });
  });
  return answer;
};
