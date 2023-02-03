var isCircularSentence = function (sentence) {
  if (sentence[0] !== sentence[sentence.length - 1]) return false;
  const strArr = sentence.split(" ");
  const len = strArr.length;
  for (let i = 0; i < len - 1; i++) {
    const temp = strArr[i];
    if (temp[temp.length - 1] !== strArr[i + 1][0]) return false;
  }
  return true;
};
