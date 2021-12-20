let s = "abcdefghijklmnopqrstuvwxyz";
let n = 1;
let answer = "";
for (let i of s) {
  if (97 <= i.charCodeAt(0) && i.charCodeAt(0) <= 122) {
    answer = answer.concat(
      String.fromCharCode(((i.charCodeAt(0) - 19 + n) % 26) + 97)
    );
  } else if (65 <= i.charCodeAt(0) && i.charCodeAt(0) <= 90) {
    answer = answer.concat(
      String.fromCharCode(((i.charCodeAt(0) - 13 + n) % 26) + 65)
    );
  } else {
    answer = answer.concat(" ");
  }
}
console.log(answer);
//97~122
//65~90
