let dartResult = "1S2D*3T";
let score = 0;
let num = 0;
for (let i of dartResult) {
  if (parseInt(i) !== NaN) {
    console.log(parseInt(i));
  } else {
    score += parseInt(i);
  }
}
console.log(score);
