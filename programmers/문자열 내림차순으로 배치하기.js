let a = "Zbcdefg";
console.log(
  [...a].sort(function (a, b) {
    return b.localeCompare(a);
  })
);
