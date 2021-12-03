const w = 5;
const h = 3;
let result = w * h;
const inclination = w / h;
for (let i = 0; i < h; i++) {
  const square = Math.ceil((i + 1) * inclination) - Math.floor(i * inclination);
  result -= square;
}
console.log(result);
