function solution(participant, completion) {
  let newWord = participant.join("");
  for (let i in completion) {
    newWord = newWord.replace(completion[i], "");
  }
  return newWord;
}
