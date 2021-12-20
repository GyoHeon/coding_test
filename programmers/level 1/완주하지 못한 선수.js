function solution1(participant, completion) {
  let newWord = participant.join("");
  for (let i in completion) {
    newWord = newWord.replace(completion[i], "");
  }
  return newWord;
}

function solution2(participant, completion) {
  let newWord = new Object();
  for (let i in participant) {
    newWord[participant[i]]
      ? newWord[participant[i]]++
      : (newWord[participant[i]] = 1);
    console.log(newWord);
  }
  for (let j in completion) {
    newWord[completion[j]] -= 1;
  }
  for (key in newWord) {
    if (newWord[key] == 1) return key;
  }
}
