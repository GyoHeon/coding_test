function countPrimeSetBits(left: number, right: number): number {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    const bit = getBit(i);
    answer += Number(isPrime(bit));
  }

  return answer;
}

function getBit(num: number): number {
  const numStr = num.toString(2);
  return [...numStr].reduce((acc, cur) => acc + Number(cur), 0);
}

function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i <= num ** (1 / 2); i++) {
    if (num % i === 0) return false;
  }

  return true;
}
