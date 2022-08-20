const lengthOfLastWord = (s) => {
  const lastWord = s.match(/(\w+)/g).pop();
  return lastWord.length;
};
