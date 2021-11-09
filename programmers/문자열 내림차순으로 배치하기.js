let a = "AZbcdefg";
let answer = [];
let newWord = "";
for (let i of a) {
  answer.push(i.charCodeAt(0));
}
for (let i of answer.sort((a, b) => b - a)) {
  newWord = newWord.concat(String.fromCharCode(i));
}
console.log(newWord);
