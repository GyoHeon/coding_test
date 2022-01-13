function solution(clothes) {
  let answer = 0;
  const arr2d = [];
  const arrClothes = [];
  clothes.forEach((x) => {
    if (arrClothes.indexOf(x[1]) === -1) {
      arrClothes.push(x[1]);
      arr2d.push(1);
    } else {
      arr2d[arrClothes.indexOf(x[1])]++;
    }
  });

  return arr2d.reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
