const arr = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
  return babbling
    .map((b) => {
      arr.forEach((a) => {
        b = b.replace(a + a, "*");
      });
      arr.forEach((a) => {
        b = b.replaceAll(a, "0");
      });
      return b;
    })
    .reduce((acc, cur) => {
      return acc + (Number(cur) === 0);
    }, 0);
}
