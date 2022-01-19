var maxArea = function (height) {
  let answer = 0;
  height.forEach((x, index) => {
    for (let i = height.length - 1; i > index; i--) {
      if (height[i] >= x) {
        let area = x * (i - index);
        area > answer ? (answer = area) : null;
        break;
      }
      let area = (i - index) * height[i];
      area > answer ? (answer = area) : null;
    }
  });
  return answer;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
