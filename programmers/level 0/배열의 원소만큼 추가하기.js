function solution(arr) {
  return arr.reduce((acc, cur) => {
    for (let i = 0; i < cur; i++) acc.push(cur);
    return acc;
  }, []);
}
