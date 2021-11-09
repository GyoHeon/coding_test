function solution(s) {
  s = s.split(" ");
  let newWord = "";
  for (let i in s) {
    for (let j in s[i]) {
      j % 2
        ? (newWord += s[i][j].toLowerCase())
        : (newWord += s[i][j].toUpperCase());
    }
    newWord += " ";
  }
  return newWord.slice(0, -1);
}
