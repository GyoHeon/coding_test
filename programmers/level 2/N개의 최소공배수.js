function solution(arr) {
  return arr.reduce((acc, cur) => {
    const gcdTwo = gcd(acc, cur);
    return (acc * cur) / gcdTwo;
  }, 1);
}

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}
