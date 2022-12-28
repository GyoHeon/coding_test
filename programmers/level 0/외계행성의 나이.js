function solution(age) {
  const newAge = age
    .toString()
    .split("")
    .map((x) => x.charCodeAt() + 49);
  return String.fromCharCode(...newAge);
}
