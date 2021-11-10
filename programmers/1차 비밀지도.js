function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    let hor = "";
    let j = arr1[i].toString(2) * 1;
    let k = arr2[i].toString(2) * 1;
    let l = (j + k).toString().padStart(n, "0").split("");
    for (let i of l) {
      i === "0" ? (hor += " ") : (hor += "#");
    }
    answer.push(hor);
  }
  return answer;
}
