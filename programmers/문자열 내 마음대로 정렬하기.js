function solution(strings, n) {
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i][n] + strings[i];
  }
  strings = strings.sort();
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].substr(1);
  }
  return strings;
}
