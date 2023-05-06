function encode(a, b) {
  return Number("" + a + b);
}
function solution(a, b) {
  var answer = 0;
  return Math.max(encode(a, b), encode(b, a));
}
