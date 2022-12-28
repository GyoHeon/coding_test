function solution(box, n) {
  return box.reduce((acc, cur) => {
    const num = parseInt(cur / n);
    return acc * num;
  }, 1);
}
