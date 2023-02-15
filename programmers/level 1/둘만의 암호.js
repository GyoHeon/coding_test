function solution(s, skip, index) {
  const arr = skip.split("").map((x) => x.charCodeAt());
  const answer = s.split("").map((x) => {
    let num = x.charCodeAt();
    for (let i = 0; i < index; i++) {
      num = ascend(num, arr);
    }
    return num;
  });
  return String.fromCharCode(...answer);
}

const up = (num) => (num === 122 ? 97 : num + 1);
const ascend = (num, arr) => {
  do num = up(num);
  while (arr.includes(num));
  return num;
};
