let li = [1, 3, 5];

li.sort((a, b) => a - b).map(Number);
let max = 0;

li.forEach((x, index) => {
  let count = 0;
  for (let i = 0; i < 5; i++) {
    li.slice(index, index + 5).includes(x + i) ? count++ : null;
  }
  max = Math.max(max, count);
});

console.log(5 - max);
