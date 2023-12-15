function countAndSay(n: number): string {
  let answer = "1";

  while (n > 1) {
    answer = pronounce(answer);
    n--;
  }

  return answer;
}

function pronounce(str: string) {
  let answer = "";

  let letter = str[0];
  let count = 0;
  str.split("").forEach((s) => {
    if (s === letter) {
      count++;
    } else {
      answer += count + letter;
      letter = s;
      count = 1;
    }
  });
  answer += count + letter;

  return answer;
}
