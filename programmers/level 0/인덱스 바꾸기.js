function solution(my_string, num1, num2) {
  const newStr = my_string.split("");
  const firstWord = newStr[num1];
  const secondWord = newStr[num2];
  newStr[num1] = secondWord;
  newStr[num2] = firstWord;
  return newStr.join("");
}
