var isPalindrome = function (s) {
  const regEx = /[^A-Za-z0-9]/g;
  s = s.replace(regEx, "").toLowerCase();
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
};
