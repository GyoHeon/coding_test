var distributeCandies = function (candyType) {
  let answer = Math.floor(candyType.length / 2);
  const types = [];
  candyType.forEach((x) => {
    if (!types.includes(x)) types.push(x);
  });
  return Math.min(answer, types.length);
};
