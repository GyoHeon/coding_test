function solution(myString, pat) {
  const patR = [...pat].reduce(
    (acc, cur) => acc + (cur === "A" ? "B" : "A"),
    ""
  );
  return +myString.includes(patR);
}
