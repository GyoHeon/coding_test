function longestPalindrome(s: string): string {
  let len = s.length;
  while (len) {
    let palin = s
      .slice(0, len - 1)
      .split("")
      .reverse()
      .join("");
    for (let i = 0; i <= s.length - len; i++) {
      let temp = s.slice(i, i + len);
      palin = temp[len - 1] + palin.slice(0, len - 1);
      if (temp === palin) return temp;
    }

    len--;
  }
  return s;
}
